import { Module } from 'vuex'
import { login, playAccount, getBalance } from '@/api/login'
import { getCMerAccessWallet, betRecordTab } from '@/api/user'
import { User } from '#/store'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { configSettingNew } from '@/api/auth'
import localStore from '@/utils/localStore'

const userModule: Module<User, any> = {
  namespaced: true,
  state: {
    token: getToken(),
    userConfig: {},
    userInfo: {},
    balance: {},
    pendingData: [],
    currency: '',
    currencyData: []
  },
  mutations: {
    SET_TOKEN: (state, token: string) => {
      state.token = token
      setToken(token)
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
              const { access_token, downloadFlag } = data || {}

              // token
              commit('SET_TOKEN', access_token)

              // 用户名
              commit('SET_NAME', userInfo.account)

              // 用户下载标识
              commit('SET_DOWNLOADFLAG', downloadFlag)
            }
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // user logout
    logout({ state, dispatch }) {
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
