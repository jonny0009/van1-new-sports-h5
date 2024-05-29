import { ref, reactive, queuePostFlushCb } from 'vue'
import i18n from '@/lang/index'
import { dateFormat } from '@/utils/date'
import { getScore } from '@/utils/home/getScore'
import { tnStObj, bsStObj, opScoreObj } from '@/utils/home/gameInfo'

const { t } = i18n.global

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

export function useMatch() {
  interface TimeDataItem {
    currTime: number;
    seNow: string;
    timer: any;
  }
  const timeData = reactive<{ [key: string]: TimeDataItem }> ({
    FT: {
      currTime: 0,
      seNow: '',
      timer: null
    },
    BK: {
      currTime: 0,
      seNow: '',
      timer: null
    }
  })
  stopTimer()
  const BKSection = (section: any) => {
    return sectionMap[section]
  }
  function showRBTime(raceinfo: any = {}) {
    const { showtype, gameType, gameInfo, showType, homeTeamSuffix, gidm } = raceinfo
    const Obj = opScoreObj(gameInfo, 5)
    const seNow: any = gameInfo && gameInfo.se_now
    if (showtype === 'RB' || showType === 'RB') {
      queuePostFlushCb(() => {
        // 在此处放置需要异步执行的代码
        showSportTime(raceinfo)
      })
      switch (gameType) {
        // 足球
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
            return t('live.HT')
          } else if (gameInfo?.re_time && new RegExp('LIVE').test(gameInfo?.re_time)) {
            // 暂停
            return t('live.pause')
          } else if (gameInfo?.re_time && gameInfo?.re_time.indexOf('^') > -1) {
            // 比赛进行中
            const [secssion, raceTime] = gameInfo.re_time.split('^')
            let newRaceTimeVal = ''
            if (raceTime.indexOf("'") > -1) {
              newRaceTimeVal = `${convertToMinAndSec(timeData.FT.currTime)}<span class="time-h-dot">'</span>`
            } else {
              newRaceTimeVal = `${convertToMinAndSec(timeData.FT.currTime)}`
            }
            // 上半场and下半场
            return secssion === '1H'
              ? `${t('live.H1')}&nbsp;<span class='time-h-Up'>${newRaceTimeVal}</span>`
              : `${t('live.H2')}&nbsp;<span class='time-h-d'>${newRaceTimeVal}</span>`
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
            return `加时<span>${dateFormat(timeData.BK.currTime * 1000, 'mm:ss')}</span>`
          }
          return seNow && timeData.BK.currTime
            ? `${BKSection(gameInfo?.se_now)}&nbsp;<span>${dateFormat(timeData.BK.currTime * 1000, 'mm:ss')}</span>`
            : !timeData.BK.currTime && seNow
            ? `${BKSection(gameInfo.se_now)}&nbsp;<span>00:00</span>`
            : ''
        //
        // 美式足球
        case 'BK_AFT':
          if (!gameInfo) {
            // 原本data显示空
            return t('live.notstarted')
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
              ? `${BKSection(gameInfo.se_now)}&nbsp;<span>${dateFormat(gameInfo.t_count * 1000, 'mm:ss')}</span>`
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
      stopTimer()
      // 原本data显示空
      return t('live.notstarted')
    }
  }

  function convertToMinAndSec(seconds: number) {
    if (!seconds) return
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60

    return `${min}:${String(sec).padStart(2, '0')}`
  }

  interface RaceInfo {
    gameType?: string
    gameInfo?: any
  }

  function showSportTime(raceinfo: RaceInfo = {}) {
    const { gameType, gameInfo } = raceinfo
    const validGameTypes = ['BK', 'FT']
    if (!gameInfo || !gameType || !validGameTypes.includes(gameType)) {
      stopTimer()
      return
    }
    if (!+gameInfo.t_count) {
      timeData[gameType].currTime = 0
      stopTimer(gameType)
      return
    }
    if (timeData[gameType].seNow !== gameInfo.se_now) {
      timeData[gameType].seNow = gameInfo.se_now
      timeData[gameType].currTime = +gameInfo.t_count
    }
    if (timeData[gameType].currTime >= +gameInfo.t_count && timeData[gameType].currTime > 0) {
      timeData[gameType].currTime = +gameInfo.t_count
      stopTimer(gameType)
      timeData[gameType].timer = setInterval(() => {
        timeData[gameType].currTime = timeData[gameType].currTime - 1
        if (timeData[gameType].currTime <= 0) {
          timeData[gameType].currTime = 0
          stopTimer(gameType)
        }
      }, 1000)
    }
  }

  // 清除定时器
  function stopTimer(type?: string) {
    if (type) {
      clearInterval(timeData[type].timer)
      timeData[type].timer = null
    }
    else {
      for (const key in timeData) {
        if (Object.prototype.hasOwnProperty.call(timeData, key)) {
          const { timer } = timeData[key]
          clearInterval(timer)
          timeData[key].timer = null
        }
      }
    }
  }

  return { BKSection, showRBTime, getScore }
}
