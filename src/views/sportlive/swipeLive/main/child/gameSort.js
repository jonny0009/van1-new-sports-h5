import { createBetItem, config, lib } from 'xcsport-lib'
import store from '@/store'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const getSourceCompany = (gidm = '') => gidm.split('_')[0]

const { halfPlayTypeArray } = config
// 缓存的双线玩法集合
// const oddsTypeChangeArraymap = loadFromStorage('doubleLineInfo')
const { getGamePlayData } = lib
// 波胆分类
export const pdSort = (arr, type) => {
  const bigArr = []
  const simArr = []
  const eqlArr = []
  const otherH = [] //  主场其他
  const otherC = [] //  客队其他
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i][type]) {
      return arr
    }
    const matchStr = arr[i][type].match(/[\d][\d]*/g)
    if (matchStr) {
      const [a, b] = matchStr
      arr[i].ratio = a + ' : ' + b
      if (parseInt(a) < parseInt(b)) {
        simArr.push(arr[i])
      } else if (parseInt(a) === parseInt(b)) {
        eqlArr.push(arr[i])
      } else {
        bigArr.push(arr[i])
      }
    } else {
      arr[i].ratio = '其他'
      if (arr[i][type] === 'OVC') {
        otherC.push(arr[i])
      } else {
        otherH.push(arr[i])
      }
    }
  }
  const [bigArr1, eqlArr1, simArr1] = [bigArr, eqlArr, simArr].map(
    (item, index) => {
      if (index === 0) {
        return item
          .sort((a, b) => {
            const array1 = a.ratioType.match(/[\d][\d]*/g)
            const array2 = b.ratioType.match(/[\d][\d]*/g)
            return array1[1] - array2[1]
          })
          .sort((a, b) => {
            const array1 = a.ratioType.match(/[\d][\d]*/g)
            const array2 = b.ratioType.match(/[\d][\d]*/g)
            return array1[0] - array2[0]
          })
      }
      return item
        .sort((a, b) => {
          const array1 = a.ratioType.match(/[\d][\d]*/g)
          const array2 = b.ratioType.match(/[\d][\d]*/g)
          return array1[0] - array2[0]
        })
        .sort((a, b) => {
          const array1 = a.ratioType.match(/[\d][\d]*/g)
          const array2 = b.ratioType.match(/[\d][\d]*/g)
          return array1[1] - array2[1]
        })
    }
  )
  return [bigArr1.concat(otherH), eqlArr1, simArr1.concat(otherC)]
}
// targerArray数组按照ruleArray数组排序
export const arraySort = (targerArray = [], ruleArray, type = 'playType') => {
  if (ruleArray) {
    return targerArray
      .slice()
      .sort((a, b) => ruleArray.indexOf(a[type]) - ruleArray.indexOf(b[type]))
  }
  return targerArray
}

// 投注项数组排序
export const ratioDataSort = (
  playData,
  {
    homeTeam,
    awayTeam,
    leagueId,
    leagueName,
    gidm,
    hgid,
    gameId,
    lottoNum,
    showtype,
    gameType,
    gameTypeSon,
    playType,
    strong,
    hstrong,
    session,
    suffix,
    FTsuffix,
    sgidm,
    type = 1,
    gameDate,
    sw,
    pgidm,
    homeTeamSuffix,
    sourceCompany,
    combo
  }
) => {
  const { specifiers, rt } = playData
  let { ratioData } = playData
  const typeArrs = [undefined, 'sort', 'sort']
  // 新增体育项兼容
  const ratioTypeData = getGamePlayData({ gameType, gameTypeSon, playType })
  ratioData = arraySort(ratioData, ratioTypeData[typeArrs[type]], 'ratioType')
  for (let i = 0; i < ratioData.length; i++) {
    ratioData[i] = ratioFormat({
      gameId,
      ...ratioData[i],
      homeTeam,
      awayTeam,
      leagueId,
      leagueName,
      gidm,
      hgid,
      lottoNum,
      showtype,
      gameType,
      gameTypeSon,
      playType,
      strong,
      hstrong,
      session,
      suffix,
      sgidm,
      type,
      specifiers,
      gameDate,
      sw,
      rt,
      pgidm,
      sourceCompany,
      homeTeamSuffix,
      combo
    })
  }
  playData.gameType = gameType
  playData.gameTypeSon = gameTypeSon
  playData.col = ratioTypeData.col
  playData.ratioData = ratioData
  playData.session = session
  playData.FTsuffix = homeTeamSuffix
  return { ...playData }
}

