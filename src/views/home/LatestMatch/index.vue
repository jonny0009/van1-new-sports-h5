<template>
  <ArrowTitle
    class="mt10 mb10"
    :src="titleTime"
    text="早盘"
    @returnSuccess="returnStatus"
  />
  <template v-if="!isShow">
    <SportsTabs />
    <Loading v-if="!isLoading" />
    <template v-else>
      <EmptyIcon v-if="!recommendEventsList.length" class="marginAuto"></EmptyIcon>
      <homeMatchHandicap v-for="(item,idx) in recommendEventsList" v-else :key="idx" :send-params="item" class="mt20" />
    </template>

    <!-- btn -->
    <div class="Button-MatchMore mt20" @click="goHomeTime">
      <span>
        查看更多比赛
      </span>
    </div>
  </template>
</template>
<script lang="ts" setup>
import titleTime from '@/assets/images/home/title-time.png'
import homeMatchHandicap from '@/components/HomeMatch/MatchHandicap/index.vue'
// vue
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'
import store from '@/store'
import router from '@/router'
// api
import { recommendEvents } from '@/api/home'
// script
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout:any = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      getRecommendEvents()
    }, 100)
  }
})
const recommendEventsList = reactive([])
const isLoading = ref(false)
const getRecommendEvents = async () => {
  isLoading.value = false
  const params = {
    gradeType: 2
  }
  const res:any = await recommendEvents(params)
  isLoading.value = true
  if (res.code === 200) {
    const data:any = res?.data || {}
    const { baseData } = data
    recommendEventsList.length = 0
    recommendEventsList.push(...baseData)
  }
}
const goHomeTime = () => {
  const params:any = { name: 'HomeTime', params: { 'refreshTime': new Date().getTime() } }
  store.dispatch('app/setKeyValue', {
    key: 'imgChangeTime',
    value: new Date().getTime()
  })
  router.push(params)
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
