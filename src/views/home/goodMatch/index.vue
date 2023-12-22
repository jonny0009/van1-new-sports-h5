<template>
  <ArrowTitle
    class="mt10 mb10"
    :src="titleRecommend"
    text="推荐比赛"
    @returnSuccess="returnStatus"
  />
  <template v-if="!isShow">
    <SportsTabs @returnSportsSuccess="returnSportsSuccess" />
    <Loading v-if="!isLoading" />
    <template v-else>
      <EmptyIcon v-if="!recommendEventsList.length" class="marginAuto"></EmptyIcon>
      <homeMatchHandicap v-for="(item,idx) in recommendEventsList" :key="idx" :send-params="item" class="mt20" />
    </template>
  </template>
</template>
<script lang="ts" setup>
import homeMatchHandicap from '@/components/HomeMatch/MatchHandicap/index.vue'
// img
import titleRecommend from '@/assets/images/home/title-recommend.png'
// vue
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'
import store from '@/store'
// api
import { recommendEvents } from '@/api/home'
// script
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout:any = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      getRecommendEvents('')
    }, 100)
  }
})
const recommendEventsList = reactive([])
const isLoading = ref(false)
const getRecommendEvents = async (gameType:any) => {
  const params = {
    gradeType: 1,
    gameType: gameType
  }
  console.log(params, 'params params')
  isLoading.value = false
  const res:any = await recommendEvents(params)
  isLoading.value = true
  if (res.code === 200) {
    const data:any = res?.data || {}
    const { baseData } = data
    recommendEventsList.length = 0
    recommendEventsList.push(...baseData)
  }
}
const returnSportsSuccess = (val:any) => {
  getRecommendEvents(val)
}
const init = () => {
  getRecommendEvents('')
}
onBeforeMount(() => {
  init()
})
const isShow = ref(false)
const returnStatus = (val:any) => {
  isShow.value = val
}
</script>
