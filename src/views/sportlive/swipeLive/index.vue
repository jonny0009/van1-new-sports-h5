<template>
  <div class="swipeLive">

    <!--  -->
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="(match,idx) in swipeList" :key="idx">
        <div class="wrap">
          <MatchItem
            :live-info="match"
            :match-index="idx"
            :active-index="activeIndex"
          />
        </div>
        <div class="footer">
          ss assa
          <div class="flex-1">
          </div>
          saassa
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts" setup>
import MatchItem from './main/MatchItem.vue'
import { pushAnchor } from '@/api/home'
import { ref, reactive, onBeforeMount } from 'vue'
const activeIndex = ref(0)
const swipeList = reactive([])
const init = async () => {
  const res:any = await pushAnchor()
  if (res.code === 200) {
    const dataArray = res.data || []
    swipeList.length = 0
    swipeList.push(...dataArray)
  }
}

onBeforeMount(() => {
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
    }
    .footer{
      flex-shrink: 0;
      display: flex;
      align-items: center;
      height: 51px;
      background: #000000;
      padding: 0 20px;
      border-radius: 0 0 15px 15px ;
      font-size: 24px;
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
