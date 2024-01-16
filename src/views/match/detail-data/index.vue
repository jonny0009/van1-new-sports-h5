<template>
  <div class="panel-data">
    <!-- <van-tabs class="global-nav-vant-tabs" v-model:active="tabActive" shrink line-height="0" @change="onChangeTabs">
      <van-tab v-for="(tab, index) in tabList" :key="index" :name="tab.name">
        <template #title>
          <div class="tab-title">
            <span>{{ tab.title }}</span>
          </div>
        </template>
      </van-tab>
    </van-tabs>
    <component :key="tabActive" :is="components[tabActive]" :match-data="matchData" /> -->
    <MatchDatabase />
  </div>
</template>

<script setup lang="ts">
import MatchDatabase from '@/components/Match/database/index.vue'
// import { computed, onMounted, ref, watch } from 'vue'
// import { matchStatusApi } from '@/api/live'
// import TabSummary from './TabSummary.vue'
// import TabBattle from './TabBattle.vue'
// import TabRecord from './TabRecord.vue'
// import TabEvents from './TabEvents.vue'
// import store from '@/store'

// const matchInfo = computed(() => store.state.match.matchInfo)
// watch(
//   () => matchInfo.value,
//   () => {
//     fetchData()
//   }
// )
// onMounted(() => {
//   fetchData()
// })

// const matchData = ref()
// const fetchData = async () => {
//   const { gidm } = matchInfo.value
//   if (gidm) {
//     const res: any = await matchStatusApi({ gidm })
//     if (res.code === 200) {
//       const data = res.data
//       matchData.value = { ...data, icGidm: gidm }
//     }
//   }
// }

// const tabList = ref([
//   { name: 0, title: '统计数据' },
//   { name: 1, title: '阵容图' },
//   { name: 2, title: '近期战绩' },
//   { name: 3, title: '文字实况' }
// ])
// const tabActive = ref(0)
// const components = [TabSummary, TabBattle, TabRecord, TabEvents]

// const onChangeTabs = () => {}
</script>

<style lang="scss" scoped>
.panel-data {
  padding: 20px 0;
}
</style>
