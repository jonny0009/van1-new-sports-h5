<template>
  <div class="panel-data">
    <van-tabs class="global-nav-vant-tabs" v-model:active="tabActive" shrink line-height="0" @change="onChangeTabs">
      <van-tab v-for="(tab, index) in tabList" :key="index" :name="tab.name">
        <template #title>
          <div class="tab-title">
            <span>{{ tab.title }}</span>
          </div>
        </template>

        <component :is="components[tabActive]" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TabSummary from './TabSummary.vue'
import TabBattle from './TabBattle.vue'
import TabRecord from './TabRecord.vue'
import TabScene from './TabScene.vue'
// import store from '@/store'
// const matchInfo = computed(() => store.state.match.matchInfo)
// watch(
//   () => matchInfo.value,
//   () => {
//     console.log('watch', matchInfo.value)
//   }
// )
// onMounted(() => {
//   console.log('onMounted', matchInfo.value)
// })
const tabList = ref([
  { name: 0, title: '统计数据' },
  { name: 1, title: '阵容图' },
  { name: 2, title: '近期战绩' },
  { name: 3, title: '文字实况' }
])
const tabActive = ref(0)
const components = [TabSummary, TabBattle, TabRecord, TabScene]

const onChangeTabs = () => {}
</script>

<style lang="scss" scoped>
.panel-data {
  padding: 20px 0;
}
</style>
