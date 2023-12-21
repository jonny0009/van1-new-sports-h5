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
  state: boolean
}

declare interface User {
  userConfig: any
  token: string | undefined | null
}
declare interface Betting {
  editId: any
  boardShow: any
  mode: any
  s: any
  t: any
  comboS: any
  comboT: any
  markets: any
  results: any
  isOne: boolean
  hitState: any
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
