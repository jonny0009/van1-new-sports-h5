import request from '@/utils/request'

/**
 * 登录
 * @param {*} data
 * @returns
 */
export const login = (data:any) => {
  return request({
    url: '/ai/mobile/login',
    method: 'post',
    data
  })
}
// 试玩登录====
export const tryLogin = (data:any) => {
  return request({
    url: '/ai/mobile/loginTemp/v2',
    method: 'post',
    data
  })
}
// 玩家账户
export const playAccount = (params:any) => {
  return request({
    url: '/ai/mobile/player/playerAccount',
    method: 'get',
    params
  })
}
// 账户余额 wid: 1
export const getBalance = (params:any) => {
  return request({
    url: '/ai/mobile/player/getBalance',
    method: 'get',
    params
  })
}

