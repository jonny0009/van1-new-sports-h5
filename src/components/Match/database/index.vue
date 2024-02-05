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
import { computed, onMounted, ref, watch, onBeforeMount } from 'vue'
import { matchStatusApi } from '@/api/live'
import { useRoute } from 'vue-router'
import store from '@/store'
import { useI18n } from 'vue-i18n'
import { match } from 'assert'
import TabSummary from './Tabs/TabSummary.vue'
import TabBattle from './Tabs/TabBattle.vue'
import TabRecord from './Tabs/TabRecord.vue'
import TabEvents from './Tabs/TabEvents.vue'
const { t } = useI18n()

const route = useRoute()
const gameType = ref('')
const matchInfo = computed(() => store.state.match.matchInfo)
const tabList = ref([
  { name: 1, title: t('live.navBattle') },
  { name: 2, title: t('live.navRecent') }
])

watch(
  () => matchInfo.value,
  () => {
    fetchData()
  }
)
onBeforeMount(() => {
  gameType.value = route.query.gameType
})
onMounted(() => {
  if (gameType.value === 'FT') {
    tabList.value.unshift({ name: 0, title: t('live.navSummary') })

    tabList.value.push({ name: 3, title: t('live.navEvents') })
  }
  if (gameType.value === 'BK') {
    tabList.value.unshift({ name: 0, title: t('live.navSummary') })
  }
  fetchData()
})

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

const tabActive = ref(0)
const components = [TabSummary, TabBattle, TabRecord, TabEvents]

const onChangeTabs = () => {}
</script>

<style lang="scss" scoped></style>
