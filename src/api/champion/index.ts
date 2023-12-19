import request from '@/utils/request'

export const apiChampionGameTypes = () => {
  return request({
    url: '/ai/mobile/game/champion/gameTypes',
    method: 'get'
  })
}

export const apiChampionLeagueInfo = (params:any) => {
  return request({
    url: '/ai/mobile/game/champion/championLeagueInfo',
    method: 'get',
    params
  })
}

export const apiChampionpPlayTypes = (params:any) => {
  return request({
    url: '/ai/mobile/game/champion/playTypes/v2',
    method: 'get',
    params
  })
}
