import localStore from '@/utils/localStore'
import errorCodes from '@/utils/betting/errorCodes'
import { Module } from 'vuex'
import { Betting } from '#/store'
import store from '@/store'
import router from '@/router'
import {
  betParams,
  buyCombosParams,
  buyParams,
  chaiCombo,
  combosHitParams,
  getComboMarkets,
  hitParams
} from '@/utils/betting'
import { MarketInfo } from '@/entitys/MarketInfo'
import { betComboOrder, comboBetting, moreBetting, morePW } from '@/api/betting'
import lang from '@/lang'
import { createBetItem, lib } from 'xcsport-lib'
import { accMul, accSubtr, moneyFormat } from '@/utils/math'
import { getBetRatioToNumber, getRatioPlay } from '@/utils'
const { isStrong } = lib

// 投注单store
const MarketListKey = '_MarketList_'
const AcceptAllMarketOddChangesKey = 'Accept_All_Market_Odd_Changes'
const markets = localStore.getItem(MarketListKey) || []
let oddChangesState: any = localStore.getItem(AcceptAllMarketOddChangesKey)
if (oddChangesState === null) {
  oddChangesState = false
}
const bettingModule: Module<Betting, any> = {
  namespaced: true,
  state: {
    oddChangesState,
    markets,
    comboMarkets: [],
    parlayMarkets: [],
    combos: [],
    combosErrorIds: [],
    results: [],
    hitState: 1, // 0非点水状态 / 1非点水状态
    mode: 1, // 1单注， 2串关
    boardShow: false,
    isOne: false,
    editId: '',
    comboAmount: 0,
    s: '',
    t: '',
    comboS: '',
    comboT: '',
    moreShow: false, // 更多玩法
    moreParams: {}
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
      return moneyFormat(betsGolds)
    },
    // 投注前的可赢金额
    betsProfit(state, _state1, state2) {
      const userConfig = state2.user.userConfig
      const { handicapType } = userConfig || {}
      let betsGolds = 0
      // 单注可赢金额
      state.markets.forEach((bet: any) => {
        const { gold = 0, errorCode, ior, isEuropePlay } = bet
        if (gold && !errorCode) {
          const buyGold = +gold || 0
          let winCountGold: any = accSubtr(accMul(buyGold, ior), buyGold)
          if (isEuropePlay && handicapType === 'H') {
            winCountGold = accMul(buyGold, ior)
          } else if (isEuropePlay && handicapType === 'I') {
            winCountGold = accMul(buyGold, Math.abs(ior))
          } else if (isEuropePlay && handicapType === 'M') {
            winCountGold = accMul(buyGold, Math.abs(ior))
          }
          // debugger
          betsGolds += winCountGold
        }
      })
      return moneyFormat(betsGolds)
    },
    // 串关投注总额
    combosBetGolds(state) {
      let betsGolds = 0
      state.combos.map((combo: any) => {
        const { orderNumber, errorCode } = combo
        if (state.comboAmount && !errorCode) {
          betsGolds += state.comboAmount * orderNumber
        }
      })
      return betsGolds
    },
    // 串关可赢金额
    combosProfit(state) {
      let betsGolds = 0
      // 串关可赢金额
      state.combos.map((combo: any) => {
        const { comboList, errorCode } = combo
        if (state.comboAmount && !errorCode && comboList && comboList.length > 0) {
          comboList.map((comboArray: any) => {
            let iorCount = 1
            comboArray.map((bet: any) => {
              iorCount *= bet.ior * 1
            })
            betsGolds += iorCount * state.comboAmount - state.comboAmount
          })
        }
      })
      return betsGolds
    },
    // 串关ior
    combosIor(state) {
      let iors = 0
      // 串关可赢金额
      state.combos.map((combo: any) => {
        const { comboList, errorCode } = combo
        if (!errorCode && comboList && comboList.length > 0) {
          comboList.map((comboArray: any) => {
            let iorCount = 1
            comboArray.map((bet: any) => {
              iorCount *= bet.ior * 1
            })
            iors += iorCount
          })
        }
      })
      return iors
    },
    // 有效投注注数
    effectiveMarkets(state) {
      return state.markets.filter((order: any) => {
        return (
          !order.errorCode &&
          order.gold * 1 >= order.goldMin * 1 &&
          order.gold * 1 <= order.goldMax * 1 &&
          order.gold * 1 > 0 &&
          !order.iorChange &&
          !order.ratioChange
        )
      })
    },
    // 有效投注注数
    comboMarkets(state) {
      return getComboMarkets(state.markets)
    },
    comboMarketPlayOnlyIds(state) {
      const markets = getComboMarkets(state.markets)
      const getPlayOnlyIds = markets.map((i: MarketInfo) => i.playOnlyId)
      return getPlayOnlyIds
    }
  },
  actions: {
    setOddChangesState({ state }, val) {
      localStore.setItem(AcceptAllMarketOddChangesKey, val)
      state.oddChangesState = val
    },
    setMode({ state }, mode) {
      state.mode = mode
      state.comboMarkets = []
    },
    setBoardShow({ state }, { status, playOnlyId }) {
      state.editId = playOnlyId
      state.boardShow = status
    },
    setHitState({ state }, status) {
      state.hitState = status
    },
    changeSingleAmount({ state }, amount) {
      const find = state.markets.find((marketInfo: MarketInfo) => marketInfo.playOnlyId === state.editId)
      if (find) {
        find.gold = amount * 1 || ''
        const goldMax = find.goldMax * 1
        if (find.gold * 1 > goldMax) {
          find.gold = goldMax
        }
      }
    },
    changeComboAmount({ state }, amount) {
      state.comboAmount = amount * 1 || ''
    },
    inputSingleAmount({ state }, amount) {
      const find = state.markets.find((marketInfo: MarketInfo) => marketInfo.playOnlyId === state.editId)
      if (!find) {
        return false
      }
      if (amount === 'back') {
        const e = '' + find.gold
        e.length === 1 ? (find.gold = 0) : (find.gold = e.substring(0, e.length - 1))
      } else {
        find.gold = (find.gold + amount) * 1 || ''
      }
      if (find.gold * 1 === 0) {
        find.gold = ''
      }
      const goldMax = find.goldMax * 1
      if (find.gold * 1 > goldMax) {
        find.gold = goldMax
      }
    },
    inputComboAmount({ state }, amount) {
      if (amount === 'back') {
        const e = '' + state.comboAmount
        e.length === 1 ? (state.comboAmount = 0) : (state.comboAmount = e.substring(0, e.length - 1))
      } else {
        state.comboAmount = (state.comboAmount + amount) * 1 || ''
      }
      if (state.comboAmount * 1 === 0) {
        state.comboAmount = ''
      }
    },
    setMoreShow({ state }, { status, moreParams }) {
      state.moreShow = status
      state.moreParams = moreParams
      // router.push(`/bet/${moreParams.gidm}`)
      router.push(`/match/more/${moreParams.gidm}?gameType=${moreParams.gameType}`)
    },

    // 添加投注项
    addMarket({ state, dispatch }, marketInfo: MarketInfo) {
      const marketItem = betParams(marketInfo)
      marketItem.gold = 0
      if (state.markets.length === 0) {
        setTimeout(() => {
          state.isOne = true
        })
      } else {
        state.isOne = false
      }
      dispatch('clearResult')
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
      const index1 = state.comboMarkets.findIndex((marketInfo: MarketInfo) => {
        if (marketInfo.playOnlyId === playOnlyId) {
          return true
        }
        return false
      })
      if (index >= 0) {
        state.markets.splice(index, 1)
        state.markets = state.markets.slice()
        localStore.slice(MarketListKey, index)
      }
      if (index1 >= 0) {
        state.comboMarkets.splice(index1, 1)
      }
    },
    clearIorChange({ state }, playOnlyId) {
      const find = state.markets.find((marketInfo: MarketInfo) => {
        return marketInfo.playOnlyId === playOnlyId
      })
      if (find) {
        find.iorChange = ''
      }
    },
    clearOddChange({ state }, playOnlyId) {
      const find = state.markets.find((marketInfo: MarketInfo) => {
        return marketInfo.playOnlyId === playOnlyId
      })
      if (find) {
        find.ratioChange = ''
      }
    },
    // update投注项
    updateMarket({ state, rootState }, newBet) {
      const userConfig = rootState.user.userConfig
      const { handicapType, acceptAll } = userConfig || {}
      const autoRatio = acceptAll === 1
      const autoOdd = state.oddChangesState || false
      // 获取新的点水参数
      const { ratioKey, errorCode, ior, score, showType, ratio, strong, gameDate, playType } = newBet
      let eoIor = (newBet.eoIor * 1).toFixed(2)
      const newBetsMap: any = {}
      newBetsMap[ratioKey] = newBet
      let replaceBet = newBet
      state.markets = state.markets.map((bet: any) => {
        const { ratioKey, isEuropePlay, session } = bet
        // 替换点水返回的并且有值的属性
        const currentBet = newBetsMap[ratioKey]
        let iorChange = ''
        let ratioChange = ''
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
          if (isEuropePlay && handicapType === 'E' && eoIor) {
            newBetData.ior = eoIor
          } else if (!isEuropePlay && eoIor) {
            newBetData.ior = eoIor
          }
          const newIor = newBetData.ior * 1 || ior * 1

          if (oldIor * 1 !== newIor && !autoRatio) {
            console.log('oldIor', oldIor)
            console.log('newIor', newIor)
            if (oldIor * 1 < newIor) {
              iorChange = 'up'
            } else {
              iorChange = 'down'
            }
          }
          const newRatioQuite = getBetRatioToNumber(ratio)
          const oldRatioQuite = getBetRatioToNumber(bet.ratio)

          const isRatioPlay = getRatioPlay(bet)
          if (isRatioPlay && newRatioQuite * 1 !== oldRatioQuite * 1 && !autoOdd) {
            console.log('old', oldRatioQuite)
            console.log('new', newRatioQuite)
            console.log('cur', ratio)
            if (bet.ratio * 1 < ratio) {
              ratioChange = 'up'
            } else {
              ratioChange = 'down'
            }
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
          replaceBet = { ...bet, ...currentBet, ...newBetData, iorChange, ratioChange }
          // 异常情况下回显
          if (errorCode && session) {
            replaceBet.session = session
          }
          if (errorCode && oldIor && !replaceBet.ior) {
            replaceBet.ior = oldIor
          }

          // 防止负数,印尼马来存在负数,去掉
          // if (replaceBet.ior * 1 < 0) {
          //   replaceBet.ior = 0
          // }

          /**
           * 重新生成betitem
           * 需要克隆新的对象,防止createBetItem污染原来的字段,因为createBetItem不是一个纯函数
           */
          const copyBet = JSON.parse(JSON.stringify(replaceBet))
          replaceBet.betItem = createBetItem(copyBet, 2)
          replaceBet.ratioName = replaceBet.betItem
          const getRatioPlayInfo = getRatioPlay(copyBet)
          if (getRatioPlayInfo) {
            const { ratioParams1, ratioParams2, ratioTag } = getRatioPlayInfo
            replaceBet.ratioTagState = !!ratioTag
            replaceBet.ratioTag = ratioTag
            replaceBet.ratioParams1 = ratioParams1
            replaceBet.ratioParams2 = ratioParams2
          }

          return replaceBet
        }
        return bet
      })
      localStore.setItem(MarketListKey, state.markets)
      return replaceBet
    },
    // 单注批量点水,更新投注项
    async marketHit({ state, dispatch }, betting: boolean = false) {
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
    // 串关批量点水,更新投注项
    async comboMarketHit({ state, getters }, betting: boolean = false) {
      if (state.comboMarkets.length === 0) {
        const markets = JSON.parse(JSON.stringify(state.markets))
        state.comboMarkets = markets.map((market: MarketInfo) => {
          const { eoIor, ior } = market
          market.ior = eoIor * 1 || ior * 1
          return market
        })
      }

      if (getters.comboMarkets.length < 2 || (!betting && state.hitState !== 1)) {
        return false
      }

      const params: any = combosHitParams(state.comboMarkets)
      const res: any = await betComboOrder(params).catch(() => {})
      if (res?.code === 200 && res?.data && res?.data?.length) {
        const data: any = res?.data[0] || {}
        const orderData = data.orderData || []
        const errorCode = data.errorCode
        const goldGmin = data.goldGmin
        const goldGmax = data.goldGmax
        const bodyVOS = data.bodyVOS
        const errorIds = data.errorIds
        const s = data.s
        const t = data.t
        state.comboS = s
        state.comboT = t
        state.combosErrorIds = errorIds || []
        // 有异常的情况,全部锁盘
        if (errorCode || (Array.isArray(errorIds) && errorIds.length)) {
          // if (['1X034'].includes(errorCode)) {
          //   // 根据返回出异常的errorIds标出有异常的玩法
          //   if (Array.isArray(errorIds) && errorIds.length) {
          //     // dispatch('bet/updateComboBets', errorIds, { root: true })
          //     // dispatch('setCombosStructure', [])
          //   }
          // }
        } else {
          const comboCount = state.comboMarkets.length
          const comboList = chaiCombo(comboCount, orderData)
          let combos = [
            {
              betNuiqueKey: 'comboOrderKey-' + comboCount,
              comboNumber: comboCount,
              betNumber: '',
              gold: '',
              lock: false,
              orderNumber: 1,
              comboList,
              goldMin: goldGmin,
              goldMax: goldGmax
            }
          ]
          if (combos) {
            // BI数据需接受接口返回的最大最小值限制
            if (Array.isArray(bodyVOS) && bodyVOS.length) {
              const newCombos: any = []
              bodyVOS.map((item) => {
                const { mbType, mbSubType, goldGmin, goldGmax } = item
                //  串1
                const betNum = mbSubType * 1
                //  注数
                const combo = mbType * 1
                const currentCombo = combos.find((order) => {
                  const { comboNumber } = order
                  return combo === comboNumber && betNum === 1
                })
                if (currentCombo) {
                  newCombos.push({
                    ...currentCombo,
                    goldMin: goldGmin,
                    goldMax: goldGmax
                  })
                }
              })
              combos = newCombos
            }
            state.comboMarkets = state.comboMarkets.map((marketInfo: MarketInfo) => {
              const playOnlyId = MarketInfo.getPlayOnlyId(marketInfo)
              const { awayTeam, homeTeam } = marketInfo
              const find = orderData.find((info: MarketInfo) => {
                return MarketInfo.getPlayOnlyId(info) === playOnlyId
              })
              if (find) {
                const gameType = find.gameType || marketInfo.gameType
                return { ...marketInfo, ...find, gameType, awayTeam, homeTeam }
              }
              return marketInfo
            })
          }
          state.combos = combos
        }
      }
    },
    // 单注下单
    async marketBetting({ state, rootState, dispatch }) {
      if (state.markets.length === 0) {
        return false
      }
      dispatch('setHitState', 0)
      await dispatch('marketHit', true)
      const params: any = buyParams(state.markets, state.s, state.t)

      const count = params.betSubList.reduce((gold: number, item: any) => {
        return gold + item.gold * 1
      }, 0)
      if (rootState.user.balance?.balance * 1 < count) {
        dispatch('setHitState', 1)
        return Promise.reject(lang.global.t('betting.insufficientBalance'))
      }

      if (params.betSubList.length === 0) {
        dispatch('setHitState', 0)
        return false
      }
      const res: any = await moreBetting(params).finally(() => {
        dispatch('setHitState', 1)
      })
      const code = res?.code
      if (code === 200 && res?.data) {
        const bettingData = res.data.bettingData || []
        state.results = bettingData.map((order: MarketInfo) => {
          const playOnlyId = MarketInfo.getPlayOnlyId(order)
          const find = state.markets.find((marketInfo: MarketInfo) => {
            return MarketInfo.getPlayOnlyId(marketInfo) === playOnlyId
          })
          return { ...find, ...order }
        })
        dispatch('clearMarkets')
        store.dispatch('user/pendingOrder')
        store.dispatch('user/getCurrency')
      } else {
        let errorStr: string = ''
        if (errorCodes.netErrorCodes.indexOf(code) > -1) {
          errorStr = lang.global.t('betting.errors1.error1')
        } else if (errorCodes.betFailCodes.indexOf(code) > -1) {
          errorStr = lang.global.t('betting.errors1.error2')
        } else if (errorCodes.unusualAccountCodes.indexOf(code) > -1) {
          errorStr = lang.global.t('betting.errors1.error3')
        } else if (errorCodes.memberLoginCountCode === code) {
          errorStr = lang.global.t('betting.errors1.error4')
        } else if (errorCodes.pwMatchCloseCodes.indexOf(code) > -1) {
          errorStr = lang.global.t('betting.errors1.error5')
        } else {
          errorStr = lang.global.t('betting.errors1.error6')
        }
        return Promise.reject(errorStr)
      }
    },
    // 串关下单
    async comboMarketBetting({ state, getters, rootState, dispatch }) {
      if (state.comboMarkets.length === 0 || state.combos.length === 0) {
        return false
      }
      const params = buyCombosParams(state.comboMarkets, state.combos, {
        gold: state.comboAmount,
        s: state.comboS,
        t: state.comboT
      })
      if (rootState.user.balance?.balance * 1 < state.comboAmount * 1) {
        return Promise.reject(lang.global.t('betting.insufficientBalance'))
      }

      dispatch('setHitState', 0)
      const res: any = await comboBetting(params)
        .finally(() => {
          dispatch('setHitState', 1)
        })
        .catch(() => {})
      if (res?.code === 200 && res?.data) {
        const { errorCode } = res?.data || {}
        state.results = [
          {
            errorCode,
            ior: getters.combosIor,
            count: state.comboMarkets.length,
            list: JSON.parse(JSON.stringify(state.comboMarkets))
          }
        ]
        dispatch('clearMarkets')
        store.dispatch('user/pendingOrder')
        store.dispatch('user/getCurrency')
      } else {
        return Promise.reject(lang.global.t('betting.errorTips'))
      }
    },
    // 清空
    clearMarkets({ state }) {
      state.isOne = false
      state.markets = []
      state.comboMarkets = []
      localStore.clear(MarketListKey)
    },
    // 清空
    clearResult({ state }) {
      state.results = []
    },
    // 清空
    clearComboMarkets({ state }) {
      state.comboMarkets = []
    }
  }
}

export default bettingModule
