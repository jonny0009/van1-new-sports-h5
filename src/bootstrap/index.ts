import store from '@/store'
import { getURLSearchParams, setTheme } from '@/utils'
import { getToken, setToken } from '@/utils/auth'

import localStore from '@/utils/localStore'
import { lib } from 'xcsport-lib'
const { modifyRatioTypeListMapping } = lib
export default async () => {
  const searchParams = getURLSearchParams()
  const plateMaskKey = localStore.getItem('plateMaskKey')
  console.log(searchParams, '--')
  /** af 演示需要，临时去掉url带入的token，走路由拦截试玩自动登录 */
  if (searchParams.token) {
    setToken(searchParams.token)
    store.commit('user/SET_TOKEN', searchParams.token)
    store.commit('user/SET_ANONYMITY', false)
  }

  // if (searchParams.theme) {
  //   store.commit('app/SET_THEME', searchParams.theme)
  // }
  store.commit('app/SET_THEME', 'blue') // 默认蓝色
  if (searchParams.theme === 'purple') {
    store.commit('app/SET_THEME', '') // 紫色
  }
  if (typeof searchParams.brandType === 'string') {
    localStore.setItem('visitor', '1')
  }
  setTheme()
  // 商户语言
  // await store.dispatch('app/queryCMerLanguage')

  // 商户配置
  await store.dispatch('app/businessConfig')
  // 商户配置2
  store.dispatch('app/merchantConfig')
  // 模块控制
  store.dispatch('app/moduleConfig')
  modifyRatioTypeListMapping()
  // 查询单双线玩法
  store.dispatch('app/getDoubleLineInfo')
  store.dispatch('app/getConfig', { wid: 1 })

  // 匿名登录
  if (
    store.state.app.businessConfig.anonyTokenFlag === 1 &&
    !searchParams.token &&
    (store.state.user.isAnonymity === null || store.state.user.isAnonymity)
  ) {
    await store.dispatch('user/anonyToken')
  }
  if (getToken()) {
    // 获取钱包币种
    await store.dispatch('user/getCurrency')
    // 获取全部体育项
    store.dispatch('app/getAllSports')
    // 获取首页tab体育项数量
    store.dispatch('app/getHomeTabsSports')
    // 商户语言
    store.dispatch('app/queryCMerLanguage')
    // 获取账号信息
    store.dispatch('user/userInfo')

    // 获取注单数据
    store.dispatch('user/pendingOrder')
    // 获取盘口或者默认盘口
    await store.dispatch('user/configSettingNew', { handicapType: plateMaskKey || 'H' })
    // 账户余额
    // store.dispatch('user/getBalance')
  }
}
