export const gameInfo = (game:any) => {
  const obj:any = { status: '', text: '', time: '', scoreHome: '', scoreAway: '' }
  if (game && game.showtype === 'RB' && (game.gameInfo || game.runningData)) {
    const gameInfoObj = game.gameInfo || game.runningData || {}
    obj.scoreHome = (
      gameInfoObj.sc_FT_H ||
      gameInfoObj.sc_game_H ||
      '0'
    ).replace('Adv', 'A')
    obj.scoreAway = (
      gameInfoObj.sc_FT_A ||
      gameInfoObj.sc_game_A ||
      gameInfoObj.sc_FT_C ||
      '0'
    ).replace('Adv', 'A')
    const reTime = gameInfoObj['re_time'] || ''
    gameInfoObj['re_time'] = reTime.replace("'", '')
    const [re1, re2] = reTime.split('^')
    obj.time = re2
    // reTime 足球说明：FT
    // HT^^：中场休息
    // LIVE^0'：计时器暂停
    // 1H^22:11：上半场计时22:11
    // 2H^32:11：下半场计时32:11
    if (reTime === 'HT^^') {
      obj.status = 'HT'
      obj.text = '中场休息'
    }
    if (game.gameType === 'FT') {
      // 足球
      if (re1 && re2) {
        if (re1 === '1H') {
          obj.status = '1H'
          obj.text = '上半场'
          obj.time = re2
        } else if (re1 === '2H') {
          obj.status = '2H'
          obj.text = '下半场'
          obj.time = re2
        } else if (re1 === 'LIVE' && re2 === '0') {
          obj.status = 'STOP'
          obj.text = '暂停'
        }
      }
    } else if (game.gameType === 'BK') {
      // 篮球
    } else if (game.gameType === 'TN') {
      // 网球
      obj.scObj = tnStObj(gameInfoObj)
    } else if (game.gameType === 'BS') {
      // 棒球
      // 1 当前第几盘
      // 2 当前第几局
      // st 列表
      // let stA = gameInfo.sc_1st_A
      // let stH = gameInfo.sc_1st_H
      // if(+stA>7 || )
    } else if (game.gameType === 'OP') {
      // 其他
    } else if (game.gameType === 'OP_DJ') {
      // 电竞
    } else if (game.gameType === 'OP_IH') {
      // 冰球
    }
  }
  return obj
}

