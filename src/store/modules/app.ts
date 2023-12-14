import { Module } from 'vuex'
import { App } from '#/store'

const appModule: Module<App, any> = {
  namespaced: true,
  state: {
    device: 'desktop',
    size: 'medium',
    sidebar: {
      opened: true,
      withoutAnimation: false
    }
  },
  mutations: {
    TOGGLE_SIDEBAR: (state:any) => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state:any, withoutAnimation: boolean) => {
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state:any, device: string) => {
      state.device = device
    },
    SET_SIZE: (state:any, size: string) => {
      state.size = size
    }
  },
  actions: {
    toggleSideBar({ commit }:any) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }:any, withoutAnimation: boolean) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }:any, device: string) {
      commit('TOGGLE_DEVICE', device)
    },
    setSize({ commit }:any, size: string) {
      commit('SET_SIZE', size)
    }
  }
}

export default appModule
