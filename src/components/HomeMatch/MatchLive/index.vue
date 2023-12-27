<template>
  <div class="homeMatchHandicap">
    <div class="home-tabs-play">
      <TimeView :time-send-params="sendParams" />
    </div>
    <div class="home-match">
      <div class="up-match-group__body">
        <div class="up-match">
          <!--  -->
          <div class="match-info-live__header border-bottom">
            <div class="up-match-league">
              <div class="text">{{ getLeagueShortName(sendParams) }}</div>
            </div>
            <div class="flex-cross-center">
              <div class="up-match-time">
                <!-- <SportsIcon :icon-src="'live'" /> -->
                <div class="up-match-time-html" v-html="showRBTime(sendParams)"></div>
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
                <div class="value">
                  {{ getScore(sendParams,'H') }}
                </div>
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
                <div class="value">
                  {{ getScore(sendParams,'C') }}
                </div>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="up-match__body">
            <div v-if="sendParams.RE" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
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
                    <Handicap :send-params="getHandicap('RE',sendParams)" :type="'RB'" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="sendParams.ROU" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  {{ $t('home.OUInfo') }}
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('ROU',sendParams)" :type="'RB'" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="sendParams.RM" class="match-betting-item">
              <div class="match-betting-item__title">
                <div class="flex-cross-center">
                  {{ $t('home.MInfo') }}
                </div>
              </div>
              <div class="match-betting-item__content">
                <div class="betting-select">
                  <div class="betting-select__list">
                    <Handicap :send-params="getHandicap('RM',sendParams)" :type="'RB'" />
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
import { ref } from 'vue'
import { tnStObj, bsStObj, opScoreObj } from '@/utils/home/gameInfo'
import { dateFormat } from '@/utils/date'
import { getScore } from '@/utils/home/getScore'
import { getHandicap } from '@/utils/home/getHandicap'
// components
import Handicap from '@/components/HomeMatch/public/Handicap/index.vue'
import TimeView from '@/components/HomeMatch/public/time/index.vue'
// import SportsIcon from '@/components/Button/SportsIcon/index.vue'

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

//
const sectionMap:any = {
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
const BKSection = (section:any) => {
  const sectionToLowerCase = section.toLowerCase()
  return sectionMap[sectionToLowerCase]
}
const currBkTime:any = ref('')
const showRBTime = (raceinfo:any = {}) => {
  const { showtype, gameType, gameInfo, showType, homeTeamSuffix, gidm } = raceinfo
  const Obj = opScoreObj(gameInfo, 5)
  const seNow:any = gameInfo && gameInfo.se_now
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
            ? t('home.1HNumber', { number: newRaceTimeVal })
            //  `上半场<span class='time-h-Up'>${newRaceTimeVal}</span>`
            : t('home.2HNumber', { number: newRaceTimeVal })
          // `下半场<span class='time-h-d'>${newRaceTimeVal}</span>`
        } else if (gameInfo?.re_time) {
          // 比赛时间容错
          return gameInfo.re_time
        }
        // 比赛时间容错
        return '-' + ':' + '-'
      // 网球
      //
      case 'TN':
        if (gameInfo) {
          const tninfo:any = tnStObj(gameInfo)
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
          const bsScoreObj:any = gameInfo ? bsStObj(gameInfo) : ''
          const inningNum = gameInfo.inningNum ? gameInfo?.inningNum
            : bsScoreObj.se_now > 0 ? bsScoreObj.se_now : bsScoreObj.score.num
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
        return seNow && currBkTime ? `${BKSection(gameInfo?.se_now)}<span>${dateFormat(currBkTime.value * 1000, 'mm:ss')}</span>` : !currBkTime.value && seNow
          ? `${BKSection(gameInfo.se_now)}<span>00:00</span>` : ''
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
          return seNow1 && tCount1 ? `${BKSection(gameInfo.se_now)}<span>${dateFormat(gameInfo.t_count * 1000, 'mm:ss')}</span>` : ''
        }
      //
      // 乒乓球
      case 'OP_TN':
        if (!gameInfo) {
          // 原本data显示空
          return t('home.img')
        } else {
          const newSeNow:any = gameInfo?.se_now.replace(/[^0-9]/gi, '') || ''
          return newSeNow
        }
      //
      // 排球
      case 'OP_VB': // 排球
        return Obj ? t('home.set', {
          number: Obj.scorePan.num
        }) : ''
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
  }
})
</script>
