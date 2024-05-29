<template>
  <div class="match-video">
    <iframe
      v-if="urlHtml && !videoWaiting"
      ref="videoFrame"
      :src="urlHtml"
      style="width:100%;height:100%"
      frameborder="0"
      @load="handleLoad"
    ></iframe>
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
import { watch, nextTick, onUnmounted, ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const turnSound = computed(() => store.state.match.turnSound)

const emits = defineEmits(['on-error'])
const props = defineProps({
  url: String
})

const urlHtml = ref('')
const videoFrame = ref()
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

onMounted(() => {
  // message 该事件通过或者从对象(WebSocket, Web Worker, Event Source 或者子 frame 或父窗口)接收到消息时触发
  window.addEventListener('message', payEvent)
  if (!player && props.url) {
    getUrl(props.url)
  }
})
const payEvent = (event:any) => {
  console.log(event, '监听frame消息====')
}

const getUrl = (url: string) => {
  store.commit('match/SET_LIVE_ROOM_PLAYING_URL', url)
  //  加载视频网页 不全是 m3u8
  urlHtml.value = ''
  if (url.indexOf('.html') > -1) {
    urlHtml.value = url
    loadingNone()
    return
  }

  if (player) {
    player?.src(url)
    player?.load()
    player?.play()
    loadingNone()
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
    muted: true,
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
  // 获取声音是否关闭
  if (turnSound.value) {
    options.muted = false
  } else {
    options.muted = true
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
    })

    player.on('waiting', () => {
      console.log('waiting', new Date().getTime())
      videoWaiting.value = true
    })

    player.on('volumechange', (event: any) => {
      console.log('监听音量', event)
      if (turnSound.value) {
        store.commit('match/SET_TURN_SOUND', true)
      } else {
        store.commit('match/SET_TURN_SOUND', false)
      }
    })

    player.on('playing', () => {
      console.log('playing', new Date().getTime())
      videoWaiting.value = false
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
const loadingNone = () => {
  nextTick(() => {
    videoWaiting.value = false
  })
}
// iframe 事件加载===
const handleLoad = () => {
  const iframeWindow = videoFrame.value
  console.log(iframeWindow, 'iframe 事件加载===')
  iframeWindow.contentWindow.addEventListener('volumechange', handleVolumeChange)
}
const handleVolumeChange = () => {
  // 处理音量变化事件
  console.log('音量发生变化')
}

const disposePlayer = () => {
  if (!videoIsInpicture.value) {
    player && player.dispose()
    player = null
  }
}

onUnmounted(() => {
  disposePlayer()
  // 移除监听消息事件==
  window.removeEventListener('message', payEvent)
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
      height: 165px;
      background: url('@/assets/images/live/v_loading.gif') no-repeat;
      background-size: 100% auto;
    }

    .text {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 20px;
    }
  }
}</style>
