import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { RouteRecordRaw } from 'vue-router'

declare interface App {
  sports: any
  moduleConfig: any
  merchantConfig: any
  businessConfig: any
  queryCMerLanguage: any
  state: boolean
}

declare interface User {
  token: string | undefined | null
}
declare interface Betting {
  markets: any
  ratioChangesState: any
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
