<template>
  <div class="short-video-container">
    <div class="list">
      <VideoItem ref="videoRefs" v-for="(videoInfo, index) in videos" :key="index" :videoInfo="videoInfo"></VideoItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import VideoItem from './VideoItem.vue'

onMounted(() => {
  initScrollEvent()
})
const videoRefs: any = ref()
defineProps({
  videos: {
    type: Array as any,
    default: () => []
  }
})

watch(
  () => videoRefs.value,
  () => {
    console.log(123)
  }
)

const initScrollEvent = () => {
  window.onscroll = () => {
    videoRefs.value?.forEach((videoExp: any) => {
      const rect = videoExp.videoTarget.getBoundingClientRect()
      if (rect.y > 100 && rect.y < 300) {
        videoExp.play()
      } else {
        videoExp.pause()
      }
    })
  }
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