// 单个投注项格式化
export const ratioFormat = ratioDetail => {
  const {
    homeTeam,
    awayTeam,
    leagueId,
    leagueName,
    gidm,
    hgid,
    gameId,
    lottoNum,
    showtype,
    gameType,
    playType,
    session,
    suffix,
    sgidm,
    ior,
    id,
    oddfType,
    type = 1,
    gameDate,
    sw,
    optionId,
    pgidm,
    showType,
    ratio1,
    sourceCompany,
    homeTeamSuffix,
    combo
  } = ratioDetail
  let { specifiers } = ratioDetail
  // 判断是否是冠军杯
  if (showtype === 'CP' || playType === 'CHAMPION') {
    ratioDetail.isChampion = true
  }
  // // 新增体育项兼容
  // if (oddfType === 'E' && isOddsTypeChange({ gameType, playType })) {
  //   ior -= 1
  // }
  // const formatType = store.state.app.aiFormat === 'F' ? 2 : 1
  // betItem/ratioName 一个意思
  let ratioName = ''
  try {
    ratioName = createBetItem({ ...ratioDetail, type }, 2)
    sleep(10)
  } catch (error) {
    console.error(error)
  }
  // 雷达特殊变量
  specifiers = specifiers || {}
  if (!(specifiers instanceof Object)) {
    try {
      specifiers = JSON.parse(specifiers)
    } catch (e) {
      specifiers = {}
    }
  }
  // 投注项投注信息
  let matchGameId = gameId
  // 上半场玩法获取hgid
  if (halfPlayTypeArray.includes(playType) && hgid) {
    matchGameId = hgid
  }

  if (
    ratioDetail.ratioType === 'W3H' ||
    ratioDetail.ratioType === 'RMH' ||
    ratioDetail.ratioType === 'HRMH' ||
    ratioDetail.ratioType === 'MH' ||
    ratioDetail.ratioType === 'HMH'
  ) {
    ratioDetail.name = '1'
  }
  if (
    ratioDetail.ratioType === 'W3N' ||
    ratioDetail.ratioType === 'MN' ||
    ratioDetail.ratioType === 'HMN' ||
    ratioDetail.ratioType === 'RMN' ||
    ratioDetail.ratioType === 'HRMN'
  ) {
    ratioDetail.name = 'x'
  }
  if (
    ratioDetail.ratioType === 'W3C' ||
    ratioDetail.ratioType === 'MC' ||
    ratioDetail.ratioType === 'HMC' ||
    ratioDetail.ratioType === 'RMC' ||
    ratioDetail.ratioType === 'HRMC'
  ) {
    ratioDetail.name = '2'
  }
  // 赔率
  const iorValue = ior * 1
  // 原始的赔率
  ratioDetail.orgIor = ior
  ratioDetail.oddfType = oddfType
  ratioDetail.ior = iorValue
  ratioDetail.vior = iorValue
  const orgGidm = gidm
  // 投注所需值
  ratioDetail.homeTeam = homeTeam
  ratioDetail.lottoNum = lottoNum
  ratioDetail.awayTeam = awayTeam
  ratioDetail.leagueId = leagueId
  ratioDetail.leagueName = leagueName
  ratioDetail.orgGidm = orgGidm
  ratioDetail.gidm = gidm
  ratioDetail.gameDate = gameDate
  ratioDetail.gameId = matchGameId
  ratioDetail.showType = showType || showtype
  ratioDetail.showtype = showType || showtype
  ratioDetail.gameType = gameType
  ratioDetail.playType = playType
  ratioDetail.session = session
  ratioDetail.suffix = suffix
  ratioDetail.homeTeamSuffix = homeTeamSuffix
  ratioDetail.sgidm = sgidm
  ratioDetail.ratioName = ratioName
  ratioDetail.specifiers = specifiers
  ratioDetail.optionId = optionId || id
  ratioDetail.sw = sw
  ratioDetail.pgidm = pgidm
  ratioDetail.betItem = ratioDetail.betItem || ''
  ratioDetail.ratio1 = ratio1
  ratioDetail.sourceCompany = sourceCompany || getSourceCompany(gidm)
  ratioDetail.combo = combo
  // 唯一id
  ratioDetail.playOnlyId = betNuiqueKeyStr(ratioDetail)
  // 判断是否属于在欧洲盘，并且属于可欧洲玩法的 赔率+1
  const isEuropePlay = isOddsTypeChange({
    gameType,
    playType,
    sourceCompany: ratioDetail.sourceCompany
  })
  ratioDetail.isEuropePlay = isEuropePlay

  return { ...ratioDetail }
}
// 获取比赛玩法的特殊字符
export const getPlayTypeStr = playTypeData => {
  let { specifiers } = playTypeData
  if (!(specifiers instanceof Object)) {
    try {
      specifiers = JSON.parse(specifiers)
    } catch (e) {
      specifiers = {}
    }
  }
  playTypeData = Object.assign(playTypeData, specifiers)
  const { gameType, gameTypeSon, playType, session = '' } = playTypeData
  let playTypeStr = playType
  // 判断是否为电竞玩法
  if (gameType === 'OP_DJ' && gameTypeSon) {
    playTypeStr = `${gameType}_${gameTypeSon}_${playTypeStr}`
  } else {
    playTypeStr = `${gameType}_${playTypeStr}${session}`
  }
  // playTypeStr = `wf.${playTypeStr}`
  // const playTypeMap = window.$playGroupJSON || {}
  let playTypeMap = {}
  if (window.wf) {
    playTypeMap = window.wf
  }
  let playTypeName = playTypeMap[playTypeStr] || gameType + '-' + playType
  const specifiersMap = {}
  if (/{(.*?)}/gi.test(playTypeName)) {
    playTypeName = playTypeName.replace(/{(.*?)}/g, (match, key) => {
      const specialKey = key.trim()
      specifiersMap[specialKey] = playTypeData[specialKey]
    })
  }
  return specifiersMap
}
/**
 * @description: 把数组根据赛事type条件组合
 * @param {type}  arr games, type 排序规则
 * @return:  arr [{playType,list:[]}]
 */

