<template>
  <div class="homeTime-page">
    <ArrowTitle class="mt10 mb20" :src="titleTime" text="早盘" @returnSuccess="returnStatus" />
    <SportsTabs class="mb20" @returnSportsSuccess="returnSportsSuccess" />
    <!--
      <div class="homeTime-Time-Tabs mt10">
        <div class="item active">
          <span class="name">
            全部
          </span>
          <div class="number">
            946
          </div>
        </div>
        <div class="item">
          <span class="name">
            全部
          </span>
          <div class="number">
            946
          </div>
        </div>
      </div>
    -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <template v-if="!isShow">
        <Loading v-if="!isLoading" />
        <template v-else>
          <HomeMatchHandicap
            v-for="(item,idx) in recommendEventsList"
            :key="idx"
            :send-params="item"
            class="mb20"
          />
          <EmptyIcon v-if="!recommendEventsList.length" class="marginAuto"></EmptyIcon>
        </template>
      </template>
    </van-list>
    <div class="footerHeight"></div>
  </div>
</template>
<script lang="ts" setup>
// img
import titleTime from '@/assets/images/home/title-time.png'
// api
import { recommendEvents } from '@/api/home'
// script
import { onBeforeMount, ref, reactive } from 'vue'
const isLoading = ref(false)
const params:any = reactive({
  page: 1,
  pageSize: 10,
  gradeType: 2
})
const recommendEventsList = reactive([])
const totalVal = ref(0)
const getRecommendEvents = async (gameType:any = '', nextToggle:any = '') => {
  isLoading.value = false
  params.gameType = gameType
  const res:any = await recommendEvents(params)
  isLoading.value = true
  if (res.code === 200) {
    const data:any = res?.data || {}
    const { baseData, total } = data

    totalVal.value = total
    const { pageSize, page } = params
    if (pageSize * page < total) {
      console.log('console.log A')
      // 有数据 可下一页
    } else {
      console.log('console.log B')
      // 无数据
    }
    if (!nextToggle) {
      recommendEventsList.length = 0
    }

    recommendEventsList.push(...baseData)
  }
}

const loading = ref(false)
const finished = ref(false)
const timer:any = ref('')
const onLoad = () => {
  console.log('onLoad onLoad')
  // 异步更新数据
  clearTimeout(timer.value)
  timer.value = setTimeout(() => {
    loading.value = true
    // 加载状态结束
    // // 数据全部加载完成
    // if (list.value.length >= 40) {
    //   finished.value = true
    // }
  }, 100)
}
const returnSportsSuccess = (val:any) => {
  getRecommendEvents(val)
}
const isShow = ref(false)
const returnStatus = (val:any) => {
  isShow.value = val
}
const init = () => {
  getRecommendEvents()
}
onBeforeMount(() => {
  init()
})
</script>
<style lang="scss" scoped>
.homeTime-page{
  padding: 0 40px;

}
.homeTime-Time-Tabs{
  .item{
    height: 62px;
    padding: 0 10px 0 20px;
    border-radius: 42px;
    background-color: #eff2f2;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin-right: 20px;
    .number{
      margin-left: 20px;
      padding: 0 13px;
      height: 46px;
      border-radius: 30px;
      color: #546371;
      background-color: #e5ecf3;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    .name{
      height: 24px;
      line-height: 24px;
    }
    &.active{
      background: #7642fe;
      color: #fff;
    }
  }
}
</style>
