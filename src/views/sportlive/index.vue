<template>
  <div class="sportlive">
    <div v-if="gameTypeList.length" class="sportlive-Match-Tabs">
      <TextButton :text="$t('sport.recommend')" :active="!gameType" @click="clickGameType({})" />
      <SportsButton v-for="(item,idx) in gameTypeList" :key="idx" :text="item.gameType" :active="gameType===item.gameType" @click="clickGameType(item)" />
    </div>
    <Loading v-if="!isLoading" />
    <template v-else>
      <MatchLive v-for="(item,idx) in commonMatchesList" :key="idx" :send-params="item" />
      <HomeEmpty v-if="!commonMatchesList.length"></HomeEmpty>
    </template>
    <div v-if="commonMatchesList.length" class="Button-MatchMore mt10">
      <span>
        {{ $t('live.noMore') }}
      </span>
    </div>
    <div class="footerHeight"></div>
  </div>
</template>
<script lang="ts" setup>
import TextButton from '@/components/Button/TextButton/index.vue'
import MatchLive from '@/components/HomeMatch/MatchLive/index.vue'
import store from '@/store'
import { ref, onBeforeMount, onActivated, onDeactivated, onBeforeUnmount, computed, watch } from 'vue'
import { apiRBCondition, apiCommonMatches } from '@/api/home'
const gameType:any = ref()
const isLoading = ref(false)
const init = async (toggleLoading:any = true) => {
  await getApiRBCondition()
  await getApiCommonMatches(toggleLoading)
}
const showGameTypeList:any = ref([''])
const gameTypeList:any = ref([])
const getApiRBCondition = async () => {
  const res:any = await apiRBCondition({ }) || {}
  if (res.code === 200 && res.data) {
    const dataList = res.data || []
    gameTypeList.value = dataList.filter((t:any) => !showGameTypeList.value.includes(t.gameType))
  }
}
const commonMatchesList:any = ref([])
const getApiCommonMatches = async (toggleLoading:any = true) => {
  const params = {
    gameType: gameType.value || '',
    showtype: 'RB',
    timeStage: 0,
    dateStage: 0,
    gameSort: 1,
    isNovice: 'Y',
    onlyFavorite: 0,
    leagueIds: '',
    gameTypeSon: '',
    page: 1,
    pageSize: 200
  }
  if (toggleLoading) {
    isLoading.value = false
  }
  const res:any = await apiCommonMatches(params) || {}
  if (toggleLoading) {
    isLoading.value = true
  }
  if (res.code === 200 && res.data?.matchList?.baseData) {
    const dataList = res.data?.matchList?.baseData || []
    commonMatchesList.value = dataList.filter((t:any) => !showGameTypeList.value.includes(t.gameType))
  } else {
    commonMatchesList.value = []
  }
}
const clickGameType = (item:any) => {
  gameType.value = item.gameType
  getApiCommonMatches()
}
onBeforeMount(async () => {
  startInterval()
  isLoading.value = false
  init()
})
onActivated(() => {
  startInterval()
})
onDeactivated(() => {
  setClearInterval()
})
onBeforeUnmount(() => {
  setClearInterval()
})
const pushSwitch:any = computed(() => store.state.app.businessConfig.pushSwitch)
watch(pushSwitch, () => {
  startInterval()
})
const IntervalTimer:any = ref()
const startInterval = () => {
  clearTimeout(IntervalTimer)
  IntervalTimer.value = setTimeout(() => {
    setIntervalSendData()
  }, 100)
}
const setIntervalDate:any = ref(15 * 1000)
const setIntervalSendData = () => {
  if (+pushSwitch.value === 1) {
    setIntervalDate.value = 2 * 60 * 1000
  }
  setClearInterval()
  setIntervalTimer.value = setInterval(() => {
    init(false)
  }, setIntervalDate.value)
}
const setIntervalTimer:any = ref()
const setClearInterval = () => {
  clearInterval(setIntervalTimer.value)
}

</script>
<style lang="scss" scoped>
.sportlive{
  padding: 0 40px;
}
.sportlive-Match-Tabs{
  margin: 10px 0;
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  .textButton {
    margin-right: 20px;
    flex-shrink: 1;
  }
  .SportsButton{
    margin-right: 20px;
    flex-shrink: 1;
  }
}
</style>
