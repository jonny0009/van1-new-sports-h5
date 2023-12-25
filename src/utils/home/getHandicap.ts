import { MarketInfo } from '@/entitys/MarketInfo'
export function getHandicap(playType: string, sendParams:any) {
  const details = sendParams
  const playTypeItem = details[playType] || {}
  let newPlayTypeItem:any = {}
  const newRatioDataVal:any = playTypeItem?.ratioData || []
  if (['R', 'RE'].includes(playType)) {
    const RC = newRatioDataVal.find((e:any) => {
      return ['REC', 'RC'].includes(e.ratioType)
    })
    const RH = newRatioDataVal.find((e:any) => {
      return ['REH', 'RH'].includes(e.ratioType)
    })
    newPlayTypeItem = {
      ...playTypeItem,
      ratioData: [...[RH, RC]]
    }
  } else if (['M', 'RM'].includes(playType)) {
    const MC = newRatioDataVal.find((e:any) => {
      return ['RMC', 'MC'].includes(e.ratioType)
    })
    const MH = newRatioDataVal.find((e:any) => {
      return ['RMH', 'MH'].includes(e.ratioType)
    })
    const MN = newRatioDataVal.find((e:any) => {
      return ['RMN', 'MN'].includes(e.ratioType)
    })
    let newRatioData = [MH, MN, MC]
    if (!MN) {
      newRatioData = [MH, MC]
    }
    newPlayTypeItem = {
      ...playTypeItem,
      ratioData: [...newRatioData]
    }
  } else if (['OU', 'ROU'].includes(playType)) {
    const OUH = newRatioDataVal.find((e:any) => {
      return ['OUH', 'ROUH'].includes(e.ratioType)
    })
    const OUC = newRatioDataVal.find((e:any) => {
      return ['OUC', 'ROUC'].includes(e.ratioType)
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
