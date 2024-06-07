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
        if (res.data && res.data.stResult && res.data.stResult.length) {
          const arr = ['OP_DJ', 'XNFT', 'XNBK']
          const data :any = []
          res.data.stResult.forEach((ele: { gameType: string }) => {
            if (!arr.includes(ele.gameType)) {
              data.push(ele)
            }
          })
          localStore.setItem('sportsListArr', data || [])
          state.sportsListArr = localStore.getItem('sportsListArr')
        } else {
          localStore.setItem('sportsListArr', [])
          state.sportsListArr = localStore.getItem('sportsListArr')
        }
      }
    }
  }
}

export default matchModule
