import { Module } from 'vuex'
import { Home } from '#/store'

// 首页store
const HomeModule: Module<Home, any> = {
  namespaced: true,
  state: {
    refreshChangeTime: ''
  },
  mutations: {},
  getters: {},
  actions: {
    setRefreshChangeTime({ state }, val) {
      state.refreshChangeTime = val
    }
  }
}
export default HomeModule
