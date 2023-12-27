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
            <div v-if="RrefShow && sendParams.R" ref="Rref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center" :class="`flex-cross-center-${sendParams.gidm}${sendParams.systemId}`">
                  {{ $t('home.RInfo') }}
                  <van-popover placement="top" theme="dark" trigger="click" class="newPopover" :to="`.flex-cross-center-${sendParams.gidm}${sendParams.systemId}`">
                    <div class="popover-text">{{ $t('home.RInfo2') }}</div>
                    <template #reference>
                      <van-icon name="info" />
                    </template>
                  </van-popover>
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('R',sendParams)" :type="'RR'" />
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
                    <Handicap :send-params="getHandicap('OU',sendParams)" :type="'RR'" />
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
                    <Handicap :send-params="getHandicap('M',sendParams)" :type="'RR'" />
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
            <span>{{ $t('home.morePlay') }}</span>
            <!-- <span class="num">149</span> -->
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
import TimeView from '@/components/HomeMatch/public/time/index.vue'
import SportsIcon from '@/components/Button/SportsIcon/index.vue'
import { computed } from 'vue'
import store from '@/store'
// import { showDialog } from 'vant'
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
  return matchDateFormat(gameDate, 'MM-DD HH:mm')
})

</script>
