import { Module } from 'vuex'
import { Match } from '#/store'

const matchModule: Module<Match, any> = {
  namespaced: true,
  state: {
    pictureinpictureGidm: null,
    matchInfo: {},
    matchData: {},
    needTimer: false,
    turnSound: false,
    sportsListArr: []
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
    },
    SET_TURN_SOUND: (state, flag: boolean) => {
      state.turnSound = !flag
    },
    SET_SPORTS_LIST(state, data: any) {
      state.sportsListArr = data
    }
  },

  actions: {}
}

export default matchModule
