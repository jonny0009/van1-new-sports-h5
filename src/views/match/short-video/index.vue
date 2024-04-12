<template>
  <div class="short-video-container">
    <div class="list">
      <VideoItem
        ref="videoRefs"
        v-for="(videoInfo, index) in shortVideos"
        :key="index"
        :videoInfo="videoInfo"
      ></VideoItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getVideoGreet } from '@/api/live'
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import VideoItem from './VideoItem.vue'
onBeforeMount(() => {
  getShortVideos()
})
onMounted(() => {
  initScrollEvent()
})
const videoRefs: any = ref()

watch(
  () => videoRefs.value,
  () => {
    console.log(123)
  }
)

// 短视频
const shortVideos: any = ref([])
const videoLoading = ref(true)
const videoTotol = ref(0)
const params1 = ref({
  page: 0,
  pageSize: 10
})
const getShortVideos = async () => {
  videoLoading.value = true
  if (videoTotol.value > 0 && params1.value.page * params1.value.pageSize >= videoTotol.value) {
    return false
  }
  params1.value.page++
  if (params1.value.page === 1) {
    shortVideos.value.length = 0
  }
  const res: any = await getVideoGreet({
    ...params1.value
  }).finally(() => {
    videoLoading.value = false
  })
  const vides: any[] = res?.data?.videoData || []
  videoTotol.value = res?.data?.total || 0
  if (res.code === 200 && vides.length) {
    shortVideos.value.push(...vides)
  }
}

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
