<template>
  <div class="match-video">
    <iframe v-if="urlHtml && !videoWaiting" :src="urlHtml" style="width:100%;height:100%"></iframe>
    <video v-else ref="videoRef" class="video-js" playsinline webkit-playsinline x5-video-player-type></video>

    <div v-if="videoWaiting" class="mask-loading">
      <div class="icon"></div>
      <div class="text">{{ $t('live.effLoading') }}...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import store from '@/store'
import { watch, nextTick, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const emits = defineEmits(['on-error'])
const props = defineProps({
  url: String
})

const urlHtml = ref('')
watch(
  () => props.url,
  (newUrl) => {
    videoWaiting.value = true
    if (!newUrl) {
      emits('on-error', '没有播放链接')
      return
    }
    getUrl(newUrl as string)
  }
)

const getUrl = (url: string) => {
  //  加载视频网页 不全是 m3u8
  urlHtml.value = ''
  if (url.indexOf('.html') > -1) {
    urlHtml.value = url
    videoWaiting.value = false
    return
  }

  if (player) {
    player?.src(url)
    player?.load()
    player?.play()
    videoWaiting.value = false
  } else {
    initVideo(url)
  }
}

const route = useRoute()
const router = useRouter()
let player: any = null
const videoRef = ref<HTMLDivElement | string>('')
const videoWaiting = ref(true)
const videoIsInpicture = ref(false)
const initVideo = (url: string) => {
  const options = {
    preload: 'auto',
    width: '100%',
    height: '100%',
    autoplay: true,
    muted: false,
    controls: true,
    fluid: true,
    bigPlayButton: false,
    loadingSpinner: false,
    errorDisplay: false,
    sources: [
      {
        src: url,
        type: 'application/x-mpegURL'
        // src: 'https://vjs.zencdn.net/v/oceans.mp4',
        // type: 'video/mp4'
      }
    ]
  }
  nextTick(() => {
    player = videojs(videoRef.value, options, () => {
      player.log('onPlayerReady')
      const videoPip = document.pictureInPictureElement
      if (videoPip) {
        player.exitPictureInPicture().then(() => {
          player.log('画中画模式已关闭')
        })
      }
      videoWaiting.value = false
    })

    player.on('waiting', () => {
      console.log('waiting', new Date().getTime())
      // videoWaiting.value = true
    })

    player.on('playing', () => {
      console.log('playing', new Date().getTime())
      // videoWaiting.value = false
    })

    player.on('error', (err: any) => {
      videoWaiting.value = false
      emits('on-error', err)
    })

    player.on('enterpictureinpicture', () => {
      videoIsInpicture.value = true
      store.commit('match/SET_PIP_GIDM', route.params['id'])
    })

    player.on('leavepictureinpicture', () => {
      videoIsInpicture.value = false
      if (route.name !== 'MatchDetail') {
        const gidm = store.state.app.pictureinpictureGidm
        router.push(`/match/${gidm}/bets`)
      }
    })
  })
}

const disposePlayer = () => {
  if (!videoIsInpicture.value) {
    player && player.dispose()
    player = null
  }
}

onUnmounted(() => {
  disposePlayer()
})
</script>

<style lang="scss" scoped>
.match-video {
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  .video-js {
    font-size: 20px;
    height: 100% !important;
    padding-top: 0 !important;
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
      // width: 120px;
      // height: 120px;
      // background: url('@/assets/images/live/ai_loading.gif') no-repeat;
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
}
</style>
