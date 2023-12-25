<template>
  <div class="item">
    <div class="item-photo">
      <van-image :src="item.cover || imgCover">
        <template v-slot:error>
          <img :src="imgCover" alt="" />
        </template>
      </van-image>
      <div class="state" v-if="item.showType == 'RB'">{{ $t('live.hotNow') }}</div>
      <div class="footer">
        <span v-if="item.showType == 'RB'" v-html="showRBTime(item)"></span>
        <span v-else>{{ formatToDateTime(item.gameDate, 'MM-DD HH:mm') }}</span>
      </div>
    </div>

    <div class="item-title">
      <SvgIcon :name="leagueIcon" />
      <span>{{ item.leagueName }}</span>
    </div>

    <div class="item-team">
      <div class="cell">
        <div class="head">
          <img v-img="item.homeLogo" :type="2" alt="" />
          <span>{{ item.homeTeam }}</span>
        </div>
        <div class="score">
          <span>{{ gameInfo.sc_game_H || gameInfo.sc_FT_H }}</span>
        </div>
      </div>
      <div class="cell">
        <div class="head">
          <img v-img="item.awayLogo" :type="2" alt="" />
          <span>{{ item.awayTeam }}</span>
        </div>
        <div class="score">
          <span>{{ gameInfo.sc_game_A || gameInfo.sc_FT_C || gameInfo.sc_FT_A }}</span>
        </div>
      </div>
    </div>

    <div class="item-desc">
      <div class="name">{{ item.leagueShortName }}</div>
      <div class="hots">
        <img src="@/assets/images/live/s_hot.png" alt="" />
        <span>{{ watchNumText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ImageSource } from '@/config'
import { tnStObj, bsStObj, opScoreObj } from '@/utils/home/gameInfo'
import { formatToDateTime, dateFormat } from '@/utils/date'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

const gameInfo = computed(() => props.item?.gameInfo)
const imgCover = computed(() => {
  const item = props.item
  const type: any = {
    FT: 'FE/common/live/img_video_bg_FT.jpg',
    BK: 'FE/common/live/img_video_bg_BK.jpg',
    OP_VB: 'FE/common/live/img_video_bg_BK.jpg'
  }
  return ImageSource + type[item.gameType]
})
const watchNumText = computed(() => {
  const num = props.item.watchTotal.toLocaleString()
  if (props.item.showType == 'RB') {
    return t('live.xLooks', { num })
  }
  return t('live.xReserve', { num })
})
const leagueIcon = computed(() => {
  const icon: any = {
    FT: 'live-football',
    BK: 'live-basketball',
    TN: 'live-tennisball',
    OP_BM: 'live-badminton'
  }
  return icon[props.item.gameType]
})

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
  return sectionMap[section]
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
          return t('live.inprogress')
        }
        if (homeTeamSuffix?.includes('点球') || homeTeamSuffix?.includes('點球')) {
          gameInfo.raceType = 'dianqiu'
          gameInfo.teamSuffix = '点球大战'
        }
        if (homeTeamSuffix?.includes('加时赛') || homeTeamSuffix?.includes('加時賽')) {
          gameInfo.raceType = 'jiashi'
          gameInfo.teamSuffix = '加时'
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
          return '中场休息'
        } else if (gameInfo?.re_time && new RegExp('LIVE').test(gameInfo?.re_time)) {
          // 暂停
          return '暂停'
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
            ? `${t('live.H1')}<span class='time-h-Up'>${newRaceTimeVal}</span>`
            : `${t('live.H2')}<span class='time-h-d'>${newRaceTimeVal}</span>`
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
          const tninfo: any = tnStObj(gameInfo)
          if (tninfo?.sciwd) {
            return t('live.pause')
          }
          const { panNum, score1, score2 } = tninfo
          return `${panNum}<span>${score1}${score2}</span>`
        }
        // 原本data显示空
        return t('live.inprogress')
      //
      // 棒
      case 'BS':
        if (!gameInfo) {
          // 原本data显示空
          return t('live.inprogress')
        } else {
          if (gidm && gidm.indexOf('ic') > -1) {
            // 原本data显示空
            return t('live.inprogress')
          }
          const bsScoreObj: any = gameInfo ? bsStObj(gameInfo) : ''
          const inningNum = gameInfo.inningNum
            ? gameInfo?.inningNum
            : bsScoreObj.se_now > 0
            ? bsScoreObj.se_now
            : bsScoreObj.score.num
          const juCount = `<span class="">第${inningNum}局</span>`
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
          return `加时<span>${dateFormat(currBkTime.value * 1000, 'mm:ss')}</span>`
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
          return t('live.inprogress')
        } else {
          if (gameInfo?.se_now === 'HT' || gameInfo?.se_now === 'ht') {
            // 中场休息
            return t('live.inprogress')
          }
          if (gameInfo?.se_now.indexOf('OT') > -1 || gameInfo?.se_now.indexOf('ot') > -1) {
            // 加时
            return `加时 <span>${dateFormat(gameInfo.t_count * 1000, 'mm:ss')}</span>`
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
          return t('live.inprogress')
        } else {
          const newSeNow: any = gameInfo?.se_now.replace(/[^0-9]/gi, '') || ''
          return newSeNow
        }
      //
      // 排球
      case 'OP_VB': // 排球
        return Obj ? `第${Obj.scorePan.num}局` : ''
      //
      // 电竞
      case 'OP_DJ': // 电竞
        return t('live.inprogress')
      //
      // 冰球
      case 'OP_IH': // 冰球
        return t('live.inprogress')
    }
    // 原本data显示空
    return t('live.inprogress')
  } else {
    // 原本data显示空
    return t('live.inprogress')
  }
}
</script>

<style lang="scss" scoped>
.item {
  width: 330px;
  height: 440px;
  background: #eff1f2;
  border-radius: 10px;
  overflow: hidden;
  &-photo {
    position: relative;
    width: 100%;
    height: 220px;
    .van-image {
      width: 100%;
      height: 100%;
    }
    .footer {
      color: #fff;
      background: rgba(0, 0, 0, 0.5);
      font-size: 24px;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 4px 10px;
    }
    .state {
      position: absolute;
      left: 0;
      top: 0;
      min-width: 84px;
      height: 34px;
      padding: 0 10px;
      color: #fff;
      font-size: 24px;
      background-image: linear-gradient(-68deg, #d700ff 0%, #af00ff 100%);
      border-radius: 10px 0px 10px 0px;
    }
  }

  &-title {
    display: flex;
    align-items: center;
    font-size: 24px;
    padding: 14px 16px;
    > img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    > span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      zoom: 0.95;
    }
    .svg-icon {
      color: #999;
      margin-right: 8px;
    }
  }

  &-team {
    color: #1f2630;
    font-size: 24px;
    font-weight: 800;
    padding: 0 8px;
    .cell {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
    .head {
      display: flex;
      align-items: center;
      > img {
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }
      > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 220px;
      }
    }
    .score {
      color: #546371;
      font-size: 30px;
      font-weight: 600;
    }
  }

  &-desc {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #1f2630;
    font-size: 24px;
    font-weight: 800;
    padding: 0 8px;
    .name {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-width: 140px;
    }
    .hots {
      display: flex;
      align-items: center;
      max-width: 280px;
      > img {
        width: 20px;
        margin-right: 8px;
      }
      > span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 180px;
      }
    }
  }
}
</style>
