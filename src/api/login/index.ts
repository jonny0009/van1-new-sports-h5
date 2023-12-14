import request from '@/utils/request'

/**
 * 资金审核列表
 * @param {*} data
 * @returns
 */
export const login = (data:any) => {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}
