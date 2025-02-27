import { Module } from 'vuex'
import { App } from '#/store'
import localStore from '@/utils/localStore'
import { businessConfig, merchantConfig, moduleConfig, queryCMerLanguage } from '@/api/auth'
import { getAllSports, getDoubleLineInfo, getConfig, getHomeTabsSports } from '@/api/common'
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
    homeStyle: 2, // 2经典 1上导航  3双排上导航
    moduleConfig: {},
    isShowCasino: false,
    doubleLineInfo: {},
    sports: [],
    homeTabsSports: [],
    globalBarHeaderHeight: 48,
    liveBarHeaderHeight: '50.333vw',
    pictureinpictureGidm: null, // 画中画赛事id
    mantainMsg: null,
    systemTime: null,
    customizeConfig: {},
    matchLiveIndex: 0,
    showSportsTop: true,
    bettingSlipState: true,
    videoMute: false
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
    // 结果tabIndex
    async setMatchLiveIndex({ state }, params) {
      state.matchLiveIndex = state.matchLiveIndex + params
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
        state.homeStyle = res.data?.homeStyle || 2
      }
    },
    async moduleConfig({ state }) {
      const res: any = (await moduleConfig({ modeType: 4 })) || {}
      if (res.code === 200) {
        state.moduleConfig = res.data || {}
        const moduleList = res.data.moduleList || []
        if (moduleList && moduleList.length) {
          const obj = moduleList.find((item: any) => item.code === 'lucky7_casino')
          if (obj.code) {
            state.isShowCasino = obj.enable === 1
          }
        }
      }
    },
    async getAllSports({ state }) {
      const res: any = (await getAllSports()) || {}
      if (res.code === 200) {
        const arr = ['OP_DJ', 'XNFT', 'XNBK']
        const data :any = []
        res.data.forEach((ele: { gameType: string }) => {
          if (!arr.includes(ele.gameType)) {
            data.push(ele)
          }
        })
        localStore.setItem('sports', data)
        state.sports = localStore.getItem('sports')
      }
    },
    async getHomeTabsSports({ state }) {
      const res: any = (await getHomeTabsSports({ showType: 'FAST' })) || {}
      if (res.code === 200) {
        localStore.setItem('homeTabsSports', res.data)
        state.homeTabsSports = localStore.getItem('homeTabsSports')
      }
    },
    // 获取单双线数据
    async getDoubleLineInfo({ state }) {
      const res = await getDoubleLineInfo()
      state.doubleLineInfo = res.data || {}
    },
    async getConfig({ state }, params = { wid: 1 }) {
      const res: any = await getConfig(params)
      state.customizeConfig = res.data || {}

      if (res.code === 200 && res.data) {
        const title = res.data.iconSpan
        document.title = title || '新体育'
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
