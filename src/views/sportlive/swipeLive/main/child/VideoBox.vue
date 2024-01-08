<template>
  <div class="video-box-wrap">
    <video
      id="VideoRef"
      class="video-js vjs-default-skin"
      playsinline="true"
      controls
      preload="metadata"
    ></video>
    <div v-if="videoErrorState && type === 1" class="video-error">
      <span class="video-icon"></span>
      <div class="error-tips">视频加载失败，请刷新重试</div>
      <div class="error-btn" @click="refresh">刷新视频</div>
    </div>
    <div v-else-if="videoErrorState && type === 2" class="video-error-1">
      <div class="error-tips">视频加载失败，请刷新重试</div>
      <div class="error-btn" @click="refresh">重新加载</div>
    </div>
    <!-- <div v-else-if="type === 2" class="pop" @click="touchVideo">
    </div> -->
    <div
      v-if="type === 2"
      class="sound-icon"
      :class="{ muted: muted }"
      @click.stop="soundHandle"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import { ref, watch, onBeforeMount, onBeforeUnmount, nextTick } from 'vue'
const props:any = defineProps({
  liveUrl: {
    type: String,
    default: ''
  },
  controls: {
    type: Boolean,
    default: true
  },
  type: {
    type: Number,
    default: 1
  }
})

const videoExample:any = ref(null)

const videoErrorState:any = ref(false)

const muted = ref(true)

watch(props.liveUrl, () => {
  initVideo()
})

const initVideo = () => {
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
}

const destroyVideo = () => {
  try {
    videoExample.value.dispose &&
          videoExample.value.dispose()
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

onBeforeUnmount(() => [
  refresh()
])

</script>

<style lang="scss" scoped>
.video-box-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  .video-js,
  .video-error,
  .video-error-1 {
    width: 100%;
    height: 100%;
  }
  .video-js {
    background: none;
  }
  // .pop {
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   z-index: 10;
    .sound-icon {
      position: absolute;
      right: 14px;
      bottom: 0;
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
  // }
  .video-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #2e3439;
    border-radius: 20px;

    .video-icon {
      display: block;
      width: 120px;
      height: 80px;
      margin: 122px auto 22px;
      background: url('@/assets/images/sportlive/video.svg') no-repeat;
      background-size: contain;
    }
    .error-tips {
      font-size: 28px;
      color: #ffffff;
      text-align: center;
      font-weight: 400;
    }
    .error-btn {
      width: 240px;
      height: 80px;
      line-height: 80px;
      margin-top: 28px;
      text-align: center;
      background-image: #7642fe;
      border-radius: 4px;
      font-size: 32px;
      color: #ffffff;
      font-weight: 500;
      cursor: pointer;
      user-select: none;
    }
  }
  .video-error-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #2e3439;
    .error-tips {
      font-size: 24px;
      color: #ffffff;
      text-align: center;
      font-weight: 400;
    }
    .error-btn {
      width: 160px;
      height: 60px;
      line-height: 60px;
      margin-top: 20px;
      background: #7642fe;
      border-radius: 13px;
      text-align: center;
      font-size: 24px;
      color: #ffffff;
      text-align: center;
      font-weight: 400;
    }
  }
}
</style>