export const tnStObj = (gameInfo:any) => {
  // let senow, scgameA, scgameH, scsetA, scsetH  = gameInfo
  const senow = gameInfo.se_now ? +gameInfo.se_now.replace(/[^0-9]/gi, '') : 0
  let scgameA
  let scgameH
  if (gameInfo.sc_adv) {
    // BI比分
    if (gameInfo.sc_game_A === '40' && gameInfo.sc_game_H === '40') {
      if (gameInfo.sc_adv === '0') {
        scgameA = 'A'
        scgameH = +gameInfo.sc_game_H
      } else if (gameInfo.sc_adv === '1') {
        scgameH = 'A'
        scgameA = gameInfo.sc_game_A
      } else {
        scgameA = gameInfo.sc_game_A
        scgameH = gameInfo.sc_game_H
      }
    } else {
      scgameA = gameInfo.sc_game_A
      scgameH = gameInfo.sc_game_H
    }
  } else {
    // AI数据
    if (gameInfo.sc_game_A === 'Adv' || gameInfo.sc_game_A === 'A') {
      scgameA = 'A'
      scgameH = gameInfo.sc_game_H
    } else if (gameInfo.sc_game_H === 'Adv' || gameInfo.sc_game_H === 'A') {
      scgameH = 'A'
      scgameA = gameInfo.sc_game_A
    } else {
      scgameA = gameInfo.sc_game_A
      scgameH = gameInfo.sc_game_H
    }
  }
  const sciwd =
    gameInfo && gameInfo.sc_iwd && gameInfo.sc_iwd.trim()
      ? JSON.parse(gameInfo.sc_iwd)
      : ''
  const stObj:any = {
    sc1stA: gameInfo ? +gameInfo.sc_1st_A : 0,
    sc1stH: gameInfo ? +gameInfo.sc_1st_H : 0,
    sc2stA: gameInfo ? +gameInfo.sc_2nd_A : 0,
    sc2stH: gameInfo ? +gameInfo.sc_2nd_H : 0,
    sc3stA: gameInfo ? +gameInfo.sc_3th_A : 0,
    sc3stH: gameInfo ? +gameInfo.sc_3th_H : 0,
    sc4stA: gameInfo ? +gameInfo.sc_4th_A : 0,
    sc4stH: gameInfo ? +gameInfo.sc_4th_H : 0,
    sc5stA: gameInfo ? +gameInfo.sc_5th_A : 0,
    sc5stH: gameInfo ? +gameInfo.sc_5th_H : 0
  }

  const total = 5
  let scObj = {}
  const scoreArr = [] // 需要显示的st列表
  let currPanNum = 1 // 当前第几盘
  let scorePan = {
    scoreA: 0,
    scoreH: 0
  } // 当前盘比分
  let scoreJu = {} // 当前局比分(第几局)

  for (let i = 1; i < total; i++) {
    const obj:any = getTnNext(i, stObj, scorePan)

    scoreArr.push(obj.scoreObj)

    if (obj.hasNext) {
      if (i === total) {
        currPanNum = i
        scorePan = obj.scorePan
        scoreJu = obj.scoreJu
      }
    } else {
      currPanNum = i
      scorePan = obj.scorePan
      scoreJu = obj.scoreJu
      break
    }
  }
  let showText = ''
  // panNum, score1, score2 用于页面展示区分，给不同主题色
  let panNum = ''
  let score1 = ''
  let score2 = ''
  let score1Home = ''
  let score1Away = ''
  const score2arr = `${
    scgameH || scgameA ? scgameH + ':' + scgameA : ''
  }`.split(':')
  const score2Home = score2arr[0]
  const score2Away = score2arr[1]
  if (senow) {
    showText = `第${senow}盘` +
     `${stObj[`sc${senow}stH`]}:${stObj[`sc${senow}stA`]}` +
     `(${scgameH || scgameA ? (scgameH || 0) + ':' + (scgameA || 0) : ''})`

    panNum = `第${senow}盘`
    score1 = `${stObj[`sc${senow}stH`] || 0}:${stObj[`sc${senow}stA`] || 0}`
    score2 = `(${
      scgameH || scgameA ? (scgameH || 0) + ':' + (scgameA || 0) : ''
    })`
    score1Home = stObj[`sc${senow}stH`] || 0
    score1Away = stObj[`sc${senow}stA`] || 0
  } else if (currPanNum) {
    showText = `第${currPanNum}盘` +
      `${stObj[`sc${currPanNum}stH`] || 0}:${
        stObj[`sc${currPanNum}stA`] || 0
      }` +
      `(${scgameH || scgameA ? (scgameH || 0) + ':' + (scgameA || 0) : ''})`
    panNum = `第${currPanNum}盘`
    score1 = `${stObj[`sc${currPanNum}stH`] || 0}:${
      stObj[`sc${currPanNum}stA`] || 0
    }`
    score1Home = stObj[`sc${currPanNum}stH`] || 0
    score1Away = stObj[`sc${currPanNum}stA`] || 0
    score2 = `(${
      scgameH || scgameA ? (scgameH || 0) + ':' + (scgameA || 0) : ''
    })`
  }
  scObj = {
    scoreArr,
    currPanNum,
    sciwd,
    senow: senow > 0 ? senow : currPanNum,
    showText,
    scorePan,
    scoreJu,
    score1,
    score2,
    score1Home,
    score1Away,
    score2Home,
    score2Away,
    panNum
  }
  return scObj
}
export const getTnNext = (index:any, stObj:any, scorePan:any) => {
  const obj:any = {
    hasNext: false
  }
  const keyA = `sc${index}stA`
  const keyH = `sc${index}stH`
  const scoreA = stObj[keyA]
  const scoreH = stObj[keyH]

  if (scoreA >= 7 || scoreH >= 7) {
    obj.hasNext = true
  } else if (scoreA === 6 || scoreH === 6) {
    if (Math.abs(scoreA - scoreH) >= 2) {
      obj.hasNext = true
    }
  }
  if (obj.hasNext) {
    if (scoreA > scoreH) {
      scorePan.scoreA += 1
    } else {
      scorePan.scoreH += 1
    }
  }
  obj.scoreObj = {
    [keyA]: scoreA,
    [keyH]: scoreH
  }
  obj.scoreJu = {
    scoreA,
    scoreH
  }
  obj.scorePan = scorePan
  return obj
}

