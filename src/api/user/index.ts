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
// 热门搜索接口
export const hotSearch = (params:any) => {
  return request({
    url: 'ai/hot/hotSearch',
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
// 隐身模式
export const setPrivacy = (params:any) => {
  return request({
    url: 'ai/mobile/setPrivacy/' + params.privacy,
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
// 提前结算 订单信息
/*
{"cashoutInfoReq":[{"orderId":"AIS24011016164423846"},]}
*/

export const getCashoutInfo = (data:any) => {
  return request({
    url: '/ai/mobile/bet/order/getCashoutInfo',
    method: 'post',
    data
  })
}
// 提前结算 单个信息
/*
{"orderId":"AIS24010316244316314"}
*/

export const refressCashoutOrder = (data:any) => {
  return request({
    url: '/ai/mobile/bet/order/refressCashoutOrder',
    method: 'post',
    data
  })
}
// 提前结算 操作
/*
{"orderId":"AIS24010316244316314","amount":90}
*/

export const confirmCashout = (data:any) => {
  return request({
    url: '/ai/mobile/bet/order/confirmCashout',
    method: 'post',
    data
  })
}
// 游戏详情
// gidms=48935924,6525841347224326144,6525841345152335872

export const getGameManyInfo = (params:any) => {
  return request({
    url: 'ai/mobile/dataPageServer/api/c/game/getGameManyInfo',
    method: 'get',
    params
  })
}
// 冠军多语言
// gidm=48935924,6525841347224326144,6525841345152335872

export const selectChampionManyName = (params:any) => {
  return request({
    url: 'ai/mobile/dataConfig/api/c/selectChampionManyName',
    method: 'get',
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
// 余额列表   needCount
export const capitalRecords = (params:any) => {
  return request({
    url: 'ai/mobile/player/capitalRecords',
    method: 'get',
    params
  })
}
// 赛果查询   needCount
export const matchResult = (params:any) => {
  return request({
    url: 'ai/mobile/matches/result',
    method: 'get',
    params
  })
}
// 赛果查询详情====   systemId=15539370&groupId=3
export const resultDetail = (params:any) => {
  return request({
    url: 'ai/mobile/match/resultDetail',
    method: 'get',
    params
  })
}
// 关注列表
export const starPage = (params:any) => {
  return request({
    url: 'ai/mobile/player/starPage',
    method: 'get',
    params
  })
}
// 粉丝列表 参数: playerId
export const fansList = (params:any) => {
  return request({
    url: '/ai/mobile/player/fansList',
    method: 'get',
    params
  })
}
// 战绩接口
export const standings = (params:any) => {
  return request({
    url: '/ai/mobile/game/standings',
    method: 'get',
    params
  })
}

