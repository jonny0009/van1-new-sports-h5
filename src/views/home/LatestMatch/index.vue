<template>
  <div ref="newContainer">
    <van-collapse v-model="activeNames" accordion :border="false" class="GlobalCollapse">
      <van-collapse-item name="1">
        <template #title>
          <ArrowTitle :src="titleTime" :text="$t('home.latestMatch')" class="mt10 latestArrowTitle" />
        </template>
        <div class="LatestMatch">
          <SportsTabs ref="refSportsTabs" class="pb10 pt10" @returnSportsSuccess="returnSportsSuccess" :ifCapstan="true">
            <template #body>
              <div class="mt10">
                <Loading v-if="!isLoading" class="loadMarginTop"/>
                <template v-else>
                  <HomeEmpty v-if="!recommendEventsList.length" class="marginAuto"></HomeEmpty>
                  <template v-for="(item, idx) in recommendEventsList" :key="idx">
                    <van-sticky :offset-top="offsetTop" :container="newContainer" z-index="8"
                      :class="{ 'mt10': idx !== 0 }">
                      <playTitle :send-params="item" />
                    </van-sticky>
                    <HomeMatchHandicap v-for="(item1, idx) in item.list" :play-title-toggle="false" :send-params="item1"
                      :class="{ 'mt10': idx !== 0 }" />
                  </template>
                </template>
                <div v-if="recommendEventsList.length" class="Button-MatchMore mt10 mb10" @click="goHomeTime">
                  <span>
                    {{ $t('home.lookMoreMatch') }}
                  </span>
                </div>
              </div>
            </template>
          </SportsTabs>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>
<script lang="ts" setup>
// import Dayjs from 'dayjs'
// const dateUtil = Dayjs
import titleTime from '@/assets/images/home/title-time.png'
import playTitle from '@/components/Title/playTitle/index.vue'
import { ref, computed, watch } from 'vue'
import moment from 'moment'
import store from '@/store'
import router from '@/router'
import { recommendEvents, recommendLeague } from '@/api/home'

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
const props = defineProps({
  leagueIdArr: {
    type: Array as any,
    default: () => []
  }
})
const refreshChangeTime = computed(() => store.state.home.refreshChangeTime)
const timeout: any = ref('')
const newContainer = ref(null)
const activeNames = ref('1')
const refSportsTabs = ref()

watch(() => scrollNum.value, (newValue) => {
  if (newValue) {
    refSportsTabs.value.ifAnimated = false
  }
})
watch(refreshChangeTime, (val) => {
  if (val) {
    refSportsTabs.value?.resetParams()
    activeNames.value = '1'
    clearTimeout(timeout.value)
    timeout.value = setTimeout(() => {
      getRecommendEvents()
    }, 100)
  }
})
watch(
  () => props.leagueIdArr,
  () => {
    // val, old
    // if (val.join() !== old.join()) {
    //   getRecommendEvents()
    // }
    getRecommendEvents()

  }
)
const recommendEventsList: any = ref([])
const recommendEventsListArr: any = ref([])
const isLoading = ref(false)
const getRecommendEvents = async (gameType: any = 'FT') => {
  isLoading.value = false
  const params:any = {
    gradeType: 2,
    gameType: gameType,
    // filterLeagueIds: props.leagueIdArr.join(),
    filterLeagueIds: getLeagueIdArrIds(),
    page: 1,
    pageSize: 10
    // startDate: dateUtil().format('YYYY-MM-DD') + ' 00:00:00',
    // endDate: dateUtil().add(1, 'day').format('YYYY-MM-DD') + ' 23:59:59'
  }
  if (getLeagueIdArrIds()) {
     delete params.gradeType
  }
  const res: any = await recommendEvents(params)
  isLoading.value = true
  if (res.code === 200) {
    const data: any = res?.data || {}
    const { baseData } = data
    recommendEventsList.value = []
    recommendEventsListArr.value = []
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
    Object.keys(listObj).map(item => {
      listArr.push(JSON.parse(JSON.stringify(listObj[item])))
    })

    recommendEventsList.value = listArr
  }
}

const goHomeTime = () => {
  const params: any = { name: 'HomeTime' }
  router.push(params)
}

const leagueIdArrType: any = ref([])
const sportTypeChange: any = ref(false)
const returnSportsSuccess = async (val: any) => {
  store.dispatch('user/getScrollNumY', window.scrollY)
  isLoading.value = false
  recommendEventsList.value = []
  const res: any = await recommendLeague({ gameType: val, showType: 'FAST' })
  if (res.code === 200) {
    sportTypeChange.value = true
    leagueIdArrType.value = []
    const list: any = res?.data.list || []
    list.map((n: any) => {
      if (n.leagueId) {
        leagueIdArrType.value.push(n.leagueId)
      }
    })
    if (!leagueIdArrType.value.length || res?.data.total === 0) {
      leagueIdArrType.value = []
    }
    getRecommendEvents(val)
  }
}

// 联赛id
const getLeagueIdArrIds = () => {
  if (sportTypeChange.value) {
    if (leagueIdArrType.value.length) {
      return leagueIdArrType.value.join()
    }
    return ''
  }
  if (props.leagueIdArr.length) {
    return props.leagueIdArr.join()
  }
  return ''
}

</script>

<style lang="scss" scoped>
.loadMarginTop{
  margin-bottom: 1000px;
}
</style>
