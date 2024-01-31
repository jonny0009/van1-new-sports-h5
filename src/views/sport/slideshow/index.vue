<template>
  <div class="slideshow">
    <van-swipe class="my-swipe" :loop="true" indicator-color="white" :autoplay="3000">
      <van-swipe-item v-for="(item, index) in props.commonMatchesList" :key="index">
        <div class="bannerBg" :class="{'bannerBg-blue':ifBLue}">
          <!-- 头部 -->
          <p class="top">
          <div>
            <SportsIcon :icon-src="item.gameType" class="ball-img" />
            <span>
              {{ item.leagueName }}
            </span>
          </div>
          <span class="time">
            {{ formatToDate(item.gameDate, 'MM-DD HH:mm') }}
          </span>
          </p>
          <!-- 比赛 -->
          <div class="match">
            <img v-img="item.homeLogo" class="img_1" alt="" :type="4" style="object-fit: contain;">
            <span v-if="item.R||item.RE">
              {{ $t('home.RInfo') }}
            </span>
            <span v-else-if="item.OU||item.ROU">
              {{ $t('home.OU') }}
            </span>
            <span v-else-if="item.M||item.RM">
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
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" setup>
import { formatToDate } from '@/utils/date'
import { getHandicap } from '@/utils/home/getHandicap'
import Handicap from './Handicap.vue'

import { computed } from 'vue'
import store from '@/store'
const theme = computed(() => store.state.app.theme)
const ifBLue = computed(() => {
  if (theme.value === 'blue') {
    return true
  }
  return false
})

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
    width: 678px;
    height: 284px;
    border-radius: 16px;
    background: url('@/assets/images/user/leagueBg.png');
    background-size: 100% 100%;
    padding: 12px;
    font-size: 24px;
    color: #FFF;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 24px;
      color: #FFF;

      .ball-img {
        font-size: 24px;
        // color: var(--color-text-3);
        color: #FFF;
        margin-right: 3px;
        font-weight: 500;
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
  .bannerBg-blue{
    background: url('@/assets/images/user/blue/leagueBg.png');
    width: 678px;
    height: 284px;
    border-radius: 16px;
    background-size: 100% 100%;
    padding: 12px;
    font-size: 24px;
  }

}</style>
