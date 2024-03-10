<template>
  <div ref="container" class="homeMatchHandicap" :data-val="offsetTop">
    <van-sticky v-if="playTitleToggle" :offset-top="offsetTop" :container="container" z-index="5">
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
          <div class="match-info-live__header border-bottom">
            <div v-if="showSportsIcon(sendParams)" class="live-icon" @click="goToDetail(sendParams)">
              <i v class="iconfont icon-footer-live"></i>
            </div>
            <div class="up-match-league">
              <SportsIcon :icon-src="props.sendParams.gameType" class="ball-img" />
              <div class="text">{{ getLeagueShortName(sendParams) }}</div>
            </div>
            <div class="flex-cross-center">
              <div class="up-match-time">
                <SportsIcon v-show="showSportsIcon(sendParams)" :icon-src="'sportlive'" class="live-img" />
                <div class="up-match-time-html" :class="sendParams.gameType" v-html="showRBTime(sendParams)"></div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="up-match-score border-bottom">
            <div class="item mb5 mt10">
              <img v-img="sendParams.homeLogo" :type="4" class="my-image img" style="object-fit: contain" alt="" />
              <div class="name">{{ sendParams.homeTeamAbbr || sendParams.homeTeam }}</div>
              <div class="container">
                <div class="value">
                  {{ getScore(sendParams, 'H') }}
                </div>
              </div>
            </div>
            <div class="item">
              <img v-img="sendParams.awayLogo" class="my-image img" :type="5" style="object-fit: contain" alt="" />
              <div class="name">{{ sendParams.awayTeamAbbr || sendParams.awayTeam }}</div>
              <div class="container">
                <div class="value">
                  {{ getScore(sendParams, 'C') }}
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="up-match__body">
            <div v-if="RrefShow && sendParams.RE" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  <span v-if="tabType === 'RB'">
                    {{ $t('home.RBInfo') }}
                  </span>
                  <span v-else>
                    {{ $t('home.RInfo') }}
                  </span>
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('RE', sendParams)" :type="'RB'" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="OUrefShow && sendParams.ROU" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  <span v-if="tabType === 'RB'">
                    {{ $t('home.RBSize') }}
                  </span>
                  <span v-else>
                    {{ $t('home.OUInfo') }}
                  </span>
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('ROU', sendParams)" :type="'RB'" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="MrefShow && sendParams.RM" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  <span v-if="tabType === 'RB'">
                    {{ $t('home.RBRide') }}
                  </span>
                  <span v-else>
                    {{ $t('home.MInfo') }}
                  </span>
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('RM', sendParams)" :type="'RB'" />
                  </div>
                </div>
              </div>
            </div>
            <!-- 滚球正确比分 -->
            <div v-if="PDrefShow && sendParams.RPD" ref="Mref" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">{{ $t('home.PDscore') }}</div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <!-- 比分盘口-->
                    <HandicapScore :send-params="sendParams" :type="'RPD'" :ifMatchLive="ifMatchLive" />
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
          <div class="match-footer__item" @click="betMoreShow">
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
import { ref, computed } from 'vue'
import { tnStObj, bsStObj, opScoreObj } from '@/utils/home/gameInfo'
import { dateFormat } from '@/utils/date'
import { getScore } from '@/utils/home/getScore'
import { getHandicap } from '@/utils/home/getHandicap'
// components
import Handicap from '@/components/HomeMatch/public/Handicap/index.vue'
import HandicapScore from '@/components/HomeMatch/public/HandicapScore/index.vue'
import TimeView from '@/components/HomeMatch/public/time/index.vue'
// import SportsIcon from '@/components/Button/SportsIcon/index.vue'
import router from '@/router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// script
// import { showDialog } from 'vant'
import store from '@/store'
// const goClick = () => {
//   showDialog({
//     message: '投注动态即将推出',
//     theme: 'round-button'
//   }).then(() => {
//   // on close
//   })
// }

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
//
const sectionMap: any = {
  0: '',
  Q1: t('live.Q1'),
  Q2: t('live.Q2'),
  Q3: t('live.Q3'),
  Q4: t('live.Q4'),
  '1h': t('live.Q1'),
  '2h': t('live.Q2'),
  '3h': t('live.Q3'),
  '4h': t('live.Q4'),
  OT: t('live.OT'),
  HT: t('live.HT'),
  H1: t('live.H1'),
  H2: t('live.H2'),
  q1: t('live.Q1'),
  q2: t('live.Q2'),
  q3: t('live.Q3'),
  q4: t('live.Q4'),
  ot: t('live.OT'),
  ht: t('live.HT'),
  h1: t('live.H1'),
  h2: t('live.H2')
}
const BKSection = (section: any) => {
  const sectionToLowerCase = section.toLowerCase()
  return sectionMap[sectionToLowerCase]
}
const currBkTime: any = ref('')
const showRBTime = (raceinfo: any = {}) => {
  const { showtype, gameType, gameInfo, showType, homeTeamSuffix, gidm } = raceinfo
  const Obj = opScoreObj(gameInfo, 5)
  const seNow: any = gameInfo && gameInfo.se_now
  if (showtype === 'RB' || showType === 'RB') {
    switch (gameType) {
      // 足球
      //
      case 'FT':
        if (!gameInfo) {
          // 原本data显示空
          return t('home.img')
        }
        if (homeTeamSuffix?.includes('点球') || homeTeamSuffix?.includes('點球')) {
          gameInfo.raceType = 'dianqiu'
          gameInfo.teamSuffix = t('home.PenaltyKickWar')
        }
        if (homeTeamSuffix?.includes('加时赛') || homeTeamSuffix?.includes('加時賽')) {
          gameInfo.raceType = 'jiashi'
          gameInfo.teamSuffix = t('live.OT')
        }
        if (gameInfo.raceType) {
          //  加时赛
          if (gameInfo?.raceType === 'jiashi' && (gameInfo?.re_time === 'HT^^' || gameInfo?.re_time === 'HT')) {
            // 中场休息
            return t('live.HT')
          }
          if (gameInfo?.raceType === 'jiashi' && gameInfo?.re_time && new RegExp('LIVE').test(gameInfo?.re_time)) {
            // 暂停
            return t('live.pause')
          }
          if (gameInfo?.raceType === 'jiashi' && gameInfo?.re_time.indexOf('^') > -1) {
            const [secssion, raceTime] = gameInfo.re_time.split('^')
            // 上and下
            const overTiming = secssion === '1H' ? `上${raceTime}` : `下${raceTime}`
            return `${gameInfo.teamSuffix}<span class='time-h-number'>${overTiming}</span>`
          }
        }
        // 非加时赛
        if (gameInfo?.re_time === 'HT^^' || gameInfo?.re_time === 'HT') {
          // 中场休息
          return t('live.HT')
        } else if (gameInfo?.re_time && new RegExp('LIVE').test(gameInfo?.re_time)) {
          // 暂停
          return t('live.pause')
        } else if (gameInfo?.re_time && gameInfo?.re_time.indexOf('^') > -1) {
          // 比赛进行中
          const [secssion, raceTime] = gameInfo.re_time.split('^')
          let newRaceTimeVal = ''
          if (raceTime.indexOf("'") > -1) {
            const [newRaceTime] = raceTime.split("'")
            newRaceTimeVal = `${newRaceTime}<span class="time-h-dot">'</span>`
          } else {
            newRaceTimeVal = raceTime
          }
          // 上半场and下半场
          return secssion === '1H'
            ? t('home.HNumber1', { number: newRaceTimeVal })
            : //  `上半场<span class='time-h-Up'>${newRaceTimeVal}</span>`
              t('home.HNumber2', { number: newRaceTimeVal })
          // `下半场<span class='time-h-d'>${newRaceTimeVal}</span>`
        } else if (gameInfo?.re_time) {
          // 比赛时间容错
          return gameInfo.re_time
        }
        // 比赛时间容错
        // return '-' + ':' + '-'
        return t('live.pause') // 暂停
      // 网球
      //
      case 'TN':
        if (gameInfo) {
          const tninfo: any = tnStObj(gameInfo)
          if (tninfo?.sciwd) {
            return t('live.pause')
          }
          const { panNum, score1, score2 } = tninfo
          return `${panNum}<span>${score1}${score2}</span>`
        }
        // 原本data显示空
        return t('home.img')
      //
      // 棒
      case 'BS':
        if (!gameInfo) {
          // 原本data显示空
          return t('home.img')
        } else {
          if (gidm && gidm.indexOf('ic') > -1) {
            // 原本data显示空
            return t('home.img')
          }
          const bsScoreObj: any = gameInfo ? bsStObj(gameInfo) : ''
          const inningNum = gameInfo.inningNum
            ? gameInfo?.inningNum
            : bsScoreObj.se_now > 0
            ? bsScoreObj.se_now
            : bsScoreObj.score.num
          const juCount = t('home.set', {
            number: inningNum
          })
          return juCount
        }
      //
      // 篮球
      case 'BK':
        if (gameInfo?.se_now === 'HT' || gameInfo?.se_now === 'ht') {
          // 中场休息
          return t('live.HT')
        }
        if (gameInfo?.se_now.indexOf('OT') > -1 || gameInfo?.se_now.indexOf('ot') > -1) {
          // 加时
          return t('home.addTimeNumber', {
            number: dateFormat(currBkTime.value * 1000, 'mm:ss')
          })
        }
        return seNow && currBkTime
          ? `${BKSection(gameInfo?.se_now)}<span>${dateFormat(currBkTime.value * 1000, 'mm:ss')}</span>`
          : !currBkTime.value && seNow
          ? `${BKSection(gameInfo.se_now)}<span>00:00</span>`
          : ''
      //
      // 美式足球
      case 'BK_AFT':
        if (!gameInfo) {
          // 原本data显示空
          return t('home.img')
        } else {
          if (gameInfo?.se_now === 'HT' || gameInfo?.se_now === 'ht') {
            // 中场休息
            return t('live.HT')
          }
          if (gameInfo?.se_now.indexOf('OT') > -1 || gameInfo?.se_now.indexOf('ot') > -1) {
            // 加时
            return t('home.addTimeNumber', {
              number: dateFormat(gameInfo.t_count * 1000, 'mm:ss')
            })
          }
          const seNow1 = gameInfo && gameInfo.se_now
          const tCount1 = gameInfo && +gameInfo.t_count
          return seNow1 && tCount1
            ? `${BKSection(gameInfo.se_now)}<span>${dateFormat(gameInfo.t_count * 1000, 'mm:ss')}</span>`
            : ''
        }
      //
      // 乒乓球
      case 'OP_TN':
        if (!gameInfo) {
          // 原本data显示空
          return t('home.img')
        } else {
          const newSeNow: any = gameInfo?.se_now.replace(/[^0-9]/gi, '') || ''
          return t('home.set', {
            number: newSeNow
          })
        }
      //
      // 排球
      case 'OP_VB': // 排球
        return Obj
          ? t('home.set', {
              number: Obj.scorePan.num
            })
          : ''
      //
      // 电竞
      case 'OP_DJ': // 电竞
        return t('home.img')
      //
      // 冰球
      case 'OP_IH': // 冰球
        return t('home.img')
    }
    // 原本data显示空
    return t('home.img')
  } else {
    // 原本data显示空
    return t('home.img')
  }
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
  },
  tabType: {
    type: String,
    default: ''
  },
  playTitleToggle: {
    type: Boolean,
    default: function () {
      return true
    }
  },
  ifMatchLive: {
    type: Boolean,
    default: function () {
      return false
    }
  }
})

const showSportsIcon = (item: any) => {
  const { live, live_status, merchantAnchor, merchantStreamNa } = item

  if (
    live_status * 1 !== 1 ||
    (merchantAnchor && merchantAnchor?.length && merchantStreamNa && merchantStreamNa?.length)
  ) {
    return true
  }
  return false
}

const goToDetail = (item: any) => {
  router.push(`/match/${item.gidm}/bets`)
}
const betMoreShow = () => {
  store.dispatch('betting/setMoreShow', { status: true, moreParams: props.sendParams })
  store.dispatch('user/getLocationHeight', false)
}
</script>
<style lang="scss" scoped>
.ball-img {
  font-size: 28px;
  color: var(--color-text-3);
  font-weight: 500;
  margin-right: 5px;
}

.live-img {
  font-size: 28px;
  margin-right: 5px;
}
</style>
