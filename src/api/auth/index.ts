import request from '@/utils/request'

/**
 * 商户配置
 * @returns
 */
export const queryCMerLanguage = () => {
  return request({
    url: '/ai/mobile/merchantAccountServer/api/c/queryCMerLanguage',
    method: 'get'
  })
}
/**
 * 商户配置
 * @returns
 */
export const businessConfig = () => {
  return request({
    url: '/ai/mobile/common/businessConfig',
    method: 'get'
  })
}
/**
 * 商户配置
 * @returns
 */
export const merchantConfig = () => {
  return request({
    url: '/ai/app/download/merchantConfigDetail',
    method: 'get'
  })
}
/**
 * 模块开关
 * @returns
 */
export const moduleConfig = (params:any) => {
  return request({
    url: '/ai/merchant/moduleConfig',
    method: 'get',
    params
  })
}
/**
 * 用户配置
 * @returns
 */
export const configSettingNew = (data:any) => {
  return request({
    url: '/ai/mobile/player/configSettingNew',
    method: 'post',
    data
  })
}