export const mergePlayTypeSort = (arr, type = 'playType') => {
  const newArray = JSON.parse(JSON.stringify(arr))
  return newArray.reduce((pre, cur) => {
    const clone = pre.concat()
    const rt = cur.rt * 1
    const index = clone.findIndex(m => m[type] === cur[type])
    if (index > -1 && (!rt || cur[type] === 'GSP')) {
      const specifiersMap = getPlayTypeStr(cur)
      const specifiersMapKeys = Object.keys(specifiersMap)
      // 判断相同玩法,特殊值不相同的,区分出来
      if (specifiersMapKeys.length) {
        let isSame = false
        let isSameIndex = ''
        const samePlays = clone.map((play, index) => {
          if (play[type] === cur[type]) {
            return index
          }
          return false
        })
        samePlays.map(item => {
          if (typeof item === 'boolean') {
            return false
          }
          const firtPlayData = clone[item].list[0]
          isSameIndex = item
          isSame = specifiersMapKeys.every(key => {
            return specifiersMap[key] === firtPlayData.specifiers[key]
          })
        })
        if (isSame) {
          clone[isSameIndex].list.push(cur)
        } else {
          clone.push({
            [type]: cur[type],
            list: [cur]
          })
        }
      } else {
        clone[index].list.push(cur)
      }
    } else {
      clone.push({
        [type]: cur[type],
        list: [cur]
      })
    }
    return clone
  }, [])
}
// 获取投注项的特殊字符
export const getPlayTypeSpecialKey = ratioDetail => {
  const { showtype, gameType, gameTypeSon, playType, ratioType } = ratioDetail
  // 判断是否是冠军杯
  if (showtype === 'CP' || playType === 'CHAMPION') {
    return false
  }
  // 新增体育项兼容
  const ratioTypeData = getGamePlayData({ gameType, gameTypeSon, playType })
  if (!ratioTypeData) {
    console.error('找不到该玩法:', gameType, gameTypeSon, playType)
    return false
  }
  let ratioName = ratioTypeData.text[ratioType]
  const specifiersMap = []
  if (!ratioName) {
    return false
  }
  // 替换花括号的值
  if (/{(.*?)}/gi.test(ratioName)) {
    ratioName = ratioName.replace(/{(.*?)}/g, (match, key) => {
      const specialKey = key.trim()
      specifiersMap.push(specialKey)
    })
  }
  return specifiersMap
}
// 判断是否需要在欧洲盘赔率加1的玩法
export const isOddsTypeChange = ({ playType, gameType, sourceCompany }) => {
  let newPlay = playType
  const specifiersPlay = [
    '_conner',
    '_card',
    '_OT',
    '_PS',
    '_promote',
    '_champion'
  ]
  specifiersPlay.map(item => {
    const lowerPlayStr = playType.toLowerCase()
    const lowerItemStr = item.toLowerCase()
    if (lowerPlayStr.includes(lowerItemStr)) {
      const lowerPlay = lowerPlayStr.replace(new RegExp(lowerItemStr, 'g'), '')
      newPlay = lowerPlay.toUpperCase()
    }
  })
  let isSecifiers = false
  const dataSourceMap = {
    ib: 'ibo',
    sd: 'sd',
    ic: 'bti'
  }

  const oddsTypeChangeArraymap = store.state.app.doubleLineInfo
  const oddsTypeChangeArrayNew =
    (store.state.app && oddsTypeChangeArraymap[dataSourceMap[sourceCompany]]) ||
    null
  if (oddsTypeChangeArrayNew) {
    isSecifiers = oddsTypeChangeArrayNew.includes(playType)
    return isSecifiers && !(newPlay === 'PR' && gameType === 'BK')
  }

  // else {
  //   if (window.sportPlatformId === 1) {
  //     isSecifiers = oddsTypeChangeArray && oddsTypeChangeArray.includes(newPlay) && AINoChangeArray.includes(newPlay)
  //   } else {
  //     isSecifiers = oddsTypeChangeArray && oddsTypeChangeArray.includes(newPlay) && BINoChangeArray.includes(newPlay)
  //   }
  //   return oddsTypeChangeArray && oddsTypeChangeArray.includes(newPlay) && !isSecifiers &&
  //     !(newPlay === 'PR' && gameType === 'BK')
  // }
}

