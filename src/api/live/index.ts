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
