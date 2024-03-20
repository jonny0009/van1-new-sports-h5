<template>
  <div v-if="swipeList.length" class="swipeLive">
    <van-swipe class="my-swipe" indicator-color="white" @change="swipeChange">
      <van-swipe-item v-for="(match, idx) in swipeList" :key="idx" @click="goDetails(match)">
        <div class="wrap">
          <MatchItem :key="idx" :live-info="match" :match-index="idx" :active-index="activeIndex" />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts" setup>
import MatchItem from './main/MatchItem.vue'
import { anchorLiveList, extendInfo } from '@/api/live'
import { ref, onBeforeMount } from 'vue'
import store from '@/store'
import router from '@/router'

const activeIndex = ref(0)
const swipeList: any = ref([])

const init = async () => {
  const params = {
    page: 1,
    pageSize: 5,
    rbType: 1
  }
  const res: any = await anchorLiveList(params)
  if (res.code === 200) {
    const dataArray = res?.data?.list || []
    swipeList.value.length = 0
    await dataArray.map(async (e: any) => {
      const gidm = e.gidm
      const extendInfoParams = {
        gidm
      }
      const extendInfoRes: any = await extendInfo(extendInfoParams)
      if (extendInfoRes.code === 200) {
        const { streamNa }: any = extendInfoRes.data
        const { liveali } = streamNa || {}
        const { m3u8 } = liveali || {}
        e.m3u8 = e.m3u8 || m3u8
        e.streamNa = streamNa
      }
      swipeList.value.push(e)
    })
  }
}

const goDetails = (item: any) => {
  // if (!item) {
  //   return
  // }
  // const { gidm } = item
  // const params = {
  //   name: 'MatchDetail',
  //   params: {
  //     id: gidm
  //   }
  // }
  // router.push(params)
  // store.dispatch('app/setMatchLiveIndex', 1)
}

const swipeChange = (index: any) => {
  activeIndex.value = index
}

onBeforeMount(() => {
  swipeList.value.length = 0
  init()
})
</script>
<style lang="scss" scoped>
.swipeLive {
  margin: 0 40px;
  padding: 0 0 20px;
  position: relative;
}

.my-swipe {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    height: 384px;
    text-align: center;
    display: flex;
    flex-direction: column;

    .wrap {
      flex: 1;
      overflow: auto;
      position: relative;
      background: #000;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;

      .loading {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 99;
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }
}
</style>
<style lang="scss">
.swipeLive {
  .van-swipe__indicators {
    bottom: 18px;

    .van-swipe__indicator {
      width: 12px;
      height: 12px;
    }

    .van-swipe__indicator--active {
      width: 24px;
      height: 12px;
      border-radius: 24px;
    }
  }
}
</style>
