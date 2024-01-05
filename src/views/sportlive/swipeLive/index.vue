<template>
  <div class="swipeLive">
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="(match,idx) in swipeList" :key="idx">
        <div class="wrap">
          <MatchItem
            :live-info="match"
            :match-index="idx"
            :active-index="activeIndex"
          />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts" setup>
import MatchItem from './main/MatchItem.vue'
// import { pushAnchor } from '@/api/home'
import { anchorLiveList } from '@/api/live'
import { ref, reactive, onBeforeMount } from 'vue'
const activeIndex = ref(0)
const swipeList = reactive([])
const init = async () => {
  const params = {
    page: 1,
    pageSize: 8,
    rbType: 1
  }

  const res:any = await anchorLiveList(params)
  console.log(res, 'res res')
  if (res.code === 200) {
    const dataArray = res?.data?.list || []
    const newGameBasic = dataArray.map((e:any) => {
      e.gameBasic = e
      return e
    })
    swipeList.length = 0
    swipeList.push(...newGameBasic)
  }
}
onBeforeMount(() => {
  init()
})
</script>
<style lang="scss" >
.swipeLive{

}
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
    }
  }
  .van-swipe__indicators{
    bottom: 18px;
    .van-swipe__indicator{
      width: 14px;
      height: 14px;
    }
  }
}
</style>
