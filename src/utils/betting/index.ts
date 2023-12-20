import store from '@/store'
import createBetItem from 'xcsport-lib'
import { points } from '../index'

// 投注参数过滤保留
export const betParams = (bet: any) => {
  const newBet = JSON.parse(JSON.stringify(bet))
  const { sgidm, sGidm, playType, showtype, ratio, ratio1 } = newBet
  let { gidm } = newBet
  if (sgidm) {
    gidm = sgidm
    newBet.gidm = gidm
  }
  if (sGidm) {
    gidm = sGidm
    newBet.gidm = sGidm
  }
  // 判断是否是冠军杯
  if (showtype === 'CP' || playType === 'CHAMPION') {
    newBet.isChampion = true
    newBet.ratio1 = ratio || ratio1
  }
  newBet.type = 1
  newBet.betItem = createBetItem(newBet, 2)
  return newBet
}

// 筛选单注点水参数
export const hitParams = (bets: any) => {
  // 当前选择的盘口 欧洲盘/香港盘
  const { handicapType } = store.state.user.userConfig || {}
  const oddfType = handicapType
  // 点水集合
  const betList = bets.map((bet: any) => {
    let gidm = bet.gidm
    const {
      sgidm,
      gameId,
      gameType,
      playType,
      ratioType,
      optionId,
      ratio,
      betItem,
      sid,
      homeTeamSuffix,
      systemId,
      score,
      fOrderId,
      orderNo,
      session,
      ratioKey
    } = bet

    if (sgidm) {
      gidm = sgidm
    }
    return {
      gidm,
      gameId,
      gameType,
      playType,
      ratioType,
      score: score || '0:0',
      optionId,
      ratio,
      betItem: betItem || ratio,
      fOrderId: sid || fOrderId || orderNo,
      homeTeamSuffix,
      systemId,
      ratioKey,
      session
    }
  })

  return {
    betList,
    oddfType,
    sourceType: true
  }
}
// 筛选投注参数
export const buyParams = (markets: any, s: any, t: any) => {
  const { userConfig } = store.state.user || {}
  const { handicapType } = userConfig || {}
  const autoRatio = userConfig === 1 ? 'S' : 'N'
  // 当前选择的盘口 欧洲盘/香港盘
  const oddfType = !handicapType ? 'H' : handicapType
  const betSubList: Array<any> = []
  markets.map((bet: any) => {
    let gidm = bet.gidm
    const {
      gameId,
      playType,
      ratioType,
      ratioIpo,
      ratio,
      hitIor,
      gold,
      concede,
      leagueId,
      betItem,
      sgidm,
      sGidm,
      specifiers,
      championType,
      optionId,
      pgidm,
      strong,
      hstrong,
      anchorId,
      fOrderId,
      orderNo,
      roomNo,
      sid,
      shareType,
      eoIor,
      session,
      marketId,
      showType,
      errorCode,
      ior,
      goldMax,
      goldMin
    } = bet
    if (sgidm && gidm.indexOf('ic') === -1) {
      gidm = sgidm
    }
    if (sGidm && gidm.indexOf('ic') === -1) {
      gidm = sGidm
    }
    if (gold && !errorCode && ior * 1 > 0 && goldMax * 1 > 0 && goldMin * 1 > 0) {
      betSubList.push({
        gidm,
        gameId,
        playType,
        gold: gold > goldMax ? goldMax : gold, // 自定义金额大于最大值时,取最大值进行投注;
        ratioType,
        ratioIpo: ratioIpo || '',
        ratio,
        ior: points(hitIor),
        concede,
        leagueId: leagueId || '',
        betItem,
        specifiers: JSON.stringify(specifiers),
        championType,
        score: '0:0',
        optionId,
        pgidm,
        strong: strong || hstrong,
        anchorId: anchorId || '',
        fOrderId: sid || fOrderId || orderNo,
        shareType,
        roomNo,
        eoIor,
        session,
        marketId,
        showType
      })
    }
  })

  return {
    s,
    t,
    oddfType,
    betSubList,
    autoRatio,
    betType: 1,
    isCredit: 'N',
    orderSource: 'AI',
    autoOdd: 'N'
  }
}
// 筛选串关点水参数
export const combosHitParams = (combosBets: any) => {
  const betList = combosBets.map((bet: any) => {
    const { gidm, gameId, gameType, playType, ratioType, ratio, ior, optionId, betItem, pgidm, showType, score } = bet
    return {
      gidm,
      gameId,
      gameType,
      playType,
      ratioType,
      ratio,
      ior,
      score: score || '0:0',
      optionId,
      betItem,
      pgidm,
      showType
    }
  })
  return {
    gameType: null,
    betList
  }
}
// 筛选串关投注参数
export const buyCombosParams = (bets: any, combos: any, { s, t }: any) => {
  // 是否接收所有盘口变化 'Y' 接收最优 'S' 接收所有
  const { userConfig } = store.state.user
  const { acceptHight, acceptAll } = userConfig || {}
  let autoOdd = ''
  if (+acceptAll) {
    autoOdd = 'S'
  } else if (+acceptHight) {
    autoOdd = 'Y'
  } else if (+acceptAll === 0 && +acceptHight === 0) {
    autoOdd = 'N'
  }
  const betSubList = bets.map((bet: any) => {
    const {
      gidm,
      gameId,
      playType,
      ratioType,
      ratioIpo,
      ior,
      concede,
      leagueId,
      strong,
      optionId,
      hstrong,
      betItem,
      ratio,
      eoIor,
      session,
      marketId,
      showType
    } = bet
    return {
      gidm,
      gameId,
      playType,
      ratioType,
      ratioIpo,
      ratio,
      ior: points(ior),
      concede,
      leagueId,
      betItem: betItem || ratio,
      optionId,
      strong: strong || hstrong,
      eoIor,
      session,
      marketId,
      showType
    }
  })
  const comboInfo = combos.map((combo: any) => {
    const { comboNumber, gold, orderNumber } = combo
    return {
      combo: comboNumber,
      betNum: orderNumber,
      gold: gold || 0
    }
  })
  return {
    s,
    t,
    betSubList,
    comboInfo,
    autoOdd,
    isCredit: 'N',
    autoRatio: 'Y'
  }
}

