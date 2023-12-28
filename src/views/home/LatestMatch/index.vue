<template>
  <ArrowTitle
    class="mt10 mb10"
    :src="titleTime"
    :text="$t('home.latestMatch')"
    @returnSuccess="returnStatus"
  />
  <template v-if="!isShow">
    <SportsTabs class="mb10 mt20" @returnSportsSuccess="returnSportsSuccess" />
    <Loading v-if="!isLoading" />
    <template v-else>
      <HomeEmpty v-if="!recommendEventsList.length" class="marginAuto"></HomeEmpty>
      <HomeMatchHandicap v-for="(item,idx) in recommendEventsList" v-else :key="idx" :send-params="item" class="mb10" />
    </template>
    <div v-if="recommendEventsList.length" class="Button-MatchMore mt10" @click="goHomeTime">
      <span>
        {{ $t('home.lookMoreMatch') }}
      </span>
    </div>
  </template>
</template>
<script lang="ts" setup>
import Dayjs from 'dayjs'
const dateUtil = Dayjs
import titleTime from '@/assets/images/home/title-time.png'
import { onBeforeMount, reactive, ref, computed, watch } from 'vue'
import store from '@/store'
import router from '@/router'
import { recommendEvents } from '@/api/home'
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout:any = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      isShow.value = false
      getRecommendEvents()
    }, 100)
  }
})
const recommendEventsList = reactive([])
const isLoading = ref(false)
const getRecommendEvents = async (gameType:any = 'FT') => {
  isLoading.value = false
  const params = {
    gradeType: 2,
    gameType: gameType,
    startDate: dateUtil(new Date()).format('YYYY-MM-DD') + ' 00:00:00',
    endDate: dateUtil(new Date()).format('YYYY-MM-DD') + ' 23:59:59'
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
  const params:any = { name: 'HomeTime' }
  router.push(params)
}
const returnSportsSuccess = (val:any) => {
  getRecommendEvents(val)
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
