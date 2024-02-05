import request from '@/utils/request'

/**
 * 获取所有体育项
 * @returns
 */
export const getAllSports = () => {
  return request({
    url: '/ai/mobile/common/topMenu',
    method: 'get'
  })
}

/**
 * 获取游戏
 * @returns
 */
export const apiGetGameDetail = (params:any) => {
  return request({
    url: '/ai/mobile/game/url/new',
    method: 'get',
    params
  })
}
/**
 * 获取游戏
 * @returns
 */
export const getDoubleLineInfo = () => {
  return request({
    url: '/ai/mobile/getDoubleLineInfo',
    method: 'get'
  })
}

/**
 * 匿名登录
 * @returns
 */
export const anonyToken = () => {
  return request({
    url: '/ai/mobile/anonyToken',
    method: 'get'
  })
}

export const getConfig = () => {
  return request({
    url: '/ai/mobile/merchant/merchantCustomize',
    method: 'get'
  })
}
