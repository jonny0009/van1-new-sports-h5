<template>
  <div class="room-wrap">
    <video ref="videoRef" class="video-js" playsinline webkit-playsinline x5-video-player-type></video>
    <div class="mask-loading" v-if="videoWaiting">
      <div class="icon"></div>
      <div class="text">{{ $t('live.effLoading') }}...</div>
    </div>
    <div class="video-header-info">
      <img v-img="videoInfo.leagueIcon" type="1" alt="" />
      <div class="info">
        <div class="name text-overflow">{{ videoInfo.leagueName || videoInfo.leagueNameCn }}</div>
        <div class="title text-overflow">{{ videoInfo.videoTitle }}</div>
      </div>
    </div>
    <div class="close-btn" @click="callback">
      <SvgIcon class="close-icon" name="home-short-close" />
    </div>

    <div class="match-wrap">
      <div class="match-info"></div>
      <div class="play-info"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { mainMatches } from '@/api/live'

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
  () => {
    if (props.active) {
      getMainMatches()
      initVideo()
    } else {
      player && player.pause()
    }
  }
)

const getMainMatches = async () => {
  if (!props.videoInfo.gameList?.length) {
    return false
  }
  const gidm = props.videoInfo.gameList[0]
  const res: any = await mainMatches({
    gidm
  })
  // if (res.code === 200 && vides.length) {
  // }
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

const $router = useRouter()
const callback = () => {
  $router.back()
}

const videoRef = ref<HTMLDivElement | string>('')
const videoUrl: any = ref(null)
const videoError = ref(false)
const videoWaiting = ref(false)
const videoIsInpicture = ref(false)
let player: any = null
const initVideo = () => {
  videoUrl.value = props.videoInfo.videoUrl
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
      player = videojs(videoRef.value, options, () => {
        player.log('onPlayerReady')
        const videoPip = document.pictureInPictureElement
        if (videoPip) {
          player.exitPictureInPicture().then(() => {
            player.log('画中画模式已关闭')
          })
        }
      })
    }

    player.muted(false)
    player?.play()

    player.on('waiting', () => {
      videoWaiting.value = true
    })

    player.on('playing', () => {
      videoWaiting.value = false
    })

    player.on('error', () => {
      videoError.value = true
      videoWaiting.value = false
    })

    player.on('enterpictureinpicture', () => {
      videoIsInpicture.value = true
    })

    player.on('leavepictureinpicture', () => {
      videoIsInpicture.value = false
    })
  })
}
const disposePlayer = () => {
  if (!videoIsInpicture.value) {
    player && player.dispose()
    player = null
  }
}
</script>

<style lang="scss" scoped>
.room-wrap {
  position: relative;
  height: 100vh;

  .video-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: auto;
  }

  .mask-loading {
    position: absolute;
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

  .video-header-info {
    display: flex;
    align-items: center;
    position: absolute;
    top: 55px;
    left: 30px;
    right: 30px;
    img {
      width: 80px;
      height: 80px;
    }
    .info {
      overflow: hidden;
      flex: 1;
      margin-left: 12px;
    }
    .name {
      font-size: 24px;
      color: #fff;
      font-weight: 600;
    }
    .title {
      font-size: 22px;
      color: #fff;
      font-weight: 500;
    }
  }
  .close-btn {
    position: absolute;
    z-index: 9;
    top: 55px;
    right: 30px;
    font-size: 42px;
  }
}
</style>
