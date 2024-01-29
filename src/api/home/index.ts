import request from '@/utils/request'
export const firstLeagues = (params:any) => {
  return request({
    url: '/ai/mobile/matches/firstLeagues',
    method: 'get',
    params
  })
}
// 后台配置推荐联赛
export const recommendLeague = (params:any) => {
  return request({
    url: '/ai/mobile/matches/recommendLeague',
    method: 'get',
    params
  })
}
// 全部联赛
export const fuByGameType = (params:any) => {
  return request({
    url: '/ai/mobile/matches/fuByGameType',
    method: 'get',
    params
  })
}
// 查询比赛====
// gameTypeSon=&gameType=FT&showtype=FU&leagueIds=449&timeStage=0&page=1&gameSort=1&dateStage=2024-01-30&pageSize=10&isNovice=Y&onlyFavorite=0&groupId=3
export const commonMatches = (params:any) => {
  return request({
    url: '/ai/mobile/matches/commonMatches',
    method: 'get',
    params
  })
}
export const recommendEvents = (params:any) => {
  return request({
    url: '/ai/mobile/recommend/events',
    method: 'get',
    params
  })
}
export const apiRBCondition = (params:any) => {
  return request({
    url: '/ai/mobile/matches/getRBCondition',
    method: 'get',
    params
  })
}
export const apiCommonMatches = (params:any) => {
  return request({
    url: '/ai/mobile/matches/commonMatches',
    method: 'get',
    params
  })
}
export const pushAnchor = (params:any) => {
  return request({
    url: '/ai/mobile/anchor/pushAnchor',
    method: 'get',
    params
  })
}
