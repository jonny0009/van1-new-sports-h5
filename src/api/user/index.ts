import request from '@/utils/request'

/**
 * 用户
 * @param {*} data
 * @returns
 */
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
    url: '/ai/hot/searchs',
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

/*
结果, 投注历史========
{"orderState":"0","page":1,"pageSize":10}
{"orderState":"1","page":1,"pageSize":10,"beginTime":1703126000447,"endTime":1703212400447}
参数
 */
export const betRecordTab = (data:any) => {
  return request({
    url: '/ai/mobile/order/all/betRecordTab',
    method: 'post',
    data
  })
}
// 游戏详情
// gidms=48935924,6525841347224326144,6525841345152335872

export const getGameManyInfo = (params:any) => {
  return request({
    url: 'ai/mobile/dataPageServer/api/c/game/getGameManyInfo',
    method: 'post',
    params
  })
}

// 余额类型   无参数
export const getTradeTypeEnums = (params:any) => {
  return request({
    url: 'ai/mobile/player/getTradeTypeEnums',
    method: 'get',
    params
  })
}
// 余额列表  无参数  needCount
export const capitalRecords = (params:any) => {
  return request({
    url: 'ai/mobile/player/capitalRecords',
    method: 'get',
    params
  })
}

