import request from '@/utils/request'
export const firstLeagues = (params:any) => {
  return request({
    url: '/ai/mobile/matches/firstLeagues',
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
