<template>
  <div class="home-page">
  <van-pull-refresh  v-model="isLoading"  @refresh="onRefresh">
    <HotMatch ref="refHotMatch" />
    <GoodMatch ref="refGoodMatch" />
    <LatestMatch ref="refLatestMatch" />
  </van-pull-refresh>
    <FooterHeight />
  

  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import HotMatch from './HotMatch/index.vue'
import GoodMatch from './GoodMatch/index.vue'
import LatestMatch from './LatestMatch/index.vue'
import store from '@/store'
import { onMounted, onBeforeUnmount } from 'vue'

const isLoading = ref(false)
const onRefresh = () => {
  isLoading.value = false
  store.dispatch('home/setRefreshChangeTime', new Date().getTime())
}

onMounted(() => {})
onBeforeUnmount(() => {
  store.dispatch('home/setKeyValue', {
    key: 'RrefShow',
    value: true
  })
  store.dispatch('home/setKeyValue', {
    key: 'OUrefShow',
    value: true
  })
  store.dispatch('home/setKeyValue', {
    key: 'MrefShow',
    value: true
  })
})
</script>
<style lang="scss" scoped>
.home-page {
  overflow: hidden;
  padding: 0 40px;
  .van-pull-refresh {
    min-height: calc(100vh - 96px);
  }
  .refresh-wrap {
    padding-bottom: 190px;
  }
}
</style>
