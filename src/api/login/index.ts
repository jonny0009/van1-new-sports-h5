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
export const getLanguages = (params:any) => {
  return request({
    url: '/ai/mobile/merchantAccountServer/api/c/queryCMerLanguage',
    method: 'get',
    params
  })
}
