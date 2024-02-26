<template>
  <div class="homeTime-page">
  <van-pull-refresh  v-model="isRefreshLoading"  @refresh="onRefresh">
    <SportsTabs ref="refSportsTabs" class="pb10" @returnSportsSuccess="returnSportsSuccess" />
    <tabsTime v-if="routerName === 'HomeTime'" @returnTimeSuccess="returnTimeSuccess" />
    <van-list
      v-model="loading"
      :finished="finished"
      :finished-text="$t('live.noMore')"
      @load="onLoad"
    >
      <template v-if="isLoading">
        <div ref="newContainer">
          <template v-for="(item,idx) in recommendEventsList" :key="idx">
            <van-sticky v-if="idx === 0" :offset-top="offsetTop" :container="newContainer" z-index="5">
              <playTitle :class="{'mt20':idx !== 0}" :send-params="item" />
            </van-sticky>
            <HomeMatchHandicap
              :play-title-toggle="false"
              :send-params="item"
              :class="{'mt10':idx !== 0}"
            />
          </template>
        </div>
        <HomeEmpty v-if="!recommendEventsList.length"></HomeEmpty>
      </template>
      <Loading
        v-if="!isLoading || loading"
        :class="{
          'new_loading mt10' : loading
        }"
      />
    </van-list>
  </van-pull-refresh>
    <FooterHeight />
  </div>
</template>
<script lang="ts" setup>
import Dayjs from 'dayjs'
import tabsTime from './tabsTime/index.vue'
import playTitle from '@/components/Title/playTitle/index.vue'
import { recommendEvents } from '@/api/home'
import store from '@/store'
import { onBeforeMount, ref, reactive, computed, watch } from 'vue'
import router from '@/router'
const offsetTop = computed(() => {
  const offsetTop = store.state.app.globalBarHeaderHeight || 48
  var offsetTopval = 48
  if (offsetTop > 60) {
    offsetTopval = 48
  } else {
    offsetTopval = offsetTop
  }
  return offsetTopval
})
const newContainer = ref(null)
const routerName:any = computed(() => {
  return router?.currentRoute?.value?.name || ''
})
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout:any = ref('')
const refSportsTabs = ref()
watch(refreshChangeTime, (val) => {
  if (val) {
    refSportsTabs.value?.resetParams()
    clearTimeout(timeout.value)
    timeout.value = setTimeout(async () => {
      await initData()
      await getRecommendEvents()
    }, 100)
  }
})
const isLoading = ref(false)
const isRefreshLoading = ref(false)
const params:any = reactive({
  page: 1,
  pageSize: 5,
  gradeType: 2,
  gameType: 'FT'
})
if (routerName.value === 'sportToday') {
  params.startDate = Dayjs().format('YYYY-MM-DD') + ' 00:00:00'
  params.endDate = Dayjs().format('YYYY-MM-DD') + ' 23:59:59'
}
const recommendEventsList = reactive([])
const totalVal = ref(0)
const getLoading = (val:any = false, nextToggle:any = '') => {
  if (nextToggle) {
    loading.value = !val
  } else {
    isLoading.value = val
  }
}
const onRefresh = () => {
  isRefreshLoading.value = false
  store.dispatch('home/setRefreshChangeTime', new Date().getTime())
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
const onLoadToggle = ref(false)
const onLoad = () => {
  if (onLoadToggle.value) {
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
  } else {
    onLoadToggle.value = true
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
  finished.value = false
  params.page = 1
  getRecommendEvents()
}
const returnSportsSuccess = (val:any) => {
  isLoading.value = true
  params.gameType = val
  finished.value = false
  params.page = 1
  getRecommendEvents()
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
  padding: 40px 40px 0;
}
.earlyArrowTitle{
  position: relative;
  top: -4px;
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
