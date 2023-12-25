import { MarketInfo } from '@/entitys/MarketInfo'
export function getHandicap(playType: string, sendParams:any) {
  const details = sendParams
  const playTypeItem = details[playType] || {}
  let newPlayTypeItem:any = {}
  const newRatioDataVal:any = playTypeItem?.ratioData || []
  if (playType === 'R') {
    const RC = newRatioDataVal.find((e:any) => {
      return e.ratioType === 'RC'
    })
    const RH = newRatioDataVal.find((e:any) => {
      return e.ratioType === 'RH'
    })
    newPlayTypeItem = {
      ...playTypeItem,
      ratioData: [...[RH, RC]]
    }
  } else if (playType === 'M') {
    const MN = newRatioDataVal.find((e:any) => {
      return e.ratioType === 'MN'
    })
    const MC = newRatioDataVal.find((e:any) => {
      return e.ratioType === 'MC'
    })
    const MH = newRatioDataVal.find((e:any) => {
      return e.ratioType === 'MH'
    })
    newPlayTypeItem = {
      ...playTypeItem,
      ratioData: [...[MH, MN, MC]]
    }
  } else if (playType === 'OU') {
    const OUH = newRatioDataVal.find((e:any) => {
      return e.ratioType === 'OUH'
    })
    const OUC = newRatioDataVal.find((e:any) => {
      return e.ratioType === 'OUC'
    })
    newPlayTypeItem = {
      ...playTypeItem,
      ratioData: [...[OUC, OUH]]
    }
  } else {
    newPlayTypeItem = { ...playTypeItem }
  }

  const { game, ratioData } = newPlayTypeItem || {}
  const newObject = Object.assign({}, details, newPlayTypeItem, game)
  const newRatioData = (ratioData || []).map((e: any) => {
    const marketInfo = new MarketInfo({ ...details, ...game, ...e, playType })
    return Object.assign({ marketInfo }, e, newObject)
  })
  return newRatioData
}
