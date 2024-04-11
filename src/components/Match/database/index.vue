<template>
  <div class="database">
    <van-tabs
      v-model:active="tabActive"
      scrollspy
      shrink
      :sticky="sticky"
      offset-top="12.8vw"
      :border="false"
      line-height="0"
    >
      <van-tab :disabled="!tab.active" v-for="(tab, index) in tabList" :key="index" :name="tab.name">
        <template #title>
          <div class="tab-title" :class="{ active: tab.active }">
            <span>{{ tab.title }}</span>
          </div>
        </template>
        <component
          :is="components[tab.name]"
          :match-data="matchData"
          :firstHomeList="firstHomeList"
          :firstAwayList="firstAwayList"
          :backupHomeList="backupHomeList"
          :backupAwayList="backupAwayList"
          :staticsList="staticsList"
          :scoreList="scoreList"
          :anlyzeList="anlyzeList"
          :recentList="recentList"
          :integralList="integralList"
          @fetchRecentEmit="fetchRecentEmit"
          v-if="tab.active"
        />
      </van-tab>
    </van-tabs>
    <van-loading class="loading-text" v-if="loading" size="60px" />
    <EmptyData v-else-if="allNothing" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick, Ref } from 'vue'
import {
  matchStatusApi,
  lineupApi,
  scoresstaticseventsApi,
  betAnalyzeApi,
  teamRecentApi,
  homeAwayIntegralApi
} from '@/api/live'
import store from '@/store'
import { useI18n } from 'vue-i18n'
import TabSummary from './Tabs/TabSummary.vue'
import TabBattle from './Tabs/TabBattle.vue'
import TabRecord from './Tabs/TabRecord.vue'
import TabEvents from './Tabs/TabEvents.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
defineProps({
  sticky: {
    type: Boolean,
    default: false
  }
})
const { t } = useI18n()

const allNothing = computed(() => {
  return tabList.value.every((item: any) => item.active === false)
})

const matchInfo = computed(() => store.state.match.matchInfo)
const tabListOrg: any = [
  { name: 0, title: t('live.navSummary'), active: false },
  { name: 1, title: t('live.navBattle'), active: false },
  { name: 2, title: t('live.navRecent'), active: false },
  { name: 3, title: t('live.navEvents'), active: false }
]
const tabList: any = ref([])
let gameType = ''
watch(
  () => matchInfo.value,
  () => {
    // 首次进来不更新问题
    // if (!gameType) {

    // }
    gameType = matchInfo.value.gameType
    getData()
  }
)
watch(
  () => route.params['id'],
  (newValue: any) => {
    if (newValue) {
      getData()
    }
  }
)
const loading = ref(true)
const getData = async () => {
  tabList.value = [...tabListOrg]
  if (gameType === 'FT') {
    if (tabActive.value === -1) {
      nextTick(() => {
        tabActive.value = 0
      })
    }
  } else if (gameType === 'BK') {
    if (tabActive.value === -1) {
      nextTick(() => {
        tabActive.value = 0
      })
    }
  }

  await fetchData()
  await fetchLineup()
  await fetchRecent()
  await fetchIntegral()
  await fetchStaticsEvents()
  await fetchBetAnlyze()

  loading.value = false

  // 统计数据
  if (staticsList.value.length === 0 && scoreList.value.length === 0 && JSON.stringify(anlyzeList.value) === '{}') {
    tabList.value.find((i: any) => i.name === 0).active = false
  } else {
    tabList.value.find((i: any) => i.name === 0).active = true
  }
  // 近期战绩
  if (recentList.value.length === 0 && integralList.value.length === 0) {
    tabList.value.find((i: any) => i.name === 2).active = false
  } else {
    tabList.value.find((i: any) => i.name === 2).active = true
  }
}

const matchData: any = ref()
const fetchData = async () => {
  const { gidm, systemId } = matchInfo.value
  if (gidm) {
    const res: any = await matchStatusApi({ gidm })
    if (res.code === 200) {
      const data = res.data
      matchData.value = { ...data, icGidm: gidm, systemId }
    }
  }
}
// 文字概况是有足球有
// 统计数据 只有 足球篮球有
const tabActive = ref(-1)
const components = [TabSummary, TabBattle, TabRecord, TabEvents]

