<template>
  <div class="result">
    <van-nav-bar class="bg-title" :title="title">
      <template #left>
        <img class="img_1" src="@/assets/images/login/return@2x.png" alt="" @click="goBack()" />
      </template>
    </van-nav-bar>
    <div class="content">
      <div class="area-btn_1">
        <span :class="index == 1 ? 'active' : ''" @click="index = 1">投注历史</span>
        <span :class="index == 2 ? 'active' : ''" @click="index = 2">流水历史</span>
        <span :class="index == 3 ? 'active' : ''" @click="index = 3">赛果</span>
      </div>
      <dataList v-if="index === 1"></dataList>
      <RunningHistory v-if="index === 2"></RunningHistory>
      <MatchResult v-if="index === 3"></MatchResult>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dataList from './components/dataList.vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import RunningHistory from './components/runningHistory.vue'
import MatchResult from './components/matchResult.vue'
const $router = useRouter()
const index = ref(1)

const goBack = () => {
  $router.back()
}

const title = ref('结果')

</script>

<style lang="scss" scoped>

@import './index.scss';

:deep(.van-field__control) {
  height: 50px;
  font-size: 30px;
}

:deep(.van-icon) {
  font-size: 40px;
}
</style>

<style scoped>
:deep(.van-nav-bar__content) {
  height: 150px;
}

:deep(.van-nav-bar__title) {
  height: 90px;
  line-height: 90px;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}

:deep(.van-icon) {
  font-size: 48px;
}
</style>
