import request from '@/utils/request'

/**
 * 设置盘口
 * @param {*} data
 * @returns
 */
export const setPan = (data:any) => {
  return request({
    url: '/*',
    method: 'post',
    data
  })
}
