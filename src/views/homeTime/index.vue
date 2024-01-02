<template>
  <div class="homeTime-page">
    <ArrowTitle class="mt10 mb10" :src="titleTime" :text="$t('home.latestMatch')" @returnSuccess="returnStatus" />
    <template v-if="!isShow">
      <SportsTabs class="pb10" @returnSportsSuccess="returnSportsSuccess" />
      <tabsTime @returnTimeSuccess="returnTimeSuccess" />
      <van-list
        v-model="loading"
        :finished="finished"
        :finished-text="$t('live.noMore')"
        @load="onLoad"
      >
        <template v-if="!isShow">
          <template v-if="isLoading">
            <HomeMatchHandicap
              v-for="(item,idx) in recommendEventsList"
              :key="idx"
              :send-params="item"
              :class="{'mt20':idx !== 0}"
            />
            <HomeEmpty v-if="!recommendEventsList.length"></HomeEmpty>
          </template>
          <Loading
            v-if="!isLoading || loading"
            :class="{
              'new_loading mt10' : loading
            }"
          />
        </template>
      </van-list>
      <div class="footerHeight"></div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import Dayjs from 'dayjs' // YYYY-MM-DD HH:mm:ss
import tabsTime from './tabsTime/index.vue'
import titleTime from '@/assets/images/home/title-time.png'
import { recommendEvents } from '@/api/home'
import store from '@/store'
import { onBeforeMount, ref, reactive, computed, watch } from 'vue'
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout:any = ref('')
watch(refreshChangeTime, (val) => {
  if (val) {
    clearTimeout(timeout.value)
    timeout.value = setTimeout(async () => {
      await initData()
      await getRecommendEvents()
    }, 100)
  }
})
const isLoading = ref(false)
const params:any = reactive({
  page: 1,
  pageSize: 5,
  gradeType: 2,
  gameType: 'FT'
})
const recommendEventsList = reactive([])
const totalVal = ref(0)
const getLoading = (val:any = false, nextToggle:any = '') => {
  if (nextToggle) {
    loading.value = !val
  } else {
    isLoading.value = val
  }
}
const getRecommendEvents = async (nextToggle:any = '') => {
  getLoading(false, nextToggle)
  const res:any = await recommendEvents(params)
  getLoading(true, nextToggle)
  if (res.code === 200) {
    const data:any = res?.data || {}
    const { baseData, total } = data
    totalVal.value = total
    const { pageSize, page } = params
    if (nextToggle) {
      if (pageSize * page < total) {
        finished.value = false
      } else {
        finished.value = true
      }
    } else {
      recommendEventsList.length = 0
    }
    recommendEventsList.push(...baseData)
  }
}
const loading = ref(false)
const finished = ref(false)
const timer:any = ref('')
const onLoad = () => {
  if (!finished.value) {
    if (!loading.value) {
      loading.value = true
      clearTimeout(timer.value)
      timer.value = setTimeout(() => {
        params.page++
        getRecommendEvents(true)
      }, 100)
    }
  }
}
const returnTimeSuccess = (val:any) => {
  if (val) {
    if ((val || '').includes('/')) {
      const [startTime, endTime] = val.split('-')
      const newStartTime = startTime.replaceAll('/', '-')
      const newEndTime = endTime.replaceAll('/', '-')
      params.startDate = newStartTime + ' 00:00:00'
      params.endDate = newEndTime + ' 23:59:59'
    } else {
      params.startDate = Dayjs().format('YYYY-MM-DD HH:mm:ss')
      params.endDate = Dayjs().add(val, 'hour').format('YYYY-MM-DD HH:mm:ss')
    }
  } else {
    params.startDate = ''
    params.endDate = ''
  }
  params.page = 1
  console.log(params)
  getRecommendEvents()
}
const returnSportsSuccess = (val:any) => {
  isLoading.value = true
  params.gameType = val
  params.page = 1
  getRecommendEvents()
}
const isShow = ref(false)
const returnStatus = (val:any) => {
  isShow.value = val
}
const initData = () => {
  params.page = 1
  params.gameType = 'FT'
}
const init = () => {
  getRecommendEvents()
}
onBeforeMount(() => {
  init()
})
</script>
<style lang="scss" scoped>
.homeTime-page{
  padding: 0 40px;

}

</style>

<style lang="scss">
.new_loading{
  height: auto !important;
}
.van-calendar__day--middle{
  color: var(--color-primary)
}
</style>
