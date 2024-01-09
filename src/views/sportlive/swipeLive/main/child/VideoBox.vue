<template>
  <div class="video-box-wrap">

    <video
      id="VideoRef"
      class="video-js vjs-default-skin"
      playsinline="true"
      controls
      preload="metadata"
    ></video>

    <div v-if="videoErrorState" class="video-error">
      <span class="video-icon"></span>
      <div class="error-tips">视频加载失败，请刷新重试</div>
      <div class="error-btn" @click="refresh">刷新视频</div>
    </div>

    <div class="pop"></div>

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
import { ref, computed, onBeforeMount, onBeforeUnmount, nextTick } from 'vue'
import store from '@/store'
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
// watch(props.liveUrl, () => {
//   initVideo()
// })
const setTimeoutTime = ref()
const initVideo = () => {
  clearTimeout(setTimeoutTime.value)
  setTimeoutTime.value = setTimeout(() => {
    console.log(props.liveUrl, 'initVideo initVideo initVideo')
    videoErrorState.value = false
    const videoRef:any = document.querySelector('#VideoRef')
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
  console.log('destroyVideo 销毁视频')
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
  } else {
    videoExample.value.muted(true)
    muted.value = true
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
onBeforeMount(() => {
  nextTick(() => {
    initVideo()
  })
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount onBeforeUnmount')
  destroyVideo()
})
</script>

<style lang="scss" scoped>
.video-box-wrap {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 36px;
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
  .pop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
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
  bottom: -38px;
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
  background: #7642fe;
  border-radius: 4px;
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  user-select: none;
}
</style>