export const opScoreObj:any = (resultInfo:any, type:any = 5) => {
  if (!resultInfo) {
    return ''
  }
  const stObj = {
    sc1stA: 1 * resultInfo.sc_1st_A || 0,
    sc1stH: 1 * resultInfo.sc_1st_H || 0,
    sc2stA: 1 * resultInfo.sc_2nd_A || 0,
    sc2stH: 1 * resultInfo.sc_2nd_H || 0,
    sc3stA: 1 * resultInfo.sc_3th_A || 0,
    sc3stH: 1 * resultInfo.sc_3th_H || 0,
    sc4stA: 1 * resultInfo.sc_4th_A || 0,
    sc4stH: 1 * resultInfo.sc_4th_H || 0,
    sc5stA: 1 * resultInfo.sc_5th_A || 0,
    sc5stH: 1 * resultInfo.sc_5th_H || 0,
    sc6stA: 1 * resultInfo.sc_6th_A || 0,
    sc6stH: 1 * resultInfo.sc_6th_H || 0,
    sc7stA: 1 * resultInfo.sc_7th_A || 0,
    sc7stH: 1 * resultInfo.sc_7th_H || 0,
    sc8stA: 1 * resultInfo.sc_8th_A || 0,
    sc8stH: 1 * resultInfo.sc_8th_H || 0,
    sc9stA: 1 * resultInfo.sc_9th_A || 0,
    sc9stH: 1 * resultInfo.sc_9th_H || 0,
    sc10stA: 1 * resultInfo.sc_10th_A || 0,
    sc10stH: 1 * resultInfo.sc_10th_H || 0
  }
  let scObj = {}
  const scoreArr = [] // 需要显示的st列表
  let currPanNum = 1 // 当前第几盘
  const scorePan:any = {
    scoreA: 0,
    scoreH: 0
  } // 当前盘比分
  let scoreJu = {} // 当前局比分(第几局)

  for (let i = 1; i < type + 1; i++) {
    const obj:any = getOpNext(i, stObj, scorePan)
    scoreArr.push(obj.scoreObj)
    currPanNum = i
    scorePan.scoreA += obj.scoreJu.scoreA
    scorePan.scoreH += obj.scoreJu.scoreH
    scorePan.num = obj.scorePan.num
    if (obj.scoreJu.scoreA || obj.scoreJu.scoreH) {
      scoreJu = obj.scoreJu
    }
  }
  scorePan.num = resultInfo.se_now?.replace(/[^0-9]/gi, '') || null
  if (resultInfo.inningNum && resultInfo.inningNum !== '0') {
    scorePan.num = resultInfo.inningNum
  }
  scObj = {
    scoreArr,
    currPanNum,
    showText: `第${scorePan.num}局` + ` (${scorePan.scoreH} : ${scorePan.scoreA})`,
    scorePan,
    scoreJu
  }
  return scObj
}
export const getOpNext = (index:any, stObj:any, scorePan:any) => {
  const obj:any = {}
  const keyA = `sc${index}stA`
  const keyH = `sc${index}stH`
  const scoreA = stObj[keyA] * 1
  const scoreH = stObj[keyH] * 1
  obj.scoreJu = {}
  if (scoreA > 0 || scoreH > 0) {
    obj.hasNext = true
    scorePan.num = index
    obj.scoreJu = {
      scoreA,
      scoreH
    }
  } else {
    if (!scorePan.num) {
      scorePan.num = 1
    }
    if (!obj.scoreJu.scoreA) {
      obj.scoreJu = {
        scoreA,
        scoreH
      }
    }
  }
  obj.scoreObj = {
    [keyA]: scoreA,
    [keyH]: scoreH
  }
  obj.scorePan = scorePan
  return obj
}
// bsStObj
export const bsStObj = (gameInfo:any) => {
  const target:any = {}
  target['se_now'] =
    gameInfo.se_now && gameInfo.se_now !== '0'
      ? gameInfo.se_now.replace(/[^0-9]/gi, '')
      : ''
  target['sc_half'] = gameInfo.sc_half
    ? +gameInfo.sc_half
      ? '下'
      : '上'
    : ''
  target.score = opScoreObj(gameInfo, 9).scorePan
  target['sc_ot'] = gameInfo.sc_ot ? +gameInfo.sc_ot : ''
  target['sc_fb'] = gameInfo.sc_fb ? JSON.parse(gameInfo.sc_fb) : ''
  target['sc_sb'] = gameInfo.sc_sb ? JSON.parse(gameInfo.sc_sb) : ''
  target['sc_tb'] = gameInfo.sc_tb ? JSON.parse(gameInfo.sc_tb) : ''
  return target
}
