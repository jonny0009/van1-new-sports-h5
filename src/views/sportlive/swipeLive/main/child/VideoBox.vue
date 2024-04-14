<template>
  <div class="video-box-wrap">
    <div v-if="liveUrl?.endsWith('html')" class="video-iframe">
      <iframe :src="liveUrl" width="100%" height="100%" frameborder="0"></iframe>
    </div>
    <video
      v-show="!liveUrl?.endsWith('html')"
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
      <div class="error-btn" @click="refresh"> {{ $t('live.refreshVideo') }}</div>
    </div>

    <div
      class="pop"
      :class="{
        'popBg':popBgToggle
      }"
    >
      <van-loading class="popBg-loading" />
    </div>

    <div
      class="sound-icon"
      :class="{ muted: muted }"
      @click.stop="soundHandle"
    ></div>

  </div>
</template>
<script lang="ts" setup>
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import { ref, watch, onBeforeMount, onBeforeUnmount, nextTick, computed } from 'vue'
import store from '@/store'
const turnSound = computed(() => store.state.match.turnSound)

const props:any = defineProps({
  liveUrl: {
    type: String,
    default: ''
  },
  controls: {
    type: Boolean,
    default: true
  }
})

const videoExample:any = ref(null)
const videoErrorState:any = ref(false)
const muted = ref(true)

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
    const videoRef:any = document.querySelector('#VideoRef')
    if (!(videoRef && props.liveUrl)) {
      return
    }
    if (props.liveUrl?.endsWith('html')) {
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

  .video-iframe {
    width: 100%;
    height: 100%;
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
  .popBg-loading{
    display: none;
  }
}
.popBg{
  background: url('@/assets/images/sportlive/ft.jpg') no-repeat;
  background-size: cover;
  .popBg-loading{
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%,-50%,0);
  }
}
</style>
