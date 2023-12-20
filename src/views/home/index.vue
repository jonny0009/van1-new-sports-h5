<template>
  <div class="home-page">

    <ArrowTitle class="mt10 mb10" :src="titleHot" text="热门赛事" @returnSuccess="returnStatus" />

    <div class="Hot-Match-Group">
      <img :src="xxx1" />
      <img :src="xxx1" />
      <img :src="xxx1" />
      <img :src="xxx1" />
    </div>

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
import ArrowTitle from '@/components/Title/ArrowTitle/index.vue'
import SportsButton from '@/components/Button/SportsButton/index.vue'
// img
import xxx1 from '@/assets/images/home/other/x1.png'
import titleHot from '@/assets/images/home/title-hot.png'
import titleRecommend from '@/assets/images/home/title-recommend.png'
import titleTime from '@/assets/images/home/title-time.png'
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
