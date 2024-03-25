<template>
  <div class="homeTime-page" ref="newContainer">
    <SportsTabs ref="refSportsTabs" class="pb10" :isCustom="true" :tabs="sports" @returnSportsSuccess="returnSportsSuccess">
      <template #body>
        <div class="mt10">
          <tabsTime v-if="routerName === 'HomeTime'" @returnTimeSuccess="returnTimeSuccess" />
          <van-pull-refresh v-model="isRefreshLoading" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" :finished-text="$t('live.noMore')" @load="onLoad">
              <template v-if="isLoading">
                <template v-for="(item, idx) in recommendEventsList" :key="idx">
                  <van-sticky
                    :offset-top="offsetTop"
                    :container="newContainer"
                    z-index="500"
                    :class="{ mt10: idx !== 0 }"
                  >
                    <playTitle :send-params="item" />
                  </van-sticky>
                  <HomeMatchHandicap
                    v-for="(item1, idx) in item.list"
                    :key="idx"
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
          </van-pull-refresh>
          <FooterHeight />
        </div>
      </template>
    </SportsTabs>
  </div>
</template>
<script lang="ts" setup>
import Dayjs from 'dayjs'
import tabsTime from './tabsTime/index.vue'
import playTitle from '@/components/Title/playTitle/index.vue'
// recommendEvents
import { commonMatches, statistics } from '@/api/home'
import moment from 'moment'
import store from '@/store'
import { onBeforeMount, ref, reactive, computed, watch } from 'vue'
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
const routerName: any = computed(() => {
  return router?.currentRoute?.value?.name || ''
})
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout: any = ref('')
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
watch(
  () => scrollNum.value,
  (newValue) => {
    // console.log(`doubleCount发生变化，新值为：${newValue}`);
    if (newValue > 88) {
      refSportsTabs.value.ifAnimated = false
    }
  }
)
const isLoading = ref(false)
const isRefreshLoading = ref(false)
const sports = ref([])
const getStatistics = async () => {
  const res: any = await statistics({ showType: 'FT' })
  if (res?.code === 200 && res?.data) {
    const stResult = res.data?.stResult || []
    sports.value = stResult.map((item: any) => {
      return {
        gameType: item.gameType,
        gameCount: item.num * 1
      }
    })
  }
}
getStatistics()

const params: any = reactive({
  gameTypeSon: '',
  showtype: 'FT',
  timeStage: 0,
  gameSort: 3,
  dateStage: 0,
  isNovice: 'Y',
  leagueIds: '',
  onlyFavorite: 0,
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
  // store.dispatch('home/setRefreshChangeTime', new Date().getTime())
  isRefreshLoading.value = false
  isLoading.value = true
  finished.value = false
  params.page = 1
  getRecommendEvents()
}
const getRecommendEvents = async (nextToggle: any = '') => {
  getLoading(false, nextToggle)
  const res: any = await commonMatches(params)
  getLoading(true, nextToggle)
  if (res.code === 200) {
    const data: any = res?.data || {}
    const { baseData, total } = data?.matchList
    totalVal.value = total
    const { pageSize, page } = params
    if (nextToggle) {
      if (pageSize * page < total) {
        finished.value = false
      } else {
        finished.value = true
      }
    } else {
      // recommendEventsList.length = 0
      recommendEventsList.value = []
      recommendEventsListArr.value = []
    }
    // recommendEventsList.value.push(...baseData)
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
.homeTime-page {
  padding: 30px 40px 0;
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
