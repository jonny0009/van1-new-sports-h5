<template>
  <div class="homeTime-page" ref="newContainer">
    <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
      <SportsTabs ref="refSportsTabs" class="pb10" @returnSportsSuccess="returnSportsSuccess" :ifCountNum="false">
        <template #body>
          <div class="mt10">
            <tabsTime
              v-if="routerName === 'HomeTime'"
              ref="refTimeTabs"
              @returnTimeSuccess="returnTimeSuccess"
              @DateShow="DateShow"
            />
            <van-list v-model="loading" :finished="finished" :finished-text="$t('live.noMore')" @load="onLoad">
              <template v-if="isLoading">
                <template v-for="(item, idx) in recommendEventsList" :key="idx">
                  <van-sticky
                    :offset-top="offsetTop"
                    :container="newContainer"
                    z-index="8"
                    :class="{ mt10: idx !== 0 }"
                  >
                    <playTitle :send-params="item" />
                  </van-sticky>
                  <HomeMatchHandicap
                    v-for="(item1, idx) in item.list"
                    :play-title-toggle="false"
                    :send-params="item1"
                    :class="{ mt10: idx !== 0 }"
                  />
                </template>
                <HomeEmpty v-if="!recommendEventsList.length"></HomeEmpty>
              </template>
              <Loading
                v-if="!isLoading || loading"
                :class="{
                  'new_loading mt10': loading
                }"
              />
            </van-list>
          </div>
        </template>
      </SportsTabs>
    </van-pull-refresh>
    <FooterHeight />
    <van-calendar v-model:show="show" type="range" @confirm="onConfirm" />
  </div>
</template>
<script lang="ts" setup>
import Dayjs from 'dayjs'
import playTitle from '@/components/Title/playTitle/index.vue'
import { recommendEvents } from '@/api/home'
import store from '@/store'
import { onBeforeMount, ref, reactive, computed, watch, defineAsyncComponent } from 'vue'
const tabsTime = defineAsyncComponent(() => import('./tabsTime/index.vue'))
import moment from 'moment'
import router from '@/router'
const scrollNum = computed(() => store.state.user.scrollNumY)
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
const show = ref(false)

const routerName: any = computed(() => {
  return router?.currentRoute?.value?.name || ''
})
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout: any = ref('')
const refSportsTabs = ref()
const refTimeTabs = ref<any>(null)
const timeInfoParams: any = {
  //  --8小时的请求开始时间
  beginDate: Dayjs().format('YYYY-MM-DD HH:mm:ss'),
  // --8小时的请求结束时间
  endDate: Dayjs().add(8, 'hour').format('YYYY-MM-DD HH:mm:ss'),
  // ,--24小时的请求结束时间
  dayBeginDate: Dayjs().format('YYYY-MM-DD HH:mm:ss'),
  // --24小时的请求结束时间
  dayEndDate: Dayjs().add(24, 'hour').format('YYYY-MM-DD HH:mm:ss'),
  // --7天的请求结束时间
  weekBeginDate: Dayjs().format('YYYY-MM-DD HH:mm:ss'),
  // --7天的请求结束时间
  weekEndDate: Dayjs().add(168, 'hour').format('YYYY-MM-DD HH:mm:ss'),
  gameType: 'FT'
}

watch(
  () => scrollNum.value,
  (newValue) => {
    if (newValue > 88) {
      refSportsTabs.value.ifAnimated = false
    }
  }
)
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
const params: any = reactive({
  page: 1,
  pageSize: 5,
  gradeType: 2,
  gameType: 'FT'
})
if (routerName.value === 'sportToday') {
  params.startDate = Dayjs().format('YYYY-MM-DD') + ' 00:00:00'
  params.endDate = Dayjs().format('YYYY-MM-DD') + ' 23:59:59'
}
const recommendEventsList: any = ref([])
const recommendEventsListArr: any = ref([])
const totalVal = ref(0)
const getLoading = (val: any = false, nextToggle: any = '') => {
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
const getRecommendEvents = async (nextToggle: any = '') => {
  getLoading(false, nextToggle)
  const res: any = await recommendEvents(params)
  getLoading(true, nextToggle)
  if (res.code === 200) {
    const data: any = res?.data || {}
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
      recommendEventsList.value = []
      recommendEventsListArr.value = []
    }
    // recommendEventsList.push(...baseData)
    recommendEventsListArr.value.push(...baseData)
    const listObj: any = {}
    const listArr: any = []
    const sortArr = recommendEventsListArr.value.sort((a: any, b: any) => {
      return a.gameDate - b.gameDate
    })
    sortArr.map((item: any) => {
      const date = moment(item.gameDate).format('YYYY/MM/DD')
      if (listObj[date]) {
        listObj[date].list.push(item)
      } else {
        listObj[date] = {
          gameDate: item.gameDate,
          list: [item]
        }
      }
    })
    Object.keys(listObj).map((item) => {
      listArr.push(JSON.parse(JSON.stringify(listObj[item])))
    })

    recommendEventsList.value = listArr
  }
}
const loading = ref(false)
const finished = ref(false)
const timer: any = ref('')
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
const DateShow = (val: any) => {
  show.value = val
}
const onConfirm = (value: any) => {
  show.value = false
  refTimeTabs.value.onConfirm(value)
}
const returnTimeSuccess = (val: any) => {
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
const returnSportsSuccess = (val: any) => {
  isLoading.value = true
  params.gameType = val
  finished.value = false
  params.page = 1
  timeInfoParams.gameType = val
  store.dispatch('home/initTimeDataInfo', timeInfoParams)
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
  store.dispatch('home/initTimeDataInfo', timeInfoParams)
})
</script>
<style lang="scss" scoped>
.homeTime-page {
  padding: 40px 40px 0;
}

.earlyArrowTitle {
  position: relative;
  top: -4px;
}
</style>
<style lang="scss">
.new_loading {
  height: auto !important;
}

.van-calendar__day--middle {
  color: var(--color-primary);
}
</style>
