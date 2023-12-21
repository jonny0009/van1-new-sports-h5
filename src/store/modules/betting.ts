import localStore from '@/utils/localStore'
import { Module } from 'vuex'
import { Betting } from '#/store'
import { betParams, buyParams, hitParams } from '@/utils/betting'
import { MarketInfo } from '@/entitys/MarketInfo'
import { moreBetting, morePW } from '@/api/betting'
import createBetItem from 'xcsport-lib'
import { points } from '@/utils'
import lang from '@/lang'
// 投注单store
const MarketListKey = '_MarketList_'
const markets = localStore.getItem(MarketListKey) || []
const bettingModule: Module<Betting, any> = {
  namespaced: true,
  state: {
    markets,
    results: [],
    hitState: 1, // 0非点水状态 / 1非点水状态
    mode: 1, // 1单注， 2串关
    boardShow: false,
    isOne: false,
    editId: '',
    s: '',
    t: '',
    comboS: '',
    comboT: ''
  },
  mutations: {},
  getters: {
    // 投注额
    betsGolds(state) {
      let betsGolds = 0
      // 单注总额
      state.markets.map((bet: any) => {
        const { gold = 0, errorCode } = bet
        if (gold && !errorCode) {
          betsGolds += +gold || 0
        }
      })
      return points(betsGolds)
    },
    // 投注前的可赢金额
    betsProfit(state, _state1, state2) {
      const userConfig = state2.userConfig
      const { handicapType } = userConfig || {}
      let betsGolds = 0
      // 单注可赢金额
      state.markets.map((bet: any) => {
        const { gold = 0, errorCode, ior, isEuropePlay } = bet
        if (gold && !errorCode) {
          const buyGold = +gold || 0
          let winCountGold = buyGold * ior - buyGold
          if (isEuropePlay && handicapType === 'H') {
            winCountGold = buyGold * ior
          }
          betsGolds += winCountGold
        }
      })
      return points(betsGolds)
    }
  },
  actions: {
    setMode({ state }, mode) {
      state.mode = mode
    },
    setBoardShow({ state }, { status, playOnlyId }) {
      state.editId = playOnlyId
      state.boardShow = status
    },
    setHitState({ state }, status) {
      state.hitState = status
    },
    changeSingleAmount({ state }, amount) {
      const find = state.markets.find(
        (marketInfo: MarketInfo) => marketInfo.playOnlyId === state.editId
      )
      if (find) {
        find.gold = amount
      }
    },

    // 添加投注项
    addMarket({ state }, marketInfo: MarketInfo) {
      const marketItem = betParams(marketInfo)
      marketItem.gold = 10
      if (state.markets.length === 0) {
        state.isOne = true
      } else {
        state.isOne = false
      }
      state.markets.push(marketItem)
      localStore.setItem(MarketListKey, state.markets)
    },
    // 移除投注项
    deleteMarket({ state }, playOnlyId) {
      state.isOne = false
      const index = state.markets.findIndex((marketInfo: MarketInfo) => {
        if (marketInfo.playOnlyId === playOnlyId) {
          return true
        }
        return false
      })
      if (index >= 0) {
        state.markets.splice(index, 1)
        localStore.slice(MarketListKey, index)
      }
    },
    // update投注项
    updateMarket({ state, rootState }, newBet) {
      const userConfig = rootState.user.userConfig
      const { handicapType } = userConfig || {}
      // 获取新的点水参数
      const { ratioKey, errorCode, eoIor, ior, score, showType, ratio, strong, gameDate } = newBet
      const newBetsMap: any = {}
      newBetsMap[ratioKey] = newBet
      let replaceBet = newBet
      state.markets = state.markets.map((bet: any) => {
        const { ratioKey, isEuropePlay, session } = bet
        // 替换点水返回的并且有值的属性
        const currentBet = newBetsMap[ratioKey]
        if (currentBet) {
          const newBetData: any = {}
          // 旧的点水
          const oldIor = bet.ior
          // 旧的比分
          const oldScore = bet.score
          // 旧的showType
          const oldShowType = bet.showType || bet.showtype
          // 旧的盘口ratio
          const oldRatio = bet.ratio
          // 旧的强弱队strong
          const oldStrong = bet.strong
          const oldGameDate = bet.gameDate
          // 点水返回2个赔率，需要根据单双线来设置当前的点水值
          if (!(isEuropePlay && handicapType === 'H') && eoIor) {
            newBetData.ior = eoIor
          }
          // 新增点水的赔率标记 hitIor,保留点水的ior,投注用到，单独标记，防止污染
          // 点水失败不会返回赔率，所以需要额外判断
          if (ior) {
            newBetData.hitIor = ior
          }
          // 如果点水没有返回比分则用旧的比分
          if (!score) {
            newBetData.score = oldScore
          }
          // 如果点水没有返回showType则用旧的showType
          if (!showType) {
            newBetData.showType = oldShowType
          }
          // 如果点水没有返回ratio则用旧的ratio
          if (!ratio) {
            newBetData.ratio = oldRatio
          }
          // 如果点水没有返回ratio则用旧的ratio
          if (!strong) {
            newBetData.strong = oldStrong
          }
          if (!gameDate) {
            newBetData.gameDate = oldGameDate
          }
          const oldBetKeys = Object.keys(bet)
          const needKeys = ['awayTeam', 'homeTeam', 'gold']
          oldBetKeys.map((key) => {
            if (needKeys.includes(key)) {
              newBetData[key] = bet[key]
            }
          })
          replaceBet = { ...bet, ...currentBet, ...newBetData }
          // 异常情况下回显
          if (errorCode && session) {
            replaceBet.session = session
          }
          if (errorCode && oldIor && !replaceBet.ior) {
            replaceBet.ior = oldIor
          }

          // 防止负数
          if (replaceBet.ior * 1 < 0) {
            replaceBet.ior = 0
          }

          /**
           * 重新生成betitem
           * 需要克隆新的对象,防止createBetItem污染原来的字段,因为createBetItem不是一个纯函数
           */
          const copyBet = JSON.parse(JSON.stringify(replaceBet))
          replaceBet.betItem = createBetItem(copyBet, 2)
          return replaceBet
        }
        return bet
      })
      localStore.setItem(MarketListKey, state.markets)
      return replaceBet
    },
    // 单注批量点水,更新投注项
    async marketHit({ state, dispatch }, betting:boolean = false) {
      if (state.markets.length === 0 || (!betting && state.hitState !== 1)) {
        return false
      }
      const params = hitParams(state.markets)
      const res: any = await morePW(params).catch(() => {})
      const code = (res && +res.code) || -1
      if (code === 200) {
        const resData = res.data
        const { s, t, orderData } = resData
        state.s = s
        state.t = t
        const newBets = orderData || []
        newBets.map((marketInfo: any) => {
          dispatch('updateMarket', marketInfo)
        })
      }
    },
    // 单注下单
    async marketBetting({ state, dispatch }) {
      if (state.markets.length === 0) {
        return false
      }
      dispatch('setHitState', 0)
      await dispatch('marketHit', true)
      const params: any = buyParams(state.markets, state.s, state.t)
      const res: any = await moreBetting(params).finally(() => {
        dispatch('setHitState', 1)
      })
      if (res?.code === 200 && res?.data) {
        const bettingData = res.data.bettingData || []
        state.results = bettingData.map((order:MarketInfo) => {
          const playOnlyId = MarketInfo.getPlayOnlyId(order)
          const find = state.markets.find((marketInfo:MarketInfo) => {
            return MarketInfo.getPlayOnlyId(marketInfo) === playOnlyId
          })
          return { ...find, ...order }
        })
        dispatch('clearMarkets')
      } else {
        return Promise.reject(lang.global.t('betting.errorTips'))
      }
    },
    // 清空
    clearMarkets({ state }) {
      state.isOne = false
      state.markets = []
      localStore.clear(MarketListKey)
    },
    // 清空
    clearResult({ state }) {
      state.results = []
    }
  }
}

export default bettingModule
