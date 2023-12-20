import localStore from '@/utils/localStore'
import { Module } from 'vuex'
import { Betting } from '#/store'
import { betParams, buyParams, hitParams } from '@/utils/betting'
import { MarketInfo } from '@/entitys/MarketInfo'
import { moreBetting, morePW } from '@/api/betting'
import createBetItem from 'xcsport-lib'

// 投注单store
const MarketListKey = '_MarketList_'
const markets = localStore.getItem(MarketListKey) || []
const bettingModule: Module<Betting, any> = {
  namespaced: true,
  state: {
    markets,
    isOne: false,
    s: '',
    t: '',
    comboS: '',
    comboT: ''
  },
  mutations: {},
  actions: {
    // 添加投注项
    addMarket({ state }, marketInfo: MarketInfo) {
      const marketItem = betParams(marketInfo)
      marketItem.ior = marketItem.vior
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
    // 移除投注项
    updateMarket({ state }, newBet) {
      const userConfig = this.getters['user/userConfig']
      const { handicapType } = userConfig || {}
      // 获取新的点水参数
      const {
        ratioKey,
        errorCode,
        eoIor,
        ior,
        score,
        showType,
        ratio,
        strong,
        gameDate
      } = newBet
      const newBetsMap:any = {}
      newBetsMap[ratioKey] = newBet
      let replaceBet = newBet
      state.markets = state.markets.map((bet:any) => {
        const { ratioKey, isEuropePlay, session } = bet
        // 替换点水返回的并且有值的属性
        const currentBet = newBetsMap[ratioKey]
        if (currentBet) {
          const newBetData:any = {}
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
          oldBetKeys.map(key => {
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
    async marketHit({ state, dispatch }) {
      if (state.markets.length === 0) {
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
        newBets.map((marketInfo:any) => {
          dispatch('updateMarket', marketInfo)
        })
      }
    },
    // 单注下单
    async marketBetting({ state, dispatch }) {
      if (state.markets.length === 0) {
        return false
      }
      if (state.markets.length > 1) {
        await dispatch('marketHit')
      }
      const params:any = buyParams(state.markets, state.s, state.t)
      const res:any = await moreBetting(params).catch(() => {})
      if (res.code === 200 && res.data) {
        const resData = res.data
        const { s, t, orderData } = resData
        state.s = s
        state.t = t
        const newBets = orderData || []
        newBets.map((marketInfo:any) => {
          dispatch('updateMarket', marketInfo)
        })
      }
    },
    // 清空
    clearMarkets({ state }) {
      state.markets = []
      localStore.clear(MarketListKey)
    }
  }
}

export default bettingModule
