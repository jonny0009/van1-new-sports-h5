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
// 获取语言
export const getLanguages = (params:any) => {
  return request({
    url: '/ai/mobile/merchantAccountServer/api/c/queryCMerLanguage',
    method: 'get',
    params
  })
}
// 右边搜索
export const rightSearch = (params:any) => {
  return request({
    url: '/ai/mobile/hot/searchs',
    method: 'get',
    params
  })
}
// 获取当前币种
export const getCMerAccessWallet = (params:any) => {
  return request({
    url: '/ai/mobile/merchantAccountServer/api/c/getCMerAccessWallet',
    method: 'get',
    params
  })
}

// 消息通知
export const messageList = (params:any) => {
  return request({
    url: '/ai/mobile/player/messageList',
    method: 'get',
    params
  })
}
// 消息详情 id
export const messageDetail = (params:any) => {
  return request({
    url: '/ai/mobile/player/find',
    method: 'get',
    params
  })
}
/*
 修改昵称时间
*/
export const editNameTime = (params:any) => {
  return request({
    url: '/ai/mobile/player/getUpdateNickNameTimeNew',
    method: 'get',
    params
  })
}
/*
修改备注 头像 昵称
nickName: ron01
headImg:  头像
profiles: 备注
 */
export const updatePlayerInfo = (params:any) => {
  return request({
    url: 'ai/mobile/player/updatePlayerInfo',
    method: 'get',
    params
  })
}

// 修改过后的玩家信息 fPlayerId
export const playerInfo = (params:any) => {
  return request({
    url: '/ai/mobile/playerInfo',
    method: 'get',
    params
  })
}

