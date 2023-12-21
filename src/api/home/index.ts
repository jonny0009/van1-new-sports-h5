import request from '@/utils/request'

// 热门赛事
export const firstLeagues = (params:any) => {
  return request({
    url: '/ai/mobile/matches/firstLeagues',
    method: 'get',
    params
  })
}
// 推荐比赛
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
