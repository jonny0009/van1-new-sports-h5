import { Module } from 'vuex'
import { App } from '#/store'
import localStore from '@/utils/localStore'
import { businessConfig, merchantConfig, moduleConfig, queryCMerLanguage } from '@/api/auth'
import { getAllSports, getDoubleLineInfo, getConfig } from '@/api/common'
import { getTheme, setTheme } from '@/utils/auth'

const appModule: Module<App, any> = {
  namespaced: true,
  state: {
    showFixedBet: false,
    state: true,
    theme: getTheme(),
    queryCMerLanguage: {},
    businessConfig: {},
    merchantConfig: {},
    moduleConfig: {},
    doubleLineInfo: {},
    sports: [],
    globalBarHeaderHeight: 48,
    pictureinpictureGidm: null, // 画中画赛事id
    mantainMsg: null,
    systemTime: null,
    customizeConfig: {}
  },
  mutations: {
    SET_THEME: (state, theme: string) => {
      state.theme = theme
      setTheme(theme)
    },
    SET_PIP_GIDM: (state, value: string) => {
      state.pictureinpictureGidm = value
    },
    updateMantainInfo(state, msg) {
      state.mantainMsg = msg
      // saveToStorage('mantainInfo', { msg })
    }
  },
  actions: {
    setKeyValue(state: any, { key, value }) {
      state.state[key] = value
    },
    async queryCMerLanguage({ state }) {
      const res: any = (await queryCMerLanguage()) || {}
      if (res.code === 200 && res.data) {
        state.queryCMerLanguage = res.data || {}
      }
    },
    async businessConfig({ state }) {
      const res: any = (await businessConfig()) || {}
      state.businessConfig = res.data || {}
      state.systemTime = res.systemTime
    },
    async merchantConfig({ state }) {
      const res: any = (await merchantConfig()) || {}
      if (res.code === 200) {
        state.merchantConfig = res.data || {}
      }
    },
    async moduleConfig({ state }) {
      const res: any = (await moduleConfig()) || {}
      if (res.code === 200) {
        state.moduleConfig = res.data || {}
      }
    },
    async getAllSports({ state }) {
      const res: any = (await getAllSports()) || {}
      if (res.code === 200) {
        localStore.setItem('sports', res.data)
        state.sports = localStore.getItem('sports')
      }
    },
    // 获取单双线数据
    async getDoubleLineInfo({ state }) {
      const res = await getDoubleLineInfo()
      state.doubleLineInfo = res.data || {}
    },
    async getConfig({ state }) {
      const res: any = await getConfig()
      state.customizeConfig = res.data || {}

      if (res.code === 200 && res.data) {
        const title = res.data.iconSpan
        document.title = title
        const logo = res.data.webIcon
        if (logo) {
          const list = document.querySelectorAll('link[rel="icon"]')
          Array.prototype.slice.call(list).map((item) => {
            item.setAttribute('href', window.AIConfig.static_url + logo)
          })
        }
      }
    }

  }
}

export default appModule
