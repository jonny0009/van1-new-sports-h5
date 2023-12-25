import { Module } from 'vuex'
import { App } from '#/store'
import localStore from '@/utils/localStore'
import { businessConfig, merchantConfig, moduleConfig, queryCMerLanguage } from '@/api/auth'
import { getAllSports, getDoubleLineInfo } from '@/api/common'

const appModule: Module<App, any> = {
  namespaced: true,
  state: {
    imgChangeTime: '',
    state: true,
    queryCMerLanguage: {},
    businessConfig: {},
    merchantConfig: {},
    moduleConfig: {},
    doubleLineInfo: {},
    sports: []
  },
  mutations: {
  },
  actions: {
    setKeyValue(state:any, { key, value }) {
      state[key] = value
    },
    async queryCMerLanguage({ state }) {
      const res:any = await queryCMerLanguage() || {}
      if (res.code === 200 && res.data) {
        state.queryCMerLanguage = res.data || {}
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
      console.log(1111111111)
      const res:any = await getAllSports() || {}
      if (res.code === 200) {
        localStore.setItem('sports', res.data)
        state.sports = localStore.getItem('sports')
      }
    },
    // 获取单双线数据
    async getDoubleLineInfo({ state }) {
      const res = await getDoubleLineInfo()
      state.doubleLineInfo = res.data || {}
    }
  }
}

export default appModule
