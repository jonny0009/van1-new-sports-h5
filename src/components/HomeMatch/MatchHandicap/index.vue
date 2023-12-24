<template>
  <div class="homeMatchHandicap">
    <div class="home-tabs-play">

      <TimeView :time-send-params="sendParams" />

      <div class="play">
        <div class="flex-1"></div>
        <span
          class="btn R"
          :class="[
            {
              active: RrefShow
            }
          ]"
          @click="Rclick"
        >
          让分
        </span>
        <span
          class="btn OU"
          :class="[
            {
              active: OUrefShow
            }
          ]"
          @click="OUclick"
        >
          大小
        </span>
        <span
          class="btn M"
          :class="[
            {
              active: MrefShow
            }
          ]"
          @click="Mclick"
        >
          独赢
        </span>
      </div>
    </div>
    <div class="home-match">
      <div class="up-match-group__body">
        <div class="up-match">
          <!--  -->
          <div class="up-match__header border-bottom">
            <div class="match-info">
              <div class="match-team-logo">
                <img
                  v-img="props.sendParams.homeLogo"
                  class="my-image home"
                  alt=""
                  :type="4"
                  style="object-fit: contain;"
                >
                <img
                  v-img="props.sendParams.awayLogo"
                  class="my-image away"
                  alt=""
                  :type="5"
                  style="object-fit: contain;"
                >
              </div>
              <div class="match-info__content">
                <div class="team">
                  <span class="match-team-name">
                    {{ getTeam(props.sendParams) }}
                  </span>
                  <div class="flex-1"></div>
                  <div v-if="showFUTime" class="up-match-time" v-html="showFUTime"></div>
                </div>
                <div class="up-match-league">
                  <SportsIcon :icon-src="props.sendParams.gameType" />
                  <div class="text">{{ getLeagueShortName(props.sendParams) }}</div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="up-match__body">
            <!-- 全场 亚洲让分盘 -->
            <div v-if="RrefShow" ref="Rref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  全场 亚洲让分盘
                  <!-- <van-popover placement="top" theme="dark" trigger="click">
                    <div class="popover-text">全场让分盘</div>
                    <template #reference>
                      <van-icon name="info" />
                    </template>
                  </van-popover> -->
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('R',sendParams)" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 全场 大小盘  -->
            <div v-if="OUrefShow" ref="OUref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">全场 大小盘</div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('OU',sendParams)" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 全场 1X2 -->
            <div v-if="MrefShow" ref="Mref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">全场 1X2</div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('M',sendParams)" />
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
          <div
            class="match-footer__item"
            @click="store.dispatch('betting/setMoreShow', { status: true, moreParams: props.sendParams })"
          >
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
import { matchDateFormat } from '@/utils/date'
import { getHandicap } from '@/utils/home/getHandicap'
import Handicap from '@/components/HomeMatch/public/Handicap/index.vue'
import TimeView from '@/components/HomeMatch/public/time/index.vue'
import SportsIcon from '@/components/Button/SportsIcon/index.vue'
import { ref, computed } from 'vue'
import store from '@/store'
import { showDialog } from 'vant'
const props = defineProps({
  sendParams: {
    type: Object,
    default: function () {
      return {}
    }
  }
})
const getTeam = ({ homeTeamAbbr, awayTeamAbbr, homeTeam, awayTeam }: any) => {
  if (!homeTeamAbbr) {
    return ''
  }
  return `${homeTeamAbbr || homeTeam} v ${awayTeamAbbr || awayTeam}`
}
const getLeagueShortName = ({ leagueShortName, leagueName }: any) => {
  if (!(leagueShortName && leagueName)) {
    return ''
  }
  return `${leagueShortName || leagueName}`
}
const RrefShow = ref(true)
const Rclick = () => {
  RrefShow.value = !RrefShow.value
}
const OUrefShow = ref(true)
const OUclick = () => {
  OUrefShow.value = !OUrefShow.value
}

const MrefShow = ref(true)
const Mclick = () => {
  MrefShow.value = !MrefShow.value
}
const goClick = () => {
  showDialog({
    message: '投注动态即将推出',
    theme: 'round-button'
  }).then(() => {
  // on close
  })
}

const showFUTime = computed(() => {
  const { gameDate } = props.sendParams || {}
  return matchDateFormat(gameDate, 'MM-DD HH:mm')
})

</script>
