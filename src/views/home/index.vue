<template>
  <div class="home-page">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="refresh-wrap">
        <homeBarHeader />
        <homeTabs class="mt10" />
        <ArrowTitle class="ml20" :src="titleHot" text="热门赛事" @returnSuccess="returnStatus" />
        <ArrowTitle class="ml20" :src="titleRecommend" text="推荐比赛" @returnSuccess="returnStatus" />
        <ArrowTitle class="ml20" :src="titleTime" text="早盘" @returnSuccess="returnStatus" />
        <p class="tc">刷新次数:</p>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>

import homeBarHeader from './components/homeBarHeader/index.vue'
import homeTabs from './components/homeTabs/index.vue'
import ArrowTitle from '@/components/Title/ArrowTitle/index.vue'

import titleHot from '@/assets/images/home/title-hot.png'
import titleRecommend from '@/assets/images/home/title-recommend.png'
import titleTime from '@/assets/images/home/title-time.png'

import { ref } from 'vue'
const isLoading = ref(false)
const onRefresh = () => {
  isLoading.value = false
}

const returnStatus = (val:any) => {
  console.log(val)
}
</script>
<style lang="scss" scoped>
.home-page{
  .refresh-wrap{
    min-height: calc(100vh - 96px);
  }
}

</style>
