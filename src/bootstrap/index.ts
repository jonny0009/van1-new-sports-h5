import store from '@/store'
import { getURLSearchParams } from '@/utils'
import { getToken } from '@/utils/auth'

export default async () => {
  const searchParams = getURLSearchParams()
  if (searchParams.token) {
    store.commit('user/SET_TOKEN', searchParams.token)
  }
  // 商户语言
  await store.dispatch('app/queryCMerLanguage')
  // 商户配置
  await store.dispatch('app/businessConfig')
  // 商户配置2
  await store.dispatch('app/merchantConfig')
  // 模块控制
  await store.dispatch('app/moduleConfig')
  // 获取全部体育项
  store.dispatch('app/getAllSports')
  // 查询单双线玩法
  store.dispatch('app/getDoubleLineInfo')
  if (getToken()) {
    store.dispatch('user/configSettingNew')
    // 获取账号信息
    store.dispatch('user/userInfo')
    // 获取钱包币种
    store.dispatch('user/getCurrency')
    // 获取注单数据
    store.dispatch('user/pendingOrder')
    // 账户余额
    // store.dispatch('user/getBalance')
  }
}
