<template>
  <ArrowTitle
    class="mt10 mb10"
    :src="titleRecommend"
    text="推荐比赛"
    @returnSuccess="returnStatus"
  />
  <div class="Recommend-Match-Tabs">
    <SportsButton text="FT" :active="true" />
    <SportsButton text="BK" />
    <SportsButton text="TN" />
    <SportsButton text="OP_BM" />
  </div>
  <homeMatchHandicap v-for="(item,idx) in recommendEventsList" :key="idx" :send-params="item" class="mt20" />
</template>
<script lang="ts" setup>

import homeMatchHandicap from '@/components/HomeMatch/MatchHandicap/index.vue'
// img
import titleRecommend from '@/assets/images/home/title-recommend.png'
import league from '@/assets/images/home/other/league.png'
// vue
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'
import store from '@/store'
import { imgUrlFormat } from '@/utils/index.ts'
// api
import { recommendEvents } from '@/api/home'
// script
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      getRecommendEvents()
    }, 100)
  }
})
const recommendEventsList = reactive([])
// const isLoading = ref(false)
const getRecommendEvents = async () => {
  // isLoading.value = false
  const res:any = await recommendEvents()
  // isLoading.value = true
  if (res.code === 200) {
    const data:any = res?.data || {}
    const { baseData, total } = data
    recommendEventsList.length = 0
    recommendEventsList.push(...baseData)
  }
}

const init = () => {
  getRecommendEvents()
}
onBeforeMount(() => {
  init()
})
const isShow = ref(false)
const returnStatus = (val:any) => {
  isShow.value = val
}
</script>
