<template>
  <div class="home-page">
    <!-- 热门赛事 -->
    <HotMatch ref="refHotMatch" />
    <!-- 推荐比赛 -->
    <GoodMatch ref="refGoodMatch" />
    <!-- 早盘 -->
    <LatestMatch ref="refLatestMatch" />
    <!-- btn -->
    <div class="Button-MatchMore mt20" @click="goHomeTime">
      <span>
        查看更多比赛
      </span>
    </div>
    <div class="footerHeight"></div>
  </div>
</template>

<script lang="ts" setup>
// components
import HotMatch from './HotMatch/index.vue'
import GoodMatch from './GoodMatch/index.vue'
import LatestMatch from './LatestMatch/index.vue'
import router from '@/router'
const goHomeTime = () => {
  const params:any = { name: 'HomeTime' }
  router.push(params)
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
