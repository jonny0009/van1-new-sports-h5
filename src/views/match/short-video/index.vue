<template>
  <div class="short-video-container">
    <van-list
      class="list"
      v-model:loading="videoLoading"
      :finished="noMore"
      :finished-text="shortVideos.length === 0 ? '' : $t('live.noMore')"
      @load="getShortVideos"
    >
      <VideoItem
        ref="videoRefs"
        v-for="(videoInfo, index) in shortVideos"
        :key="index"
        :videoInfo="videoInfo"
        @selectVideo="selectVideo"
      ></VideoItem>
    </van-list>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import VideoItem from './VideoItem.vue'
const emit = defineEmits(['selectVideo', 'on-scroll-bottom'])
defineProps({
  shortVideos: {
    type: Array as any,
    default: () => []
  },
  videoLoading: {
    type: Boolean,
    default: true
  },
  noMore: {
    type: Boolean,
    default: false
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

const getShortVideos = () => {
  emit('on-scroll-bottom')
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
