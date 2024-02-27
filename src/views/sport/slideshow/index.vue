<template>
  <div class="slideshow">
    <van-swipe class="my-swipe" :loop="true" indicator-color="white" :autoplay="30000">
      <van-swipe-item v-for="(item, index) in props.commonMatchesList" :key="index">
        <div class="bannerBg">
          <!-- <van-image class="bannerBg-1" fit="contain" :src="getImgUrl(item)" /> -->
          <img class="bannerBg-1" fit="fill" :src="getImgUrl(item)" />
          <div class="team-dim">
            <!-- 头部 -->
            <p class="top">
            <div class="top-left">
              <SportsIcon :icon-src="item.gameType" class="ball-img" />
              <div class="topName">
                {{ item.leagueName }}
              </div>
            </div>
            <span class="time">
              {{ formatToDate(item.gameDate, 'MM-DD HH:mm') }}
            </span>
            </p>
            <!-- 比赛 -->
            <div class="match">
              <img v-img="item.homeLogo" class="img_1" alt="" :type="4" style="object-fit: contain;">
              <span v-if="item.R || item.RE">
                {{ $t('home.RInfo') }}
              </span>
              <span v-else-if="item.OU || item.ROU">
                {{ $t('home.OU') }}
              </span>
              <span v-else-if="item.M || item.RM">
                {{ $t('home.M') }}
              </span>
              <img v-img="item.awayLogo" class="img_1" alt="" :type="5" style="object-fit: contain;">
            </div>
            <!-- 队伍名称 -->
            <div class="matchName">
              <div class="matchName-name">{{ item.homeTeam }}</div>
              <div class="matchName-name-right">{{ item.awayTeam }}</div>
            </div>
            <!-- 比分 -->
            <div class="score">
              <Handicap v-if="item.R" :send-params="getHandicap('R', item)" :type="'RB'" />
              <Handicap v-else-if="item.RE" :send-params="getHandicap('RE', item)" :type="'RB'" />
              <Handicap v-else-if="item.OU" :send-params="getHandicap('OU', item)" :type="'RB'" />
              <Handicap v-else-if="item.ROU" :send-params="getHandicap('ROU', item)" :type="'RB'" />
              <Handicap v-else-if="item.M" :send-params="getHandicap('M', item)" :type="'RB'" />
              <Handicap v-else-if="item.RM" :send-params="getHandicap('RM', item)" :type="'RB'" />
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" setup>
import { formatToDate } from '@/utils/date'
import { getHandicap } from '@/utils/home/getHandicap'
import Handicap from './Handicap.vue'
import { sportBgArr } from '@/utils/sportBg'


const getImgUrl = (item: any) => {
  // return new URL(`../../../assets/images/sport/${item.gameType}.png`, import.meta.url).href
  return sportBgArr()[item.gameType]
}

const props = defineProps({
  commonMatchesList: {
    type: Array as any,
    default: function () {
      return []
    }
  },
})

</script>

<style lang="scss" scoped>
.slideshow {
  margin-top: 20px;

  :deep(.van-swipe__indicators) {
    bottom: 8px;
  }

  .bannerBg {
    border-radius: 16px;
    width: 678px;
    height: 284px;
    position: relative;

    &-1 {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      border-radius: 16px;
      height: 100%;
      width: 100%;
    }

    .team-dim {
      position: absolute;
      top: 0;
      left: 0;
      padding: 12px;
      width: 100%;
      height: 100%;
      border-radius: 16px;
      font-size: 24px;
      color: #FFF;
      background-color: var(--color-match-team-dim-bg);
    }

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 24px;
      color: #FFF;

      &-left {
        display: flex;
        align-items: center;
      }

      .ball-img {
        font-size: 24px;
        // color: var(--color-text-3);
        color: #FFF;
        margin-right: 3px;
        font-weight: 500;
      }

      .topName {
        display: inline-block;
        width: 450px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    .match {
      margin: 33px 20px 8px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .img_1 {
        width: 55px;
        height: 53px;
      }
    }

    .matchName {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 25px;

      &-name {
        width: 250px;
        text-align: left;
        white-space: nowrap;
        /* 不换行 */
        overflow: hidden;
        /* 溢出部分隐藏 */
        text-overflow: ellipsis;
        /* 使用省略号代替溢出的文本 */
      }

      &-name-right {
        width: 250px;
        text-align: right;
        white-space: nowrap;
        /* 不换行 */
        overflow: hidden;
        /* 溢出部分隐藏 */
        text-overflow: ellipsis;
        /* 使用省略号代替溢出的文本 */
      }
    }

    .score {
      margin-top: 13px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left-1 {
        background-color: var(--color-bg-1);
      }
    }

  }


}
</style>
