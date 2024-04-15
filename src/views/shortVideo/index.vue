<template>
  <div class="video-list-wrap">
    <swiper
      class="swiper-box"
      :direction="'vertical'"
      :grabCursor="true"
      :mousewheel="true"
      :mousewheelControl="true"
      :resistanceRatio="0"
      :observeParents="true"
      @slideChange="change"
      :modules="[Controller]"
      @swiper="setControlledSwiper"
    >
      <swiper-slide class="slide-box" v-for="(video, index) in shortVideos" :key="video.videoId">
        <video-info :videoInfo="video" :active="curIndex === index"></video-info>
      </swiper-slide>
    </swiper>
    <BettingSlip v-if="bettingSlipState" ref="bettingSlipRef" @close="betClose" />
  </div>
</template>
<script lang="ts" setup>
import BettingSlip from '@/components/BettingSlip/index.vue'
import { onMounted, ref, computed, watch, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getVideoGreet } from '@/api/live'
import videoInfo from './videoInfo.vue'
import 'swiper/swiper-bundle.css'
import { useRoute } from 'vue-router'
import { Controller } from 'swiper/modules'
import store from '@/store'

const bettingSlipRef: any = ref(null)
const bettingSlipState: any = ref(false)
const markets = computed(() => store.state.betting.markets)
const controlledSwiper = ref()
const route = useRoute()
const videoId = route.query.videoId
const curIndex = ref(-1)
const shortVideos: any = ref([])
const getShortVideos = async () => {
  const res: any = await getVideoGreet({
    page: 1,
    pageSize: 10
  })
  const vides: any[] = res?.data?.videoData || []
  if (res.code === 200 && vides.length) {
    shortVideos.value = vides
    curIndex.value = vides.findIndex((i: any) => i.videoId === videoId) || 0
    controlledSwiper.value.slideTo(curIndex.value, 0, false)
  }
}
watch(
  () => markets.value.length,
  async (newVal, oldVal) => {
    if (newVal > oldVal) {
      bettingSlipState.value = true
      await nextTick()
      bettingSlipRef.value.open = true
    }
  }
)
const betClose = (state: boolean) => {
  if (!state) {
    bettingSlipState.value = false
  }
}

onMounted(() => {
  getShortVideos()
})
const setControlledSwiper = (swiper: any) => {
  controlledSwiper.value = swiper
}

const change = async ({ activeIndex }: any) => {
  curIndex.value = activeIndex
}
</script>

<style lang="scss" scoped>
.video-list-wrap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .swiper-box {
    height: 100%;
  }
}
</style>
