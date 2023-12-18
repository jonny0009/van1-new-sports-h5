import { getPlayTypeName } from 'xcsport-lib'

interface PlayInfoInterface {
  gameType: string
  playType: string
  showtype?: string
  championType?: string
  homeTeamSuffix?: string
  home?: string
  away?: string
  homeTeam?: string
  awayTeam?: string
  FTsuffix?: string
  teamSuffix?: string
  gameTypeSon?: string
  specifiers?: any
  session?: any
}
/**
 * 获取玩法名称
 */
export default (playInfo: PlayInfoInterface) => {
  const playInfos = window.wf || {}
  const playName = getPlayTypeName(playInfos, { ...playInfo })
  return playName.pro
}
