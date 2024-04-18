<template>
  <van-popup :show="fullState" class="full-screen-videos" position="bottom" @open="open" :overlay="false">
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
          <video-info
            v-if="fullState"
            :videoInfo="video"
            :active="curIndex === index"
            @close="fullState = false"
          ></video-info>
        </swiper-slide>
      </swiper>
      <BettingSlip v-if="bettingSlipState" ref="bettingSlipRef" @close="betClose" />
    </div>
  </van-popup>
</template>
<script lang="ts" setup>
import BettingSlip from '@/components/BettingSlip/index.vue'
import { onMounted, ref, computed, watch, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
// import { getVideoGreet } from '@/api/live'
import videoInfo from './videoInfo.vue'
import 'swiper/swiper-bundle.css'
import { Controller } from 'swiper/modules'
import store from '@/store'

const props = defineProps({
  shortVideos: {
    type: Array as any,
    default: () => []
  }
})
const fullState: any = ref(false)
const videoId: any = ref(-1)
const bettingSlipRef: any = ref(null)
const bettingSlipState: any = ref(false)
const markets = computed(() => store.state.betting.markets)
const controlledSwiper = ref()
const curIndex = ref(-1)
watch(
  () => fullState.value,
  () => {
    store.dispatch('app/setKeyValue', {
      key: 'bettingSlipState',
      value: !fullState.value
    })
  }
)
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
  // getShortVideos()
})
const setControlledSwiper = (swiper: any) => {
  controlledSwiper.value = swiper
}
const open = async () => {
  await nextTick()
  curIndex.value = props.shortVideos.findIndex((i: any) => i.videoId === videoId.value) || 0
  controlledSwiper.value.slideTo(curIndex.value, 0, false)
  console.log(curIndex.value, 'curIndex.value')
}
const change = async ({ activeIndex }: any) => {
  curIndex.value = activeIndex
}

defineExpose({
  fullState,
  videoId
})
</script>

<style lang="scss" scoped>
.full-screen-videos {
  width: 100%;
  height: 100%;
  z-index: 200 !important;
}
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
