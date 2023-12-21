<template>
  <div class="homeTime-page">

    <ArrowTitle class="mt10 mb10" :src="titleTime" text="早盘" @returnSuccess="returnStatus" />

    <div class="homeTime-Sports-Tabs">
      <SportsButton text="FT" :active="true" />
      <SportsButton text="BK" />
      <SportsButton text="TN" />
      <SportsButton text="OP_BM" />
    </div>

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

    <homeMatchHandicap class="mt20" />

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
import SportsButton from '@/components/Button/SportsButton/index.vue'
import homeMatchHandicap from '@/components/HomeMatch/MatchHandicap/index.vue'
import titleTime from '@/assets/images/home/title-time.png'
import ArrowTitle from '@/components/Title/ArrowTitle/index.vue'
const returnStatus = (val:any) => {
  console.log(val)
}
</script>
<style lang="scss">
.homeTime-page{
  padding: 0 40px;
  .homeTime-Sports-Tabs{
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
}
</style>
