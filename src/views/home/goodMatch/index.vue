<template>
  <van-collapse v-model="activeNames" accordion :border="false" class="GlobalCollapse">
    <van-collapse-item name="1">
      <template #title>
        <ArrowTitle class="mt10 goodArrowTitle" :src="titleRecommend" :text="$t('home.goofMatch')" />
      </template>
      <div class="goodMatch">
        <SportsTabs ref="refSportsTabs" class="pb10 pt10" @returnSportsSuccess="returnSportsSuccess" />
        <Loading v-if="!isLoading" />
        <template v-else>
          <HomeEmpty v-if="!recommendEventsList.length" />
          <!-- <HomeMatchHandicap v-for="(item,idx) in recommendEventsList" :key="idx" :send-params="item" class="mb10" /> -->
          <div ref="newContainer">
            <template v-for="(item, idx) in recommendEventsList" :key="idx">
              <van-sticky :offset-top="offsetTop" :container="newContainer" z-index="8" :class="{ 'mt10': idx !== 0 }">
                <playTitle :send-params="item" />
              </van-sticky>
              <HomeMatchHandicap v-for="(item1, idx) in item.list" :play-title-toggle="false" :send-params="item1"
                :class="{ 'mt10': idx !== 0 }" />
            </template>
          </div>
        </template>
        <div v-if="recommendEventsList.length" class="Button-MatchMore mt10" @click="goToSport">
          <span>
            {{ $t('home.lookMoreMatch') }}
          </span>
        </div>
      </div>
    </van-collapse-item>
  </van-collapse>
</template>
<script lang="ts" setup>
import Dayjs from 'dayjs'
const dateUtil = Dayjs
import titleRecommend from '@/assets/images/home/title-recommend.png'
import playTitle from '@/components/Title/playTitle/index.vue'
import { onMounted, ref, computed, watch } from 'vue'
import moment from 'moment'
import store from '@/store'
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
import { recommendEvents } from '@/api/home'
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
  (val, old) => {
    if (val.join() !== old.join()) {
      getRecommendEvents()
    }
  }
)
const recommendEventsList: any = ref([])
const recommendEventsListArr: any = ref([])
const isLoading = ref(false)
const getRecommendEvents = async (gameType: any = 'FT') => {
  const params = {
    gradeType: 1,
    gameType: gameType,
    leagueId: props.leagueIdArr.join(),
    // startDate: dateUtil().format('YYYY-MM-DD') + ' 00:00:00',
    // endDate: dateUtil().add(1, 'day').format('YYYY-MM-DD') + ' 23:59:59'
  }
  isLoading.value = false
  const res: any = await recommendEvents(params)
  isLoading.value = true
  if (res.code === 200) {
    const data: any = res?.data || {}
    const { baseData } = data
    recommendEventsList.value = []
    recommendEventsListArr.value = []
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
    Object.keys(listObj).map(item => {
      listArr.push(JSON.parse(JSON.stringify(listObj[item])))
    })

    recommendEventsList.value = listArr
  }
}
const returnSportsSuccess = (val: any) => {
  gameType.value = val
  getRecommendEvents(val)
}
// const init = () => {
//   getRecommendEvents()
// }
// onMounted(() => {
//   init()
// })

const gameType = ref('FT')
const goToSport = () => {
  router.push({
    name: 'Sport',
    params: {
      type: gameType.value
    }
  })
}
</script>
