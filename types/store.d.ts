import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { RouteRecordRaw } from 'vue-router'

declare interface App {
  moduleConfig: any
  merchantConfig: any
  businessConfig: any
  queryCMerLanguage: any
  state: boolean
}

declare interface User {
  token: string | undefined | null

}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
