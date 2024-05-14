<template>
  <div class="short-video-container">
    <div class="list">
      <VideoItem
        ref="videoRefs"
        v-for="(videoInfo, index) in shortVideos"
        :key="index"
        :videoInfo="videoInfo"
        @selectVideo="selectVideo"
      ></VideoItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import VideoItem from './VideoItem.vue'
const emit = defineEmits(['selectVideo'])
defineProps({
  shortVideos: {
    type: Array as any,
    default: () => []
  }
})

onMounted(async () => {
  initScrollEvent()
  await nextTick()
  videosPlay()
})
const videoRefs: any = ref()

const initScrollEvent = () => {
  window.onscroll = () => {
    videosPlay()
  }
}
const videosPlay = () => {
  videoRefs.value?.forEach((videoExp: any) => {
    const rect = videoExp.videoTarget.getBoundingClientRect()
    if (rect.y > 50 && rect.y < 300) {
      videoExp.play()
    } else {
      videoExp.pause()
    }
  })
}

const selectVideo = (videoInfo: any) => {
  emit('selectVideo', videoInfo)
}
</script>

<style scoped lang="scss">
.short-video-container {
  background: var(--color-background-color);

  .Scroll {
    height: 100% !important;
  }
}

.list {
  display: flex;
  flex-direction: column;
}
</style>
