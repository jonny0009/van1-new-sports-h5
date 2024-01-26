import { Module } from 'vuex'
import { login, playAccount, getBalance } from '@/api/login'
import { getCMerAccessWallet, betRecordTab, getGameManyInfo, selectChampionManyName, playerInfo, getCashoutInfo, confirmCashout } from '@/api/user'
import { User } from '#/store'
import { getToken, setToken, removeToken, getAnonymity, setAnonymity } from '@/utils/auth'
import { configSettingNew } from '@/api/auth'
import localStore from '@/utils/localStore'
import { anonyToken } from '@/api/common'
const isAnonymity = getAnonymity()
const userModule: Module<User, any> = {
  namespaced: true,
  state: {
    token: getToken(),
    userConfig: {},
    userInfo: {},
    balance: {},
    pendingData: [],
    currency: '',
    currencyData: [],
    teamNameList: [],
    championLangList: [],
    peopleInfo: {},
    aheadOrderList: [],
    resultTab: 0,
    keepCache: false,
    locationHeight: false,
    scrollNumY: 0,
    isAnonymity,
    currentWallet: {}
  },
  mutations: {
    SET_TOKEN: (state, token: string) => {
      state.token = token
      setToken(token)
    },
    SET_ANONYMITY: (state, status) => {
      state.isAnonymity = status
      setAnonymity(status)
    }

  },
  actions: {
    // user login
    login({ commit }, userInfo: any) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(async (res: any) => {
            const { code, data } = res || {}
            if (code === 200) {
              // eslint-disable-next-line camelcase
              const { access_token } = data || {}

              commit('SET_TOKEN', access_token)
              commit('SET_ANONYMITY', false)
            }
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // user logout
    logout({ dispatch }) {
      return new Promise((resolve) => {
        dispatch('clearUserInfo')
        resolve({})
      })
    },
    // 用户配置
    async configSettingNew({ state }, params = {}) {
      localStore.setItem('plateMaskKey', params.handicapType)
      const res = await configSettingNew(params)
      state.userConfig = res.data || {}
    },
    // 用户配置
    async anonyToken({ commit }) {
      const res = await anonyToken()
      const token = res.data
      setToken(token)
      commit('SET_TOKEN', token)
      commit('SET_ANONYMITY', true)
    },
    // 用户信息
    async userInfo({ state }, params = {}) {
      const res:any = await playAccount(params) || {}
      if (res.code === 200) {
        state.userInfo = res.data || {}
      }
    },
    // 获取钱包币种
    async getCurrency({ state }, params = {}) {
      const res:any = await getCMerAccessWallet(params) || {}
      if (res.code === 200) {
        state.currencyData = res.data || {}
        state.currency = res.data[0].currency || {}
        state.currentWallet = res.data[0]
        this.dispatch('user/getBalance', { wid: res.data[0].walletId || '' })
      }
    },

    // 账户余额
    async getBalance({ state }, params = { wid: 1 }) {
      const res:any = await getBalance(params) || {}
      if (res.code === 200) {
        state.balance = res.data || {}
      }
    },
    // 队伍多语言
    async getMoreTeamList({ state }, params) {
      const res:any = await getGameManyInfo({ gidms: params }) || []
      if (res.code === 200) {
        state.teamNameList = [...state.teamNameList, ...res.data || []]
      }
    },
    // 冠军国际化
    async getChampionLang({ state }, params) {
      const res:any = await selectChampionManyName({ gidm: params }) || []
      if (res.code === 200) {
        state.championLangList = [...state.championLangList, ...res.data || []]
      }
    },
    // 提前结算信息
    async getOrderList({ state }, params) {
      const res:any = await getCashoutInfo({ cashoutInfoReq: JSON.parse(params) }) || []
      if (res.code === 200) {
        state.aheadOrderList = [...state.aheadOrderList, ...res.data || []]
      }
    },
    // 提前结算信息
    async handleConfirmCashout({ state, dispatch }, params) {
      const res:any = await confirmCashout(params) || []
      if (res.code === 200) {
        dispatch('getBalance')
        dispatch('pendingOrder')
      }
    },
    // 获取账户信息
    async getAccountInfo({ state }, params) {
      const res:any = await playerInfo({ fPlayerId: state.userInfo.playerId }) || []
      if (res.code === 200) {
        state.peopleInfo = res.data || {}
      }
    },
    // 结果tabIndex
    async getResultTab({ state }, params) {
      state.resultTab = params
    },

    // 页面高度
    async getScrollNumY({ state }, params) {
      state.scrollNumY = params
    },
    // 是否有坐标高度
    async getLocationHeight({ state }, params) {
      state.locationHeight = params
    },
    // 进行中的注单
    async pendingOrder({ state }, params = { }) {
      const res: any = await betRecordTab({
        orderState: '0',
        page: 1,
        pageSize: 99,
        beginTime: '',
        endTime: ''
      }) || {}
      if (res.code === 200) {
        state.pendingData = res.data || []
      }
    },
    // remove token
    clearUserInfo({ commit, dispatch }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        dispatch('tagsView/delAllViews', null, { root: true })
        removeToken()
        resolve(true)
        location.reload()
      })
    }

  }
}

export default userModule
