import { Ref, ref } from 'vue'
import { playGroup } from '@/api/live'
import { lib } from 'xcsport-lib'
import { MarketInfo } from '@/entitys/MarketInfo'

export function useBetting() {
  const matchInfo = ref()

  const playGroupAll: Ref<any> = ref([])
  const playGroupBet: Ref<any> = ref([])
  const getPlayGroupType = async (matchParams: any) => {
    const { gameType } = (matchInfo.value = matchParams)
    return new Promise(async (resolve) => {
      const res: any = await playGroup({ gameType })
      const data = res.data || {}
      if (res.code == 200) {
        const veteranList = data['veteran']
        playGroupAll.value = veteranList.find((m: any) => m.id == 0)
        playGroupBet.value = getBetData()

        resolve(playGroupBet.value)
      }
    })
  }

  const getBetData = () => {
    const { detail, gameType, systemId, homeTeamAbbr, awayTeamAbbr } = matchInfo.value
    if (detail && detail.length > 0) {
      const playDataList: any[] = []
      detail.forEach((ele: any) => {
        const { playData, game } = ele
        for (const item of playData) {
          const dataInfo = { ...item }
          const playInfo = {
            gameType: gameType,
            homeTeam: homeTeamAbbr,
            awayTeam: awayTeamAbbr,
            playType: dataInfo.playType,
            championType: game.championType,
            session: game.session
          }
          const ratioList = dataInfo.ratioData.map((ratioInfo: any) => {
            return new MarketInfo({
              ...ratioInfo,
              systemId: systemId,
              gameType: gameType,
              homeTeam: homeTeamAbbr,
              awayTeam: awayTeamAbbr,
              gameId: game.gameId,
              gidm: game.gidm,
              strong: game.strong,
              playType: dataInfo.playType,
              sw: dataInfo.sw,
              championType: dataInfo.championType
            })
          })

          if (dataInfo.ratioData?.length > 0) {
            playDataList.push({
              typeTemp: `${playInfo.playType}${playInfo.session}`,
              playType: playInfo.playType,
              playInfo,
              ratioList
            })
          }
        }
      })

      const noExist = ['HDNB2', 'HDNB', 'HTS2', 'HW3', 'W3', 'W3_conner', 'PD_conner', 'HT_conner', 'T_conner']
      const playDataListNew = playDataList.filter((item) => !noExist.includes(item.playType))
      const betPlayTypeSort = playTypeSort(playDataListNew, playGroupAll.value.playData)
      const betPlayRatioSort = playRatioSort(betPlayTypeSort)
      const betPlayMergeList = playTypeMerge(betPlayRatioSort, 'typeTemp')

      return betPlayMergeList
    }
  }

  const playTypeSort = (targerArray: any[], ruleArray: any[]) => {
    const sortMap: any = {}
    const sortArray: any[] = []
    const otherArray: any[] = []
    targerArray.map((item: any) => {
      const { typeTemp } = item
      const collectIndex = ruleArray.indexOf(typeTemp)
      if (collectIndex > -1) {
        if (!sortMap[collectIndex]) {
          sortMap[collectIndex] = []
        }
        sortMap[collectIndex].push(item)
      } else {
        otherArray.push(item)
      }
    })
    const sortMapKeys = Object.keys(sortMap)
    sortMapKeys.map((key) => {
      const plays = sortMap[key]
      sortArray.push(...plays)
    })
    return sortArray.concat(otherArray).filter((item) => {
      return item
    })
  }

  const playTypeMerge = (target: any[], key: string = 'playType') => {
    const mergedList = target.reduce((acc: any, item: any) => {
      const exist = acc.find((m: any) => m[key] === item[key])
      if (exist) {
        exist.ratioList = [...exist.ratioList, ...item.ratioList]
      } else {
        acc.push(item)
      }
      return acc
    }, [])
    return mergedList
  }

  const playRatioSort = (target: any[]) => {
    const ratioFormat = (ratio: any) => {
      if (ratio) {
        ratio += ''
        ratio = ratio.replace(/-|(\+)/g, '')
        // 判断盘口是否有/，有的话拆分相加除以2
        if (ratio.indexOf('/') > -1) {
          const [m, n] = ratio.split('/')
          ratio = (m * 1 + n * 1) / 2
        }
      }
      return ratio
    }

    const resultSort = target.map((item: any) => {
      const { playType, gameType } = item.playInfo
      const { sort } = lib.getGamePlayData({ gameType, playType })

      item.ratioList.sort((a: any, b: any) => {
        const aRatio = a.ratio && lib.isStrong({ ratio: a.ratio })
        const bRatio = b.ratio && lib.isStrong({ ratio: b.ratio })
        return ratioFormat(aRatio) - ratioFormat(bRatio)
      })

      item.ratioList.sort((a: any, b: any) => {
        const indexA = sort?.indexOf(a.ratioType)
        const indexB = sort?.indexOf(b.ratioType)
        return indexA - indexB
      })

      return item
    })
    return resultSort
  }

  return { getPlayGroupType }
}
