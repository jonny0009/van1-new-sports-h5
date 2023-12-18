import store from '@/store'

export default async () => {
  // 商户语言
  await store.dispatch('app/queryCMerLanguage')
  // 商户配置
  await store.dispatch('app/businessConfig')
  // 商户配置2
  await store.dispatch('app/merchantConfig')
  // 模块控制
  await store.dispatch('app/moduleConfig')
}
