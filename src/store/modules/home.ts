import { Module } from 'vuex'
import { Home } from '#/store'
const HomeModule: Module<Home, any> = {
  namespaced: true,
  state: {
    refreshChangeTime: '',
    RrefShow: true,
    OUrefShow: true,
    MrefShow: true
  },
  mutations: {},
  getters: {},
  actions: {
    setKeyValue(state:any, { key, value }) {
      state.state[key] = value
    },
    setRefreshChangeTime({ state }, val) {
      state.refreshChangeTime = val
    }
  }
}
export default HomeModule
