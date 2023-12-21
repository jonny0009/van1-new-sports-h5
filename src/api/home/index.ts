import request from '@/utils/request'

// 热门赛事
export const firstLeagues = () => {
  return request({
    url: '/ai/mobile/matches/firstLeagues',
    method: 'get'
  })
}
// 推荐比赛
export const recommendEvents = () => {
  return request({
    url: '/ai/mobile/recommend/events',
    method: 'get'
  })
}
