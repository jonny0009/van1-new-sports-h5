import { Module } from 'vuex'
import { Match } from '#/store'

const matchModule: Module<Match, any> = {
  namespaced: true,
  state: {
    matchInfo: {},
    pictureinpictureGidm: null
  },

  mutations: {
    SET_MATCH_INFO: (state, data: any) => {
      state.matchInfo = data
    },
    SET_PIP_GIDM: (state, value: string) => {
      state.pictureinpictureGidm = value
    }
  },

  actions: {}
}

export default matchModule
