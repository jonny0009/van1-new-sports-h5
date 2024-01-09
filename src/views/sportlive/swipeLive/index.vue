<template>
  <div v-if="swipeList.length" class="swipeLive">
    <van-swipe class="my-swipe" indicator-color="white" @change="swipeChange">
      <van-swipe-item v-for="(match,idx) in swipeList" :key="idx" @click="goDetails(match)">
        <div class="wrap">
          <!-- <van-loading v-if="matchIndex !== idx && getExtendInfoLoading" class="loading" size="30px" /> -->
          <MatchItem
            :key="idx"
            :live-info="match"
            :match-index="matchIndex"
            :active-index="activeIndex"
          />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts" setup>
import MatchItem from './main/MatchItem.vue'
import { anchorLiveList, extendInfo } from '@/api/live'
import { ref, onBeforeMount } from 'vue'
import router from '@/router'

const activeIndex = ref(0)
const swipeList:any = ref([])

const init = async () => {
  const params = {
    page: 1,
    pageSize: 5,
    rbType: 1
  }
  const res:any = await anchorLiveList(params)
  if (res.code === 200) {
    const dataArray = res?.data?.list || []

    let gidm = ''
    let newGameBasic = dataArray.map((e:any, idx:any) => {
      if (idx === 0) {
        gidm = e.gidm
      }
      e.gameBasic = e
      return e
    })
    if (gidm) {
      const extendInfoParams = {
        gidm
      }
      const extendInfoRes:any = await extendInfo(extendInfoParams)
      if (extendInfoRes.code === 200) {
        const { streamNa }:any = extendInfoRes.data
        newGameBasic = newGameBasic.map((e:any, idx:any) => {
          if (idx === 0) {
            e.streamNa = streamNa
            const { liveali } = streamNa || {}

            console.log(streamNa)
            console.log(liveali)
            const { m3u8 } = liveali || {}
            e.m3u8 = e.m3u8 || m3u8
          }
          return e
        })
        console.log(extendInfoRes, 'extendInfoRes')
      }
    }
    console.log(newGameBasic, 'newGameBasic newGameBasic')
    swipeList.value.length = 0
    swipeList.value.push(...newGameBasic)
  }
}

const goDetails = (item:any) => {
  if (!item) {
    return
  }
  const { gidm } = item
  const params = {
    name: 'BroadcastDetail',
    params: {
      id: gidm
    }
  }
  router.push(params)
}

const matchIndex = ref(0)
const setTimeoutTimer = ref()
const swipeChange = (index:any) => {
  clearTimeout(setTimeoutTimer.value)
  setTimeoutTimer.value = setTimeout(() => {
    matchIndex.value = index
  }, 1000)
}

onBeforeMount(() => {
  swipeList.value.length = 0
  init()
})
</script>
<style lang="scss" >
.my-swipe{
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 384px;
    text-align: center;
    display: flex;
    flex-direction:column;
    .wrap{
      flex: 1;
      overflow: auto;
      position: relative;
      background: #000;
      .loading{
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 99;
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }
  .van-swipe__indicators{
    bottom: 12px;
    .van-swipe__indicator{
      width: 14px;
      height: 14px;
    }
  }
}
</style>
