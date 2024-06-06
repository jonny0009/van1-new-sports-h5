import { Module } from 'vuex'
import { Match } from '#/store'
import localStore from '@/utils/localStore'
import { statistics } from '@/api/home'

const matchModule: Module<Match, any> = {
  namespaced: true,
  state: {
    pictureinpictureGidm: null,
    matchInfo: {},
    matchData: {},
    needTimer: false,
    turnSound: true,
    sportsListArr: [],
    liveRoomPlayingUrl: ''
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
    SET_LIVE_ROOM_PLAYING_URL: (state, url: string) => {
      state.liveRoomPlayingUrl = url || ''
    }
  },
  actions: {
    async getSportsList({ state }) {
      const res: any = (await statistics({ showType: 'FAST' })) || {}
      if (res.code === 200) {
        localStore.setItem('sportsListArr', res.data?.stResult || [])
        state.sportsListArr = localStore.getItem('sportsListArr')
      }
    }
  }
}

export default matchModule
