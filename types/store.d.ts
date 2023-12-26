import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { RouteRecordRaw } from 'vue-router'

declare interface App {
  doubleLineInfo: any
  sports: any
  moduleConfig: any
  merchantConfig: any
  businessConfig: any
  queryCMerLanguage: any
  imgChangeTime: any
  state: boolean
}

declare interface User {
  userConfig: any
  userInfo: any
  balance: any
  currency: any
  pendingData: any
  currencyData: any
  token: string | undefined | null
}
declare interface Betting {
  combos: {
    betNuiqueKey: string
    comboNumber: any
    betNumber: string
    gold: string
    lock: boolean
    orderNumber: number
    comboList: any[][]
    goldMin: any
    goldMax: any
  }[]
  comboAmount: any
  editId: any
  boardShow: any
  mode: any
  s: any
  t: any
  comboS: any
  comboT: any
  markets: any
  comboMarkets: any
  results: any
  isOne: boolean
  hitState: any
  moreShow: any
  moreParams: any
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