// suffix的换算
export const suffixConvert = homeTeamSuffix => {
  let suffix = ''
  if (homeTeamSuffix) {
    if (homeTeamSuffix.includes('角球')) {
      suffix = '_conner'
    } else if (
      homeTeamSuffix.includes('罚牌') ||
      homeTeamSuffix.includes('罰牌')
    ) {
      suffix = '_card'
    } else if (
      homeTeamSuffix.includes('加时赛') ||
      homeTeamSuffix.includes('加時賽')
    ) {
      suffix = '_OT'
    } else if (
      homeTeamSuffix.includes('点球') ||
      homeTeamSuffix.includes('點球')
    ) {
      suffix = '_PS'
    } else if (
      homeTeamSuffix.includes('会晋级') ||
      homeTeamSuffix.includes('會晉級')
    ) {
      suffix = '_promote'
    } else if (
      homeTeamSuffix.includes('冠军') ||
      homeTeamSuffix.includes('冠軍')
    ) {
      suffix = '_champion'
    }
    if (
      homeTeamSuffix.includes('加时赛') ||
      homeTeamSuffix.includes('加時賽')
    ) {
      if (suffix === '_conner' || suffix === '_card') {
        suffix = suffix.replace('_', '') + '_OT'
      }
    }
  }
  return suffix
}

export const betNuiqueKeyStr = betObj => {
  const { sgidm, gameId, playType, ratioType } = betObj
  let { gidm } = betObj
  // 投注使用子比赛gidm  gidm + '_' + gameId + '_' + playType + '_' + ratioType,
  if (sgidm) {
    gidm = sgidm
  }
  return gidm + '_' + gameId + '_' + '_' + playType + '_' + ratioType
}
