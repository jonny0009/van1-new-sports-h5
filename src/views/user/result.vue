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
      <div class="timeSelect">
        <div v-for="(item, index) in timeList" :key="index">
          <div
            v-if="item.timeName"
            class="time"
            :class="timeIndex == index ? 'timeActive' : ''"
            @click="selectTime(index)"
          >
            {{ item.timeName }}
          </div>
          <p v-else class="imgStyle">
            <img class="img_1" src="@/assets/images/user/selectTime.png" alt="" />
          </p>
        </div>
      </div>
      <!-- 状态 -->
      <div class="status">
        <div class="status_1">
          <span>状态</span>
          <div class="round">
            <span>全部</span>
            <img class="img_1" src="@/assets/images/user/down.png" alt="" />
          </div>
        </div>
        <div class="status_1">
          <span>球类</span>
          <div class="round">
            <span>全部</span>
            <img class="img_1" src="@/assets/images/user/down.png" alt="" />
          </div>
        </div>
      </div>
      <dataList></dataList>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dataList from './components/dataList.vue'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()
const index = ref(1)
const timeIndex = ref(0)
const timeList = reactive([
  {
    timeName: '今日'
  },
  {
    timeName: '7天'
  },
  {
    timeName: '30天'
  },
  {
    timeName: '90天'
  },
  {
    timeName: ''
  }

])
// const content = ref('111111')
const goBack = () => {
  $router.back()
}
const selectTime = (index: number) => {
  timeIndex.value = index
}
const title = ref('结果')

</script>

<style lang="scss" scoped>
@import './style/result.scss';

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
