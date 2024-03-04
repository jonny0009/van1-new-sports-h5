<template>
  <div class="database">
    <van-tabs v-model:active="tabActive" class="global-nav-vant-tabs" shrink line-height="0" @change="onChangeTabs">
      <van-tab v-for="(tab, index) in tabList" :key="index" :name="tab.name">
        <template #title>
          <div class="tab-title">
            <span>{{ tab.title }}</span>
          </div>
        </template>
      </van-tab>
    </van-tabs>
    <component :is="components[tabActive]" :key="tabActive" :match-data="matchData" />
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
const tabListOrg: any = ref([
  { name: 1, title: t('live.navBattle') },
  { name: 2, title: t('live.navRecent') }
])
const tabList: any = ref([])
let gameType = ''
watch(
  () => matchInfo.value,
  () => {
    if (!gameType) {
      gameType = matchInfo.value.gameType
      getData()
    }
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
    tabList.value.push(...tabListOrg.value)
    tabList.value.unshift({ name: 0, title: t('live.navSummary') })

    tabList.value.push({ name: 3, title: t('live.navEvents') })

    nextTick(() => {
      tabActive.value = 0
    })
  }
  if (gameType === 'BK') {
    tabList.value.push(...tabListOrg.value)
    tabList.value.unshift({ name: 0, title: t('live.navSummary') })
    nextTick(() => {
      tabActive.value = 0
    })
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

const onChangeTabs = () => {}
</script>

<style lang="scss" scoped></style>
