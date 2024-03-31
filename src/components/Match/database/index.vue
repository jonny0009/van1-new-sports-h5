<template>
  <div class="database">
    <van-tabs v-model:active="tabActive" scrollspy shrink sticky offset-top="12.8vw" line-height="0">
      <van-tab :disabled="!tab.active" v-for="(tab, index) in tabList" :key="index" :name="tab.name">
        <template #title>
          <div class="tab-title" :class="{ active: tab.active }">
            <span>{{ tab.title }}</span>
          </div>
        </template>
        <component :is="components[tab.name]" :match-data="matchData" v-if="tab.active" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import { matchStatusApi } from '@/api/live'
import store from '@/store'
import { useI18n } from 'vue-i18n'
import TabSummary from './Tabs/TabSummary.vue'
import TabBattle from './Tabs/TabBattle.vue'
import TabRecord from './Tabs/TabRecord.vue'
import TabEvents from './Tabs/TabEvents.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const { t } = useI18n()

const matchInfo = computed(() => store.state.match.matchInfo)
const tabListOrg: any = [
  { name: 0, title: t('live.navSummary'), active: true },
  { name: 1, title: t('live.navBattle'), active: true },
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
const getData = () => {
  tabList.value = []
  if (gameType === 'FT') {
    tabList.value.push(...tabListOrg)
    tabList.value.find((i: any) => i.name === 0).active = true
    tabList.value.find((i: any) => i.name === 3).active = true
    if (tabActive.value === -1) {
      nextTick(() => {
        tabActive.value = 0
      })
    }
  } else if (gameType === 'BK') {
    tabList.value.push(...tabListOrg)
    tabList.value.find((i: any) => i.name === 0).active = true
    if (tabActive.value === -1) {
      nextTick(() => {
        tabActive.value = 0
      })
    }
  }

  fetchData()
}

const matchData = ref()
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
</script>

<style lang="scss" scoped>
.van-tabs {
  :deep(.van-tabs__wrap) {
    height: 110px;
    .van-tabs__nav {
      background: var(--color-background-color);
    }
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
