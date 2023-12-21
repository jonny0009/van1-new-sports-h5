<template>
  <div class="home-page">
    <!-- 热门赛事 -->
    <HotMatch ref="refHotMatch" />

    <ArrowTitle class="mt10 mb10" :src="titleRecommend" text="推荐比赛" @returnSuccess="returnStatus" />

    <div class="Recommend-Match-Tabs">
      <SportsButton text="FT" :active="true" />
      <SportsButton text="BK" />
      <SportsButton text="TN" />
      <SportsButton text="OP_BM" />
    </div>

    <homeMatchHandicap class="mt20" />

    <ArrowTitle class="mt10 mb10" :src="titleTime" text="早盘" @returnSuccess="returnStatus" />

    <div class="Recommend-Match-Tabs">
      <SportsButton text="FT" :active="true" />
      <SportsButton text="BK" />
      <SportsButton text="TN" />
      <SportsButton text="OP_BM" />
    </div>

    <homeMatchHandicap class="mt20" />

    <div class="Button-MatchMore mt20">
      <span>
        查看更多比赛
      </span>
    </div>

    <div class="footerHeight"></div>

  </div>
</template>

<script lang="ts" setup>
// home
import homeMatchHandicap from '@/components/HomeMatch/MatchHandicap/index.vue'
// common components
import SportsButton from '@/components/Button/SportsButton/index.vue'
import HotMatch from './HotMatch/index.vue'
// img
import titleRecommend from '@/assets/images/home/title-recommend.png'
import titleTime from '@/assets/images/home/title-time.png'
// ts
import { onBeforeMount } from 'vue'
// import { firstLeagues } from '@/api/home'

const getFirstLeagues = async () => {
}

const init = () => {
  getFirstLeagues()
}
onBeforeMount(() => {
  init()
})

const returnStatus = (val:any) => {
  console.log(val)
}
</script>
<style lang="scss" scoped>
.home-page{
  overflow: hidden;
  padding: 0 40px;
 .van-pull-refresh {
    min-height: calc(100vh - 96px);
  }
  .refresh-wrap{
    padding-bottom: 190px;
  }
}
</style>