// 阵容
const firstHomeList: Ref<any[]> = ref([])
const firstAwayList: Ref<any[]> = ref([])
const backupHomeList: Ref<any[]> = ref([])
const backupAwayList: Ref<any[]> = ref([])
const fetchLineup = async () => {
  const { icGidm, homeTeamId, awayTeamId } = matchData.value || {}
  const params = {
    gidm: icGidm,
    homeId: homeTeamId,
    awayId: awayTeamId
  }
  const res: any = await lineupApi(params)
  if (res.code === 200) {
    const data = res.data || {}
    const lineup = data.lineup || []
    if (lineup.length === 0) {
      tabList.value.find((i: any) => i.name === 1).active = false
    } else {
      tabList.value.find((i: any) => i.name === 1).active = true
    }
    // 首发阵容
    const firstList = (lineup || []).filter((m: any) => m.position > 0)
    firstHomeList.value = firstList.filter((m: any) => parseInt(m.team_id) === 1)
    firstAwayList.value = firstList.filter((m: any) => parseInt(m.team_id) === 2)

    // 替补阵容
    const backupList = (lineup || []).filter((m: any) => parseInt(m.substitute) === 1)
    backupHomeList.value = backupList.filter((m: any) => parseInt(m.team_id) === 1)
    backupAwayList.value = backupList.filter((m: any) => parseInt(m.team_id) === 2)
  }
}

// 统计数据

const anlyzeList: any = ref({})
const staticsList = ref([])
const scoreList = ref([])
const fetchStaticsEvents = async () => {
  if (!matchData.value.icGidm) {
    return
  }

  const { homeTeamId, awayTeamId, icGidm } = matchData.value
  const params = {
    gidm: icGidm,
    homeId: homeTeamId,
    awayId: awayTeamId
    // type: ''
  }
  const res: any = await scoresstaticseventsApi(params)
  if (res.code === 200) {
    const data = res.data || {}
    staticsList.value = data.statics || []
    scoreList.value = data.scores || []
  }
}

const fetchBetAnlyze = async () => {
  try {
    if (!matchData.value.systemId) {
      return
    }
    const { systemId } = matchData.value

    const res: any = await betAnalyzeApi({
      systemId
    })
    if (res.code === 200) {
      const data = res.data || {}
      anlyzeList.value = data
    }
  } catch (e) {
    console.log(e)
  }
}

// 近期战绩
const recentList: Ref<any[]> = ref([])
const teamType = ref(1)
const fetchRecent = async (state: number = 1) => {
  teamType.value = state
  const { homeTeamId, awayTeamId } = matchData.value || {}
  const params = {
    teamId: teamType.value === 1 ? homeTeamId : awayTeamId,
    limit: 5
  }
  const res: any = await teamRecentApi(params)
  if (res.code === 200) {
    const data = res.data || {}
    recentList.value = data.list || []
  }
}
const fetchRecentEmit = async (params: any) => {
  const res: any = await teamRecentApi(params)
  if (res.code === 200) {
    const data = res.data || {}
    recentList.value = data.list || []
  }
}

const integralList: Ref<any[]> = ref([])
const fetchIntegral = async () => {
  const { icGidm, homeTeamId, awayTeamId } = matchData.value || {}
  const params = {
    gidm: icGidm,
    teamId: homeTeamId,
    awayId: awayTeamId
  }
  const res: any = await homeAwayIntegralApi(params)
  if (res.code === 200) {
    integralList.value = res.data || []
  }
}
</script>

<style lang="scss" scoped>
.loading-text {
  margin-top: 100px;
  text-align: center;
}
.van-tabs {
  :deep(.van-tabs__wrap) {
    height: 110px;
    .van-tabs__nav {
      background: var(--color-background-color);
    }
  }
  :deep(.van-tabs__line) {
    display: none;
  }

  .tab-title {
    margin-right: -14px;
    height: 64px;
    padding: 0 20px;
    opacity: 0.5;
    border-radius: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-2);
    font-size: 24px;
    font-family: PingFangSC-Semibold, SF-Pro-Bold, system-ui;
    font-weight: 800;
    transition: all 0.3s;

    &:not(.active) {
      background: #ccc;
      pointer-events: none;
    }
    &.active {
      opacity: 1;
      background: var(--color-global-buttonBg);
    }

    .svg-icon {
      font-size: 38px;
      margin-right: 14px;
      color: var(--color-global-minButtonicoCl);
    }
  }
  .van-tab--active .tab-title {
    // background-image: linear-gradient(180deg, var(--color-linear-gradient-1) 0%, var(--color-linear-gradient-2) 100%);
    background: var(--color-global-buttonPrimaryBg);

    color: #fff;
    .svg-icon {
      color: #fff;
    }
  }
}
</style>
