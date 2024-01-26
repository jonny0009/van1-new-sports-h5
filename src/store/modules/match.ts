import { Module } from 'vuex'
import { Match } from '#/store'

const matchModule: Module<Match, any> = {
  namespaced: true,
  state: {
    pictureinpictureGidm: null,
    matchInfo: {},
    matchData: {},
    needTimer: false
  },

  mutations: {
    SET_PIP_GIDM: (state, value: string) => {
      state.pictureinpictureGidm = value
    },
    SET_MATCH_INFO: (state, data: any) => {
      state.matchInfo = data
    },
    SET_NEED_TIMER: (state, flag: boolean) => {
      state.needTimer = flag
    }
  },

  actions: {}
}

export default matchModule
