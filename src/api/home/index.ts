import request from '@/utils/request'
export const firstLeagues = (params: any) => {
  return request({
    url: '/ai/mobile/matches/firstLeagues',
    method: 'get',
    params
  })
}
// 后台配置推荐联赛
export const recommendLeague = (params: any) => {
  return request({
    url: '/ai/mobile/matches/recommendLeague',
    method: 'get',
    params
  })
}
// 全部联赛
export const fuByGameType = (params: any) => {
  return request({
    url: '/ai/mobile/matches/fuByGameType',
    method: 'get',
    params
  })
}
// 查询比赛====
// gameTypeSon=&gameType=FT&showtype=FU&leagueIds=449&timeStage=0&page=1&gameSort=1&dateStage=2024-01-30&pageSize=10&isNovice=Y&onlyFavorite=0&groupId=3
export const commonMatches = (params: any) => {
  return request({
    url: '/ai/mobile/matches/commonMatches',
    method: 'get',
    params
  })
}
// 超级联赛轮播====
// gameSort=1&gameType=&gameTypeSon=&showtype=&page=1&pageSize=20&groupId=1
export const homeCommonMatches = (params: any) => {
  return request({
    url: '/ai/mobile/home/common/matches',
    method: 'get',
    params
  })
}
export const recommendEvents = (params: any) => {
  return request({
    url: '/ai/mobile/recommend/events',
    method: 'get',
    params
  })
}
export const apiRBCondition = (params: any) => {
  return request({
    url: '/ai/mobile/matches/getRBCondition',
    method: 'get',
    params
  })
}
export const apiCommonMatches = (params: any) => {
  return request({
    url: '/ai/mobile/matches/commonMatches',
    method: 'get',
    params
  })
}
export const pushAnchor = (params: any) => {
  return request({
    url: '/ai/mobile/anchor/pushAnchor',
    method: 'get',
    params
  })
}
// 查询国家信息
export const searchCountryInfo = (params: any) => {
  return request({
    url: '/ai/mobile/matches/country',
    method: 'get',
    params
  })
}
// 通过国家查询下面的联赛信息
export const searchLeagueByCountryInfo = (params: any) => {
  return request({
    url: '/ai/mobile/matches/leagueByCountry',
    method: 'get',
    params
  })
}

// 首页真人好路列表
export const getBacGoodRoads = (params?: any) => {
  return request({
    url: '/ai/mobile/game/bacGoodRoads',
    method: 'get',
    params
  })
}
// 首页彩票好路列表
export const getLotteryGoodRoads = (params?: any) => {
  return request({
    url: '/ai/mobile/game/lotteryGoodRoads',
    method: 'get',
    params
  })
}
// 获取小游戏详情
export const getBJGameUrl = (params?: any) => {
  return request({
    url: '/ai/mobile/game/url/new',
    method: 'get',
    params
  })
}
