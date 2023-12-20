import { Module } from 'vuex'
import { login } from '@/api/login'
import { User } from '#/store'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { configSettingNew } from '@/api/auth'

const userModule: Module<User, any> = {
  namespaced: true,
  state: {
    token: getToken(),
    userConfig: {}
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
      const res = await configSettingNew(params)
      state.userConfig = res.data || {}
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