// 串关组合
export const chaiCombo = (m: number, ops: Array<any>) => {
  const result = []
  const nCnt = ops.length
  const nBit = 0xffffffff >>> (32 - nCnt)
  for (let i = 1; i <= nBit; i++) {
    const rst = []
    for (let j = 0; j < nCnt; j++) {
      if ((i << (31 - j)) >> 31 === -1) {
        rst.push(ops[j])
      }
    }
    let isrept = false
    for (let k = 0; k < rst.length; k++) {
      let repts = 0
      for (let l = 0; l < rst.length; l++) {
        if (rst[k].gameId === rst[l].gameId) {
          repts++
        }
        if (repts >= 2) {
          isrept = true
        }
      }
    }
    if (!isrept && rst.length === m) {
      result.push(rst)
    }
  }
  return result
}

export const chaiCombos = (betArray: Array<any>, goldDetails = {}) => {
  if (betArray.length <= 1) {
    return false
  }
  const chaiComboArray = []
  for (let i = 2; i <= betArray.length; i++) {
    const comboArray = chaiCombo(i, betArray)
    // 2020.7.7 限制投注不能超过15注
    if (!(comboArray.length > 15)) {
      chaiComboArray.unshift({
        betNuiqueKey: 'comboOrderKey-' + i,
        ...goldDetails,
        comboNumber: i,
        betNumber: '',
        gold: '',
        lock: false,
        orderNumber: comboArray.length,
        comboList: comboArray
      })
    }
  }
  return chaiComboArray
}
