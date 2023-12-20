import request from '@/utils/request'

/**
 * 用户
 * @param {*} data
 * @returns
 */
// 盘口设置
export const getPlateMask = (data:any) => {
  return request({
    url: 'ai/mobile/player/configSettingNew',
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
