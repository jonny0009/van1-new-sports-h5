<template>
  <div class="home-page">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="refresh-wrap">

        <homeBarHeader />

        <homeTabs class="mt10" />

        <ArrowTitle class="ml20 mt10 mb10" :src="titleHot" text="热门赛事" @returnSuccess="returnStatus" />

        <div class="Hot-Match-Group">
          <img :src="xxx1" />
          <img :src="xxx1" />
          <img :src="xxx1" />
          <img :src="xxx1" />
        </div>

        <ArrowTitle class="ml20 mt10 mb10" :src="titleRecommend" text="推荐比赛" @returnSuccess="returnStatus" />

        <div class="Recommend-Match-Tabs">
          <SportsButton text="FT" :active="true" />
          <SportsButton text="BK" />
          <SportsButton text="TN" />
          <SportsButton text="OP_BM" />
        </div>

        <ArrowTitle class="ml20 mt10 mb10" :src="titleTime" text="早盘" @returnSuccess="returnStatus" />
        <div class="Recommend-Match-Tabs">
          <SportsButton text="FT" :active="true" />
          <SportsButton text="BK" />
          <SportsButton text="TN" />
          <SportsButton text="OP_BM" />
        </div>

        <p class="tc">刷新次数:</p>

        <div class="Button-MatchMore">
          <span>
            查看更多比赛
          </span>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>
import xxx1 from '@/assets/images/home/other/x1.png'
import homeBarHeader from './components/homeBarHeader/index.vue'
import homeTabs from './components/homeTabs/index.vue'
import ArrowTitle from '@/components/Title/ArrowTitle/index.vue'
import SportsButton from '@/components/Button/SportsButton/index.vue'

import titleHot from '@/assets/images/home/title-hot.png'
import titleRecommend from '@/assets/images/home/title-recommend.png'
import titleTime from '@/assets/images/home/title-time.png'
import { ref } from 'vue'
const isLoading = ref(false)
const onRefresh = () => {
  isLoading.value = false
}
const returnStatus = (val:any) => {
  console.log(val)
}
</script>
<style lang="scss" scoped>
.home-page{
  overflow: auto;
  .refresh-wrap{
    min-height: calc(100vh - 96px);
  }
}
</style>
<style lang="scss" >
.Button-MatchMore{
  color: #7642FD;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  span{
    font-size: 24px;
  }
}
.Hot-Match-Group{
  display: flex;
  overflow: auto;
  margin: 0 40px;
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  img{
    width: 200px;
    height: 176px;
    display: block;
    margin-right: 20px;
  }
}
.Recommend-Match-Tabs{
  margin: 0 40px;
  display: flex;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 0;
    display: none;
  }
  .SportsButton{
    margin-right: 20px;
    flex-shrink: 1;
    white-space:nowrap;
  }
}
</style>
