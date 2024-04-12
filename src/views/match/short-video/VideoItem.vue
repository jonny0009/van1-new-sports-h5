<template>
  <div class="room-wrap" ref="videoTarget">
    <div class="video-header-info">
      <div class="title text-overflow">{{ videoInfo.videoTitle }}</div>
      <div class="info">
        <img v-img="videoInfo.leagueIcon" type="1" alt="" />
        <div class="name text-overflow">{{ videoInfo.leagueName || videoInfo.leagueNameCn }}</div>
      </div>
    </div>
    <video ref="videoRef" class="video-js" playsinline webkit-playsinline x5-video-player-type></video>
    <div class="video-pause" @click="pauseHandle" v-if="!videoWaiting && !videoError && videoPause">
      <SvgIcon class="first-icon" name="live-pause" />
    </div>

    <div class="mask-loading" v-if="videoWaiting">
      <div class="icon"></div>
      <div class="text">{{ $t('live.effLoading') }}...</div>
    </div>
    <div class="video-error" v-else-if="videoError">
      <img :src="liveBgError" class="bg" />
      <div class="error-title">播放异常</div>
    </div>

    <div class="match-wrap" v-if="RPlay || OUPlay" @click.stop>
      <div class="match-info">
        <div class="match-lengua text-overflow">
          <SportsIcon class="sports-icon" :icon-src="matchInfo.gameType" />
          {{ matchInfo.leagueShortName || matchInfo.leagueName }}
        </div>
        <div class="team-info text-overflow">
          <img v-img="matchInfo.homeLogo" class="team-icon" alt="" :type="4" style="object-fit: contain" />
          {{ matchInfo.awayTeamAbbr || matchInfo.awayTeam }}
        </div>
        <div class="team-info text-overflow">
          <img v-img="matchInfo.awayLogo" class="team-icon" alt="" :type="5" style="object-fit: contain" />
          {{ matchInfo.homeTeamAbbr || matchInfo.homeTeam }}
        </div>
      </div>
      <div class="play-info-box">
        <div class="play-item" v-if="RPlay">
          <div class="play-name" v-play="RPlay"></div>

          <BettingOption
            v-for="(play, index) in RPlay.list"
            :key="index"
            :market-info="play.marketInfo"
            class="betting-option"
          >
            <span class="ratio-name text-overflow">
              {{ play.marketInfo.ratioName }}
            </span>
            <span class="ratio-ior">
              {{ play.marketInfo.vior }}
            </span>
          </BettingOption>
        </div>
        <div class="play-item" v-if="OUPlay">
          <div class="play-name" v-play="OUPlay"></div>

          <BettingOption
            v-for="(play, index) in OUPlay.list"
            :key="index"
            :market-info="play.marketInfo"
            class="betting-option"
          >
            <span class="ratio-name text-overflow">
              {{ play.marketInfo.ratioName }}
            </span>
            <span class="ratio-ior">
              {{ play.marketInfo.vior }}
            </span>
          </BettingOption>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { mainMatches } from '@/api/live'
import { computed } from 'vue'
import { MarketInfo } from '@/entitys/MarketInfo'
import liveBgError from '@/assets/images/empty/live-bg-error.svg?url'

const videoTarget = ref()
const props = defineProps({
  videoInfo: {
    type: Object,
    default: () => {}
  },
  active: {
    type: Boolean,
    default: false
  }
})
watch(
  () => props.active,
  async () => {
    if (props.active) {
      if (player) {
        player && player.play()
      } else {
        getMainMatches()
        initVideo()
      }
    } else {
      player && player.pause()
    }
  }
)
const play = () => {
  if (player) {
    player && player.play()
  } else {
    getMainMatches()
    initVideo()
  }
}
const pause = () => {
  player && player.pause()
}
const RPlay = computed(() => {
  const { R } = matchInfo.value
  if (R) {
    const { game, ratioData } = R

    const list: any = ratioData.map((ratio: any) => {
      const obj = { ...ratio, ...game, ...matchInfo.value, playType: 'R', systemId: gameInfo.value.systemId }
      const marketInfo = new MarketInfo(obj)
      return {
        marketInfo
      }
    })

    return {
      ...game,
      ...matchInfo.value,
      playType: 'R',
      list
    }
  }
  return null
})
const OUPlay = computed(() => {
  const { OU } = matchInfo.value
  if (OU) {
    const { game, ratioData } = OU

    const list: any = ratioData.map((ratio: any) => {
      const obj = { ...ratio, ...game, ...matchInfo.value, playType: 'OU', systemId: gameInfo.value.systemId }
      const marketInfo = new MarketInfo(obj)
      return {
        marketInfo
      }
    })

    return {
      ...game,
      ...matchInfo.value,
      playType: 'OU',
      list
    }
  }
  return null
})

const gameInfo: any = computed(() => {
  if (!props.videoInfo?.gameList?.length) {
    return false
  }
  return props.videoInfo.gameList[0]
})

