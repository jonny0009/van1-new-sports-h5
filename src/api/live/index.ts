import request from '@/utils/request'

export const liveGameTypeList = (params: any) => {
  return request({
    url: '/ai/mobile/game/liveGameTypeList',
    method: 'get',
    params
  })
}

export const anchorLiveList = (params:any) => {
  return request({
    url: '/ai/mobile/game/anchorLiveList',
    method: 'get',
    params
  })
}

export const matcheInfo = (params:any) => {
  return request({
    url: '/ai/mobile/detail/matches',
    method: 'get',
    params
  })
}

export const extendInfo = (params:any) => {
  return request({
    url: '/ai/mobile/detail/extend',
    method: 'get',
    params
  })
}

export const playGroup = (params:any) => {
  return request({
    url: '/ai/mobile/detail/playGroup',
    method: 'get',
    params
  })
}

export const ratioRateInfo = (params:any) => {
  return request({
    url: '/ai/mobile/detail/ratioRateInfo',
    method: 'get',
    params
  })
}

export const rbLiveList = (params:any) => {
  return request({
    url: '/ai/mobile/game/rbLiveList',
    method: 'get',
    params
  })
}
