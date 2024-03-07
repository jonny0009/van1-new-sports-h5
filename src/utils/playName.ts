import { getPlayTypeName } from 'xcsport-lib'
import lang from '@/lang'
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
  if (playInfo.gameType === 'FT' || playInfo.gameType === 'BK') {
    if (playInfo.playType === 'R') {
      return lang.global.t('home.RInfo')
    } else if (playInfo.playType === 'OU') {
      return lang.global.t('home.OUInfo')
    } else if (playInfo.playType === 'M') {
      return lang.global.t('home.MInfo')
    }
  }
  const playName = getPlayTypeName(playInfos, { ...playInfo })
  return playName.pro
}
