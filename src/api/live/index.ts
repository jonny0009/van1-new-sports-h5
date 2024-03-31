import request from '@/utils/request'

export const liveGameTypeList = (params: any) => {
  return request({
    url: '/ai/mobile/game/liveGameTypeList',
    method: 'get',
    params
  })
}

export const anchorLiveList = (params: any) => {
  return request({
    url: '/ai/mobile/game/anchorLiveList',
    method: 'get',
    params
  })
}

export const matcheInfo = (params: any) => {
  return request({
    url: '/ai/mobile/detail/matches',
    method: 'get',
    params
  })
}

export const extendInfo = (params: any) => {
  return request({
    url: '/ai/mobile/detail/extend',
    method: 'get',
    params
  })
}

export const playGroup = (params: any) => {
  return request({
    url: '/ai/mobile/detail/playGroup',
    method: 'get',
    params
  })
}

export const ratioRateInfo = (params: any) => {
  return request({
    url: '/ai/mobile/detail/ratioRateInfo',
    method: 'get',
    params
  })
}

export const betRecordAll = (params: any) => {
  return request({
    url: '/ai/mobile/detail/betRecordAll',
    method: 'get',
    params
  })
}

export const betRecord = (params: any) => {
  return request({
    url: '/ai/mobile/detail/betRecord',
    method: 'get',
    params
  })
}

export const rbLiveList = (params: any) => {
  return request({
    url: '/ai/mobile/game/rbLiveList',
    method: 'get',
    params
  })
}

export const intoRoom = (params: any) => {
  return request({
    url: '/chat/intoRoom',
    method: 'get',
    params
  })
}

export const lastMessageByPage = (params: any) => {
  return request({
    url: '/chat/findAllLastMessageByPage',
    method: 'get',
    params
  })
}

// 串关-赛事类型
export const matchConditionApi = (params: any) => {
  return request({
    url: '/ai/mobile/game/multiNote/matchCondition',
    method: 'get',
    params
  })
}

export const comBoByGameTypeApi = (params: any) => {
  return request({
    url: '/ai/mobile/matches/comBoByGameType',
    method: 'get',
    params
  })
}

export const matchListApi = (params: any) => {
  return request({
    url: '/ai/mobile/game/multiNote/matchList',
    method: 'get',
    params
  })
}

// 数据-赛事
export const matchStatusApi = (params: any) => {
  return request({
    url: '/ai/match/status',
    method: 'get',
    params
  })
}

// 数据-赛况
export const scoresstaticseventsApi = (params: any) => {
  return request({
    url: '/ai/match/scoresstaticsevents',
    method: 'get',
    params
  })
}

// 数据-历史交锋 ?homeTeamId=42329&awayTeamId=41293&limit=5
export const teamHistoryApi = (params: any) => {
  return request({
    url: '/ai/game/homeTeamVsAwayTeamHistory',
    method: 'get',
    params
  })
}

// 数据-近期比赛
export const teamRecentApi = (params: any) => {
  return request({
    url: '/ai/game/homeTeamVsAwayTeamRecent',
    method: 'get',
    params
  })
}

// 数据-积分榜
export const homeAwayIntegralApi = (params: any) => {
  return request({
    url: '/ai/match/homeAwayIntegral',
    method: 'get',
    params
  })
}

// 数据-阵容图
export const lineupApi = (params: any) => {
  return request({
    url: '/ai/match/lineup',
    method: 'get',
    params
  })
}

// 数据分析图
export const betAnalyzeApi = (params: any) => {
  return request({
    url: '/ai/mobile/order/bettingAnalyze',
    method: 'get',
    params
  })
}

export const nextAnchorMatchDate = () => {
  return request({
    url: '/ai/mobile/anchor/recentAnchorGameDate',
    method: 'get'
  })
}
// 短视频
export const getVideoGreet = (params: any) => {
  return request({
    url: '/ai/mobile/video/getVideoGreet',
    method: 'get',
    params
  })
}
// 短视频
export const mainMatches = (params: any) => {
  return request({
    url: '/ai/detail/mainMatches',
    method: 'get',
    params
  })
}
