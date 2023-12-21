import request from '@/utils/request'

// 热门赛事
export const firstLeagues = () => {
  return request({
    url: '/ai/mobile/matches/firstLeagues',
    method: 'get'
  })
}
