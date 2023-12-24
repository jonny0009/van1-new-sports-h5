import { tnStObj, bsStObj } from '@/utils/home/gameInfo'

export const getScore = (raceinfo:any, type:any = 'H') => {
  if (raceinfo?.gameInfo && (raceinfo?.showtype === 'RB' || raceinfo?.showType === 'RB')) {
    let homeScore, awayScore
    if (raceinfo?.gameType === 'TN') {
      // 网球比分
      const tninfo:any = tnStObj(raceinfo?.gameInfo)
      if (type === 'H') {
        return tninfo.scorePan.scoreH
      }
      return tninfo.scorePan.scoreA
    } else if (raceinfo.gameType === 'BS' && raceinfo.gidm.indexOf('ib') > -1) {
      // 棒球比分
      const bsinfo = bsStObj(raceinfo.gameInfo)
      if (type === 'H') {
        return bsinfo.score.scoreH
      }
      return bsinfo.score.scoreA
    } else if (raceinfo.gameType === 'FT' && raceinfo.gidm.indexOf('ib') > -1 && raceinfo.homeTeamSuffix) {
      // ibo 足球加时赛比分
      if (
        raceinfo.gameScene &&
        raceinfo.gameScene.scene &&
        raceinfo.gameScene.scene.score &&
        raceinfo.gameScene.scene.score.fullScore
      ) {
        if (type === 'H') {
          return raceinfo.gameScene.scene.score.fullScore.team1 || ''
        }
        return raceinfo.gameScene.scene.score.fullScore.team2 || ''
      }
    }
    // 通用比分
    if (type === 'H') {
      if (raceinfo.gameInfo['sc_FT_H'] || raceinfo.gameInfo['sc_game_H']) {
        homeScore = raceinfo.gameInfo['sc_FT_H'] || 0
      }
      return homeScore
    }
    if (raceinfo.gameInfo.sc_FT_H || raceinfo.gameInfo.sc_game_H) {
      awayScore =
        raceinfo.gameInfo['sc_FT_A'] || raceinfo.gameInfo['sc_FT_C'] || 0
    }
    return awayScore
  }
}

