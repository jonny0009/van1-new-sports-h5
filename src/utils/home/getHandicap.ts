import { MarketInfo } from '@/entitys/MarketInfo'
export function getHandicap(playType: string, sendParams:any) {
  const details = sendParams
  const playTypeItem = details[playType] || {}
  const { game, ratioData } = playTypeItem || {}
  const newObject = Object.assign({}, details, playTypeItem, game)
  const newRatioData = (ratioData || []).map((e: any) => {
    const marketInfo = new MarketInfo({ ...details, ...game, ...e, playType })
    return Object.assign({ marketInfo }, e, newObject)
  })
  return newRatioData
}
