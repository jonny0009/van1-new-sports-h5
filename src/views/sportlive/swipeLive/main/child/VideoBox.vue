<template>
  <div class="video-box-wrap" @click="touch">
    <video
      id="VideoRef"
      :style="{ 'object-fit': 'fill' }"
      class="video-js vjs-default-skin"
      playsinline="true"
      controls
      preload="metadata"
      @play="playVideo"
    ></video>
    <div v-if="videoErrorState" class="video-error">
      <span class="video-icon"></span>
      <div class="error-tips">{{ $t('live.videoFailure') }}</div>
      <div class="error-btn" @click="refresh">{{ $t('live.refreshVideo') }}</div>
    </div>

    <div
      class="pop"
      :class="{
        popBg: popBgToggle
      }"
    >
      <van-loading class="popBg-loading" />
    </div>
    <div class="touch-pop" v-if="tocuhState">
      <div class="team-info">
        <div class="team-item">
          <img v-img="liveInfo.homeLogo" :type="4" style="object-fit: contain" alt="" />
          <span class="team-name text-overflow">{{ liveInfo.homeTeamAbbr || liveInfo.homeTeam }}</span>
        </div>
        <div class="team-item">
          <span class="team-name text-overflow">{{ liveInfo.awayTeamAbbr || liveInfo.awayTeam }}</span>
          <img v-img="liveInfo.awayLogo" :type="5" style="object-fit: contain" alt="" />
        </div>
      </div>
      <div class="team-score">{{ getScore(liveInfo, 'H') }} : {{ getScore(liveInfo, 'C') }}</div>
      <div class="match-btn" @click.stop="goDetails">{{ $t('live.goLive') }}</div>
    </div>

    <div class="sound-icon" :class="{ muted: muted }" @click.stop="soundHandle"></div>
  </div>
</template>
<script lang="ts" setup>
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import { ref, watch, onBeforeMount, onBeforeUnmount, nextTick, computed } from 'vue'
import store from '@/store'
import { useRouter } from 'vue-router'
import { getScore } from '@/utils/home/getScore'
const router = useRouter()
const turnSound = computed(() => store.state.match.turnSound)

const props: any = defineProps({
  liveInfo: {
    type: Object,
    default: () => {}
  },
  liveUrl: {
    type: String,
    default: ''
  },
  controls: {
    type: Boolean,
    default: true
  }
})

const videoExample: any = ref(null)
const videoErrorState: any = ref(false)
const muted = ref(true)
const tocuhState = ref(false)

watch(turnSound, (newValue, oldValue) => {
  console.log(`turnSound发生变化，新值为：${newValue}，旧值为：${oldValue}`)
  if (newValue) {
    videoExample.value.muted(false)
    muted.value = false
  } else {
    videoExample.value.muted(true)
    muted.value = true
  }
})

const touch = () => {
  tocuhState.value = !tocuhState.value
}
const goDetails = () => {
  if (!props.liveInfo) {
    return
  }
  const { gidm } = props.liveInfo
  const params = {
    name: 'MatchDetail',
    params: {
      id: gidm
    }
  }
  router.push(params)
  store.dispatch('app/setMatchLiveIndex', 1)
}
const playVideo = () => {
  if (turnSound.value) {
    muted.value = false
    videoExample.value.muted(false)
  } else {
    muted.value = true
    videoExample.value.muted(true)
  }
}
const setTimeoutTime = ref()
const initVideo = () => {
  clearTimeout(setTimeoutTime.value)
  setTimeoutTime.value = setTimeout(() => {
    videoErrorState.value = false
    const videoRef: any = document.querySelector('#VideoRef')
    if (!(videoRef && props.liveUrl)) {
      return
    }
    try {
      videoExample.value = Video(
        'VideoRef',
        {
          muted: true,
          controls: props.controls,
          width: '100%',
          height: '100%',
          loop: true,
          autoplay: true,
          sources: [
            {
              src: props.liveUrl,
              type: 'application/x-mpegURL'
            }
          ]
        },
        () => {
          try {
            videoRef.muted = true
            videoRef.play()
            videoExample.value.on('error', () => {
              videoErrorState.value = true
              destroyVideo()
            })
          } catch (error) {
            console.error(error)
          }
        }
      )
    } catch (e) {
      console.error('视频异常！')
      console.error(e)
    }
  }, 500)
}
const destroyVideo = () => {
  try {
    videoExample.value.dispose && videoExample.value.dispose()
  } catch (e) {
    // console.error(e)
  }
}
const soundHandle = () => {
  const videoRef = document.querySelector('#VideoRef')
  if (!videoRef) {
    return false
  }
  if (videoExample.value.muted()) {
    videoExample.value.muted(false)
    muted.value = false

    store.commit('match/SET_TURN_SOUND', false)
  } else {
    videoExample.value.muted(true)
    muted.value = true
    store.commit('match/SET_TURN_SOUND', true)
  }
}
const emit = defineEmits(['refresh', 'touchVideo'])
const refresh = () => {
  emit('refresh')
}
const touchVideo = () => {
  emit('touchVideo')
}

defineExpose({
  refresh,
  touchVideo
})

const popBgToggle = ref(true)
onBeforeMount(() => {
  nextTick(() => {
    initVideo()
    setTimeout(() => {
      popBgToggle.value = false
    }, 2000)
  })
})
onBeforeUnmount(() => {
  destroyVideo()
})
</script>

<style lang="scss" scoped>
.video-box-wrap {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 50px;
  width: 100%;
  .video-js,
  .video-error,
  .video-error-1 {
    width: 100%;
    height: 100%;
  }
  .video-js {
    background: none;
  }

  .video-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #2e3439;
    border-radius: 20px;
    position: relative;
    z-index: 11;
  }
}

.sound-icon {
  position: absolute;
  right: 14px;
  bottom: -44px;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-position: center;
  &.muted {
    &::after {
      background-image: url('@/assets/images/sportlive/muted.svg');
    }
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    background-image: url('@/assets/images/sportlive/no-muted.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }
}

.video-icon {
  display: block;
  width: 120px;
  height: 40px;
  margin: 100px auto 20px;
  background: url('@/assets/images/sportlive/video.svg') no-repeat center;
  background-size: contain;
}
.error-tips {
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  font-weight: 400;
}
.error-btn {
  width: 200px;
  height: 60px;
  line-height: 60px;
  margin-top: 20px;
  text-align: center;
  background: var(--color-primary);
  border-radius: 4px;
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
}
.pop {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  .popBg-loading {
    display: none;
  }
}
.touch-pop {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.5);

  .team-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 8px;
    overflow: hidden;

    .team-item {
      display: flex;
      align-items: center;
      overflow: hidden;
      img {
        width: 44px;
        height: 44px;
        + .team-name {
          margin-left: 15px;
        }
      }
      .team-name {
        max-width: 240px;
        font-size: 24px;
        color: #fff;
        font-weight: 600;
        + img {
          margin-left: 15px;
        }
      }
    }
  }

  .team-score {
    text-align: center;
    margin-top: 42px;
    font-size: 32px;
    color: #fff;
  }

  .match-btn {
    display: inline-block;
    margin: 42px auto 0;
    padding: 0 8px;
    min-width: 250px;
    line-height: 52px;
    border-radius: 40px;
    background-image: linear-gradient(270deg, rgb(44, 136, 229) 0%, rgb(72, 163, 255) 100%);
    text-align: center;
    font-size: 24px;
    color: #fff;
  }
}
.popBg {
  background: url('@/assets/images/sportlive/ft.jpg') no-repeat;
  background-size: cover;
  .popBg-loading {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
