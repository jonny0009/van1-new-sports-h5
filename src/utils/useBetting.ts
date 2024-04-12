import { Ref, ref, computed, watch, onMounted, toRaw } from 'vue'
import { lib } from 'xcsport-lib'
import { MarketInfo } from '@/entitys/MarketInfo'
import { playGroup } from '@/api/live'
import store from '@/store'

// configSettingNew接口 -> formatType
const FORMAT_TYPE: any = {
  1: 'veteran',
  2: 'novice',
  3: 'veteran'
}
export function useBetting(flag: any) {
  const matchInfo = computed(() => store.state.match.matchInfo)
  const userConfig = computed(() => store.state.user.userConfig)
  const needTimer = computed(() => store.state.match.needTimer)
  const apiLoading = ref(true)

  watch(
    () => matchInfo.value,
    () => {
      fetchGroup()
    }
  )
  onMounted(() => {
    // fetchGroup()
  })
  const fistState = ref(true)
  const selectId = ref('0')
  const playGroupBetList: Ref<any[]> = ref([])
  const fetchGroup = async () => {
    if (needTimer.value && !flag) {
      return
    }

    const { formatType } = userConfig.value
    const { gameType } = matchInfo.value
    if (gameType && fistState.value) {
      const res: any = await playGroup({ gameType })
      const data = res.data || {}
      if (res.code === 200) {
        const patternList = data[FORMAT_TYPE[formatType]]
        playGroupBetList.value = patternList
        fistState.value = false
      }
    }
    if (flag) {
      findGroupById(selectId.value)
    }
  }

  const currentGroupPlay = ref([])
  const findGroupById = (id: string) => {
    selectId.value = id
    const currentGroup = playGroupBetList.value?.find((m: any) => m.id?.toString() === selectId.value)
    currentGroupPlay.value = currentGroup?.playData
    getBettingData()
  }

  const playBettingList: Ref<any[]> = ref([])
  const getBettingData = () => {
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
              hstrong: game.hstrong,
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
      const betPlayTypeSort = playTypeSort(playDataListNew, currentGroupPlay.value || [])
      const betPlayRatioSort = playRatioSort(betPlayTypeSort)
      const betPlayMergeList = playTypeMerge(betPlayRatioSort, 'typeTemp')

      playGroupBetList.value = getGroupListCombo(playDataListNew)
      playBettingList.value = betPlayMergeList
      apiLoading.value = false
    }
  }

  const getGroupListCombo = (dataList: any[]) => {
    const groupRow = toRaw(playGroupBetList.value)
    let groupPlayList: any[] = []
    groupRow.forEach((row: any) => {
      const rowResult = {
        id: row.id,
        name: row.name,
        groupType: row.groupType,
        playData: row.playData,
        playDataList: playTypeSort(dataList, row.playData || [])
      }
      groupPlayList.push(rowResult)
    })
    groupPlayList = groupPlayList.filter((m: any) => m.playDataList.length > 0)
    return groupPlayList
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
        // otherArray.push(item)
      }
    })
    const sortMapKeys = Object.keys(sortMap)
    sortMapKeys.map((key) => {
      const plays = sortMap[key]
      sortArray.push(...plays)
    })
    return sortArray.concat(otherArray)
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

  return { findGroupById, playGroupBetList, playBettingList, apiLoading }
}
