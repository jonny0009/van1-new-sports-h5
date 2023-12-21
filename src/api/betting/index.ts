import request from '@/utils/request'

// 更新投注点水
export const morePW = (data:any) => {
  return request({
    url: '/ai/mobile/bet/order/morePW',
    method: 'post',
    data
  })
}
// 投注
export const moreBetting = (data:any) => {
  return request({
    url: '/ai/mobile/bet/order/moreBetting',
    method: 'post',
    data
  })
}
// 串关点水
export const betComboOrder = (data:any) => {
  return request({
    url: '/ai/mobile/bet/order/betComboOrder',
    method: 'post',
    data
  })
}
// 串关投注
export const comboBetting = (data:any) => {
  return request({
    url: '/ai/mobile/bet/order/comboBetting',
    method: 'post',
    data
  })
}
// 查询订单状态
export const getOrderState = (data:any) => {
  return request({
    url: '/ai/mobile/order/getOrderState',
    method: 'post',
    data
  })
}
// BTI订单再次确认
export const betOrderConfirm = (data:any) => {
  return request({
    url: '/ai/mobile/bet/order/confirm',
    method: 'post',
    data
  })
}
