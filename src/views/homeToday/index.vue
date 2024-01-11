<template>
  <div class="homeTime-page">
    <SportsTabs ref="refSportsTabs" class="pb10" @returnSportsSuccess="returnSportsSuccess" />
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
    <FooterHeight />
  </div>
</template>
<script lang="ts" setup>
import Dayjs from 'dayjs'
import { recommendEvents } from '@/api/home'
import store from '@/store'
import { onBeforeMount, ref, reactive, computed, watch } from 'vue'
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
const params:any = reactive({
  page: 1,
  pageSize: 5,
  gradeType: 2,
  gameType: 'FT',
  startDate: Dayjs().format('YYYY-MM-DD') + ' 00:00:00',
  endDate: Dayjs().format('YYYY-MM-DD') + ' 23:59:59'
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
