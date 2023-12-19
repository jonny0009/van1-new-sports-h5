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
