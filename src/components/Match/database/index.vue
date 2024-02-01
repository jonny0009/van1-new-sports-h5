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
import { computed, onMounted, ref, watch } from 'vue'
import { matchStatusApi } from '@/api/live'
import TabSummary from './Tabs/TabSummary.vue'
import TabBattle from './Tabs/TabBattle.vue'
import TabRecord from './Tabs/TabRecord.vue'
import TabEvents from './Tabs/TabEvents.vue'
import store from '@/store'
import { useI18n } from 'vue-i18n'
import { match } from 'assert'

const matchInfo = computed(() => store.state.match.matchInfo)
watch(
  () => matchInfo.value,
  () => {
    fetchData()
  }
)
onMounted(() => {
  fetchData()
})

const { t } = useI18n()

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

const tabList = ref([
  { name: 0, title: t('live.navSummary') },
  { name: 1, title: t('live.navBattle') },
  { name: 2, title: t('live.navRecent') },
  { name: 3, title: t('live.navEvents') }
])
const tabActive = ref(0)
const components = [TabSummary, TabBattle, TabRecord, TabEvents]

const onChangeTabs = () => {}
</script>

<style lang="scss" scoped></style>
