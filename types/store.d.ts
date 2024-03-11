import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { RouteRecordRaw } from 'vue-router'

declare interface App {
  showFixedBet: any
  theme: any
  globalBarHeaderHeight: any
  liveBarHeaderHeight: any
  doubleLineInfo: any
  sports: any
  moduleConfig: any
  merchantConfig: any
  businessConfig: any
  queryCMerLanguage: any
  state: boolean
  pictureinpictureGidm: any
  mantainMsg: any
  systemTime: any
  customizeConfig: any
  matchLiveIndex: any
}

declare interface User {
  isAnonymity: any
  userConfig: any
  userInfo: any
  balance: any
  currency: any
  pendingData: any
  currencyData: any
  teamNameList: any
  championLangList: any
  peopleInfo: any
  aheadOrderList: any
  resultTab: any
  scrollNumY: any
  locationHeight: any
  currentWallet: any
  keepCache: any
  token: string | undefined | null
  ifSearchDo: any
  symbol: string | undefined | null
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
  parlayMarkets: any
  results: any
  isOne: boolean
  hitState: any
  moreShow: any
  moreParams: any
  oddChangesState: any
  combosErrorIds: any
}

declare interface Match {
  pictureinpictureGidm: any
  matchInfo: any
  matchData: any
  needTimer: boolean
  turnSound: boolean
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
