import { Module } from 'vuex'
import { Home } from '#/store'
import { recommendEventsCount } from '@/api/home'

const HomeModule: Module<Home, any> = {
  namespaced: true,
  state: {
    refreshChangeTime: '',
    RrefShow: true,
    OUrefShow: true,
    MrefShow: true,
    PDrefShow: true,
    initTimeData: {}
  },
  mutations: {},
  getters: {},
  actions: {
    setKeyValue(state: any, { key, value }) {
      state.state[key] = value
    },
    setRefreshChangeTime({ state }, val) {
      state.refreshChangeTime = val
    },
    // 用户信息
    async initTimeDataInfo({ state }, params = {}) {
      const res: any = (await recommendEventsCount(params)) || {}
      if (res.code === 200) {
        state.initTimeData = res.data || {}
      }
    }
  }
}
export default HomeModule
