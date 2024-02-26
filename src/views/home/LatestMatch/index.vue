<template>
  <van-collapse v-model="activeNames" accordion :border="false" class="GlobalCollapse">
    <van-collapse-item name="1">
      <template #title>
        <ArrowTitle :src="titleTime" :text="$t('home.latestMatch')" class="mt10 latestArrowTitle" />
      </template>
      <div class="LatestMatch">
        <SportsTabs ref="refSportsTabs" class="pb10 pt10" @returnSportsSuccess="returnSportsSuccess" />
        <Loading v-if="!isLoading" />
        <template v-else>
          <HomeEmpty v-if="!recommendEventsList.length" class="marginAuto"></HomeEmpty>
          <!-- <HomeMatchHandicap v-for="(item, idx) in recommendEventsList" v-else :key="idx" :index-num="idx" :send-params="item"
            class="mb10" /> -->
          <div ref="newContainer">
            <template v-for="(item, idx) in recommendEventsList" :key="idx">
              <van-sticky v-if="idx === 0" :offset-top="offsetTop" :container="newContainer" z-index="5">
                <playTitle :class="{ 'mt20': idx !== 0 }" :send-params="item" />
              </van-sticky>
              <HomeMatchHandicap :play-title-toggle="false" :send-params="item" :class="{ 'mt10': idx !== 0 }" />
            </template>
          </div>
        </template>
        <div v-if="recommendEventsList.length" class="Button-MatchMore mt10 mb10" @click="goHomeTime">
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
import titleTime from '@/assets/images/home/title-time.png'
import playTitle from '@/components/Title/playTitle/index.vue'
import { onMounted, reactive, ref, computed, watch } from 'vue'
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
const recommendEventsList = reactive([])
const isLoading = ref(false)
const getRecommendEvents = async (gameType: any = 'FT') => {
  isLoading.value = false
  const params = {
    gradeType: 2,
    gameType: gameType,
    filterLeagueIds: props.leagueIdArr.join(),
    startDate: dateUtil().format('YYYY-MM-DD') + ' 00:00:00',
    endDate: dateUtil().add(1, 'day').format('YYYY-MM-DD') + ' 23:59:59'
  }
  const res: any = await recommendEvents(params)
  isLoading.value = true
  if (res.code === 200) {
    const data: any = res?.data || {}
    const { baseData } = data
    recommendEventsList.length = 0
    recommendEventsList.push(...baseData)
  }
}
const goHomeTime = () => {
  const params: any = { name: 'HomeTime' }
  router.push(params)
}
const returnSportsSuccess = (val: any) => {
  getRecommendEvents(val)
}
// const init = () => {
//   getRecommendEvents()
// }
// onMounted(() => {
//   init()
// })
</script>