const matchInfo: any = ref({})
const getMainMatches = async () => {
  if (!gameInfo?.value) {
    return false
  }
  const gidm = gameInfo?.value.gidm

  const res: any = await mainMatches({
    gidm
  })
  if (res?.code === 200 && res?.data) {
    matchInfo.value = res?.data
  }
}

onMounted(() => {
  if (props.active) {
    initVideo()
    getMainMatches()
  }
})
onUnmounted(() => {
  disposePlayer()
})

const videoRef = ref<HTMLDivElement | string>('')
const videoUrl: any = ref(null)
const videoError = ref(false)
const videoPause = ref(true)
const videoWaiting = ref(false)
let player: any = null
const initVideo = () => {
  videoUrl.value = props.videoInfo.videoUrl
  videoError.value = false
  videoPause.value = true
  videoWaiting.value = false
  const options = {
    preload: 'auto',
    width: '100%',
    height: '100%',
    loop: true,
    autoplay: true,
    muted: true,
    controls: false,
    fluid: true,
    bigPlayButton: false,
    loadingSpinner: false,
    errorDisplay: false,
    sources: [
      {
        src: videoUrl.value,
        // type: 'application/x-mpegURL'
        type: 'video/mp4'
      }
    ]
  }
  nextTick(() => {
    if (!player) {
      player = videojs(videoRef.value, options)
    }

    player.muted(false)
    player?.play()

    player.on('waiting', () => {
      videoWaiting.value = true
      videoError.value = false
      videoPause.value = false
    })

    player.on('playing', () => {
      videoWaiting.value = false
      videoError.value = false
      videoPause.value = false
    })

    player.on('error', () => {
      videoError.value = true
      videoWaiting.value = false
    })
    player.on('pause', () => {
      videoPause.value = true
    })
    player.on('click', () => {
      pauseHandle()
    })
  })
}
const disposePlayer = () => {
  player && player.dispose()
  player = null
}

const pauseHandle = () => {
  if (videoError.value) {
    return false
  }
  if (player.paused()) {
    player.play()
  } else {
    player.pause()
  }
}

defineExpose({
  videoTarget,
  play,
  pause
})
</script>

<style lang="scss" scoped>
.room-wrap {
  position: relative;
  border-bottom: 1px solid rgb(227, 231, 240);
  .video-js {
    position: relative;
    z-index: 8;
    width: 100% !important;
    height: 632px;
    object-fit: contain;
    margin: auto;
    padding: 0 !important;

    video {
      position: relative;
      z-index: -1;
    }
  }

  .video-pause {
    position: absolute;
    z-index: 11;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    margin: auto;
    font-size: 100px;
  }

  .mask-loading {
    position: absolute;
    z-index: 11;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .icon {
      width: 300px;
      height: 100px;
      background: url('@/assets/images/live/v_loading.png') no-repeat;
      background-size: 100% auto;
    }
    .text {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 20px;
    }
  }

  .video-error {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
    img {
      width: 108px;
      height: 100px;
      object-fit: cover;
    }
    .error-title {
      margin-top: 30px;
      color: #fff;
      font-size: 26px;
      font-weight: 600;
    }
  }

  .video-header-info {
    padding: 10px 13px 18px;

    .title {
      font-size: 22px;
      color: rgb(14, 61, 102);
      font-weight: 500;
    }

    .info {
      display: flex;
      align-items: center;
      overflow: hidden;
      flex: 1;
      margin-top: 20px;

      img {
        width: 34px;
        height: 34px;
      }
      .name {
        margin-left: 15px;
        font-size: 24px;
        color: rgb(14, 61, 102);
        font-weight: 600;
      }
    }
  }

  .match-wrap {
    display: flex;
    justify-content: space-between;
    z-index: 9;
    font-size: 42px;
    overflow: hidden;
    padding: 20px 15px;

    .match-info {
      width: 180px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;

      .sports-icon {
        font-size: 20px;
        margin-right: 10px;
      }
      .team-icon {
        display: inline-block;
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }

      .match-lengua {
        color: rgb(84, 99, 113);
        font-size: 20px;
        font-weight: 500;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      .team-info {
        height: 40px;
        line-height: 40px;
        color: rgb(84, 99, 113);
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 8px;
      }
    }

    .play-info-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 30px;

      .play-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:first-child {
          margin-right: 20px;
        }

        .play-name {
          color: rgb(14, 61, 102);
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .betting-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 190px;
          height: 48px;
          background-color: rgb(244, 245, 250);
          border-radius: 16px;
          padding: 0 15px;
          margin-bottom: 10px;

          &.selected {
            .ratio-name,
            .ratio-ior {
              color: #fff;
            }
          }

          .ratio-name {
            color: rgb(136, 166, 187);
            font-size: 20px;
            font-weight: 500;
          }
          .ratio-ior {
            margin-left: 6px;
            color: rgb(136, 166, 187);
            font-size: 22px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
