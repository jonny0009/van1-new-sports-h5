<template>
  <div class="homeTime-page">
    <ArrowTitle class="mt10 mb20" :src="titleTime" text="早盘" @returnSuccess="returnStatus" />
    <template v-if="!isShow">
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
          <template v-if="isLoading">
            <HomeMatchHandicap
              v-for="(item,idx) in recommendEventsList"
              :key="idx"
              :send-params="item"
              :class="{'mt20':idx !== 0}"
            />
            <HomeEmpty v-if="!recommendEventsList.length"></HomeEmpty>
          </template>

          <Loading
            v-if="!isLoading || loading"
            :class="{
              'new_loading mt10' : loading
            }"
          />

        </template>
      </van-list>
      <div class="footerHeight"></div>
    </template>
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
  gradeType: 2,
  gameType: 'FT'
})
const recommendEventsList = reactive([])
const totalVal = ref(0)
const getLoading = (val:any = false, nextToggle:any = '') => {
  if (nextToggle) {
    loading.value = !val
  } else {
    isLoading.value = val
  }
}
const getRecommendEvents = async (nextToggle:any = '') => {
  getLoading(false, nextToggle)
  const res:any = await recommendEvents(params)
  getLoading(true, nextToggle)
  if (res.code === 200) {
    const data:any = res?.data || {}
    const { baseData, total } = data
    totalVal.value = total
    const { pageSize, page } = params
    if (nextToggle) {
      if (pageSize * page < total) {
        // 有数据 可下一页
        finished.value = false
      } else {
        // 无数据
        finished.value = true
      }
    } else {
      recommendEventsList.length = 0
    }
    recommendEventsList.push(...baseData)
  }
}

const loading = ref(false)
const finished = ref(false)
const timer:any = ref('')
const onLoad = () => {
  // 异步更新数据
  if (!finished.value) {
    if (!loading.value) {
      loading.value = true
      clearTimeout(timer.value)
      timer.value = setTimeout(() => {
        params.page++
        getRecommendEvents(true)
      }, 100)
    }
  }
  // 加载状态结束 finished => true
}
const returnSportsSuccess = (val:any) => {
  isLoading.value = true
  params.gameType = val
  params.page = 1
  getRecommendEvents()
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

<style lang="scss">
.new_loading{
  height: auto !important;
}
</style>
