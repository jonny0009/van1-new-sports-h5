<template>
  <div class="homeMatchHandicap">
    <div class="home-tabs-play">
      <TimeView :time-send-params="sendParams" />
    </div>
    <div class="home-match">
      <div calss="up-match-group__body">
        <div class="up-match">
          <!--  -->
          <div class="match-info-live__header border-bottom">
            <div class="up-match-league">
              <div class="text">{{ getLeagueShortName(sendParams) }}</div>
            </div>
            <div class="flex-cross-center">
              <div class="up-match-time">
                <SportsIcon :icon-src="'live'" /> 进行中
              </div>
            </div>
          </div>
          <!--  -->
          <div class="up-match-score border-bottom">
            <div class="item mb5">
              <img
                v-img="sendParams.homeLogo"
                :type="4"
                class="my-image img"
                style="object-fit: contain;"
                alt=""
              >
              <div class="name">{{ sendParams.homeTeamAbbr || sendParams.homeTeam }}</div>
              <div class="container">
                <div class="value">-</div>
              </div>
            </div>
            <div class="item">
              <img
                v-img="sendParams.awayLogo"
                class="my-image img"
                :type="5"
                style="object-fit: contain;"
                alt=""
              >
              <div class="name">{{ sendParams.awayTeamAbbr || sendParams.awayTeam }}</div>
              <div class="container">
                <div class="value">-</div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="up-match__body">
            <!-- 全场 亚洲让分盘 -->
            <div v-if="sendParams.RE" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 亚洲让分盘
                  <van-popover
                    placement="top"
                    theme="dark"
                    trigger="click"
                  >
                    <div class="popover-text">
                      全场让分盘
                    </div>
                    <template #reference>
                      <van-icon name="info" />
                    </template>
                  </van-popover>
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('RE',sendParams)" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 全场 大小盘  -->
            <div v-if="sendParams.ROU" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 大小盘
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('ROU',sendParams)" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 全场 1X2 -->
            <div v-if="sendParams.RM" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 1X2
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('RM',sendParams)" />
                  </div>
                </div>
              </div>
            </div>
            <!--
             -->
          </div>
        </div>
      </div>
      <!--  -->
      <div class="up-match__footer">
        <div class="match-footer">
          <div class="match-footer__item" @click="store.dispatch('betting/setMoreShow', { status: true, moreParams: props.sendParams })">
            <span>更多玩法</span>
            <!-- <span class="num">149</span> -->
            <van-icon class="arrow" name="arrow" />
          </div>
          <div class="match-footer__item" @click="goClick">
            <span>投注动态</span>
            <!-- <span class="num">45</span> -->
            <van-icon class="arrow" name="arrow" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getHandicap } from '@/utils/home/getHandicap.ts'
// components
import Handicap from '@/components/HomeMatch/public/Handicap/index.vue'
import TimeView from '@/components/HomeMatch/public/time/index.vue'
import SportsIcon from '@/components/Button/SportsIcon/index.vue'
// script
import { showDialog } from 'vant'
import store from '@/store'
const goClick = () => {
  showDialog({
    message: '投注动态即将推出',
    theme: 'round-button'
  }).then(() => {
  // on close
  })
}
const getLeagueShortName = ({ leagueShortName, leagueName }: any) => {
  if (!(leagueShortName && leagueName)) {
    return ''
  }
  return `${leagueShortName || leagueName}`
}
const props = defineProps({
  sendParams: {
    type: Object,
    default: function () {
      return {}
    }
  }
})
</script>
