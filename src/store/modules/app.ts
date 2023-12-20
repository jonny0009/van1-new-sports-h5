import { Module } from 'vuex'
import { App } from '#/store'
import { businessConfig, merchantConfig, moduleConfig, queryCMerLanguage } from '@/api/auth'
import { getAllSports } from '@/api/common'

const appModule: Module<App, any> = {
  namespaced: true,
  state: {
    state: true,
    queryCMerLanguage: {},
    businessConfig: {},
    merchantConfig: {},
    moduleConfig: {},
    sports: []
  },
  mutations: {

  },
  actions: {
    async queryCMerLanguage({ state }) {
      const res:any = await queryCMerLanguage() || {}
      if (res.code === 200 && res.data) {
        state.queryCMerLanguage = res.data.accessLanguage || {}
      }
    },
    async businessConfig({ state }) {
      const res:any = await businessConfig() || {}
      if (res.code === 200 && res.data) {
        const title = res.data.title
        document.title = title
        const logo = res.data.logoIcon
        if (logo) {
          const list = document.querySelectorAll('link[rel="icon"]')
          Array.prototype.slice.call(list).map(item => {
            item.setAttribute('href', window.AIConfig.static_url + logo)
          })
        }
      }
      state.businessConfig = res.data || {}
    },
    async merchantConfig({ state }) {
      const res:any = await merchantConfig() || {}
      if (res.code === 200) {
        state.merchantConfig = res.data || {}
      }
    },
    async moduleConfig({ state }) {
      const res:any = await moduleConfig() || {}
      if (res.code === 200) {
        state.moduleConfig = res.data || {}
      }
    },
    async getAllSports({ state }) {
      const res:any = await getAllSports() || {}
      if (res.code === 200) {
        state.sports = res.data || []
      }
    }
  }
}

export default appModule
