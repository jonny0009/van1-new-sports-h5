import localStore from '@/utils/localStore'
import { Module } from 'vuex'
import { Betting } from '#/store'
import { betParams } from '@/utils/betting'
import { MarketInfo } from '@/entitys/MarketInfo'

// 投注单store
const MarketListKey = '_MarketList_'
const AcceptAllMarketRatioChangesKey = 'Accept_All_Market_Ratio_Changes'
const markets = localStore.getItem(MarketListKey) || []
let ratioChangesState: any = localStore.getItem(AcceptAllMarketRatioChangesKey)
if (ratioChangesState === null) {
  ratioChangesState = true
}
const bettingModule: Module<Betting, any> = {
  namespaced: true,
  state: {
    markets,
    ratioChangesState
  },
  mutations: {

  },
  actions: {
    // 添加投注项
    addMarket({ state }, marketInfo: MarketInfo) {
      const marketItem = betParams(marketInfo)
      marketItem.ior = marketItem.vior
      state.markets.push(marketItem)
      localStore.setItem(MarketListKey, state.markets)
    },
    // 移除投注项
    deleteMarket({ state }, playOnlyId) {
      const index = state.markets.findIndex((play: MarketInfo) => {
        if (play.playOnlyId === playOnlyId) {
          return true
        }
        return false
      })
      if (index >= 0) {
        state.markets.splice(index, 1)
        localStore.slice(MarketListKey, index)
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
