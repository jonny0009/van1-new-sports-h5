<template>
  <div ref="container" class="homeMatchHandicap">
    <van-sticky v-if="playTitleToggle" :offset-top="offsetTop" :container="container" z-index="5">
      <div class="home-tabs-play">
        <div class="home-tabs-play-bg"></div>
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
            {{ $t('home.R') }}
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
            {{ $t('home.OU') }}
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
            {{ $t('home.M') }}
          </span>
          <span
            class="btn PD"
            :class="[
              {
                active: PDrefShow
              }
            ]"
            @click="PDclick"
          >
            {{ $t('live.score') }}
          </span>
        </div>
      </div>
    </van-sticky>
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
                  style="object-fit: contain"
                />
                <img
                  v-img="props.sendParams.awayLogo"
                  class="my-image away"
                  alt=""
                  :type="5"
                  style="object-fit: contain"
                />
              </div>
              <div class="match-info__content">
                <div class="team">
                  <span class="match-team-name">
                    {{ getTeam(props.sendParams) }}
                  </span>
                  <div class="flex-1"></div>
                  <div v-if="showFUTime" class="up-match-time" v-html="showFUTime"></div>
                </div>
                <div class="up-match-league hasSportsIcon">
                  <SportsIcon :icon-src="props.sendParams.gameType" />
                  <div class="text">{{ getLeagueShortName(props.sendParams) }}</div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="up-match__body">
            <div v-if="RrefShow && sendParams.R" ref="Rref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center" :class="`flex-cross-center-${sendParams.gidm}${sendParams.systemId}`">
                  {{ $t('home.RInfo') }}
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('R', sendParams)" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="OUrefShow && sendParams.OU" ref="OUref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">{{ $t('home.OUInfo') }}</div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('OU', sendParams)" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="MrefShow && sendParams.M" ref="Mref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">{{ $t('home.MInfo') }}</div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('M', sendParams)" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 正确比分 -->
            <div v-if="PDrefShow && sendParams.PD" ref="PDref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">{{ $t('home.PDscore') }}</div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <!-- 比分盘口-->
                    <HandicapScore :send-params="sendParams" :type="'PD'" />
                  </div>
                </div>
              </div>
            </div>
            <!--
             -->
          </div>
        </div>
      </div>

      <!--  @click="store.dispatch('betting/setMoreShow', { status: true, moreParams: props.sendParams })"> -->
      <div class="up-match__footer">
        <div class="match-footer">
          <div class="match-footer__item" @click="betMoreShow">
            <span>{{ $t('home.morePlay') }}</span>
            <span class="num">{{ sendParams.playNum }}</span>
            <van-icon class="arrow" name="arrow" />
          </div>
          <!-- <div class="match-footer__item" @click="goClick">
            <span>投注动态</span>
            <span class="num">45</span>
            <van-icon class="arrow" name="arrow" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { matchDateFormat } from '@/utils/date'
import { getHandicap } from '@/utils/home/getHandicap'
import Handicap from '@/components/HomeMatch/public/Handicap/index.vue'
import HandicapScore from '@/components/HomeMatch/public/HandicapScore/index.vue'
import TimeView from '@/components/HomeMatch/public/time/index.vue'
import SportsIcon from '@/components/Button/SportsIcon/index.vue'
import { computed, ref } from 'vue'
import store from '@/store'
// import { showDialog } from 'vant'
const props = defineProps({
  sendParams: {
    type: Object,
    default: function () {
      return {}
    }
  },
  playTitleToggle: {
    type: Boolean,
    default: function () {
      return true
    }
  }
})
const container = ref(null)
const offsetTop = computed(() => {
  const offsetTop = store.state.app.globalBarHeaderHeight || 48
  var offsetTopval = 48
  if (offsetTop > 60) {
    offsetTopval = 48
  } else {
    offsetTopval = offsetTop
  }
  return offsetTopval
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
const RrefShow = computed(() => store.state.home.RrefShow)
const Rclick = () => {
  //
  store.dispatch('home/setKeyValue', {
    key: 'RrefShow',
    value: !RrefShow.value
  })
}
const OUrefShow = computed(() => store.state.home.OUrefShow)
const OUclick = () => {
  //
  store.dispatch('home/setKeyValue', {
    key: 'OUrefShow',
    value: !OUrefShow.value
  })
}

const MrefShow = computed(() => store.state.home.MrefShow)
const Mclick = () => {
  //
  store.dispatch('home/setKeyValue', {
    key: 'MrefShow',
    value: !MrefShow.value
  })
}
const PDrefShow = computed(() => store.state.home.PDrefShow)
const PDclick = () => {
  //
  store.dispatch('home/setKeyValue', {
    key: 'PDrefShow',
    value: !PDrefShow.value
  })
}
const betMoreShow = () => {
  store.dispatch('betting/setMoreShow', { status: true, moreParams: props.sendParams })
  store.dispatch('user/getLocationHeight', false)
}
// const goClick = () => {
//   showDialog({
//     message: '投注动态即将推出',
//     theme: 'round-button'
//   }).then(() => {
//   // on close
//   })
// }

const showFUTime = computed(() => {
  const { gameDate } = props.sendParams || {}
  return matchDateFormat(gameDate, 'MM/DD HH:mm')
})
</script>
