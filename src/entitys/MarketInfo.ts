import { createBetItem } from 'xcsport-lib'
interface MarketInfoInterface {
  homeTeam: any
  awayTeam: any
  gidm: any
  gameId: any
  gameType: any
  playType: any
  ratioType?: any
  ratioIpo?: any
  showType: any
  showtype: any
  systemId: any
  ratio: any
  ior: any

  leagueId?: any
  leagueName?: any
  session?: any
  suffix?: any
  sgidm?: any
  hgid?: any
  id?: any
  oddfType?: any
  sw?: any
  optionId?: any
  pgidm?: any
  sourceCompany?: any
  homeTeamSuffix?: any
  ratio1?: any
  championType?: any
}
const requireAttrs: Array<string> = ['systemId', 'gidm', 'gameId', 'gameType', 'playType', 'ratioType', 'ratio', 'ior']

export class MarketInfo {
  gidm: any
  sgidm: any
  gameId: any
  optionId: any
  gameType: any
  playType: any
  ratioType: any
  ratioIpo: any
  ratio: any
  systemId: any
  leagueId: any
  hgid: any
  pgidm: any
  sw: any
  oddfType: any
  showType: any
  showtype: any
  session: any
  ior: any
  leagueName: any
  homeTeam: any
  awayTeam: any
  suffix: any
  homeTeamSuffix: any
  sourceCompany: any
  championType: any

  playOnlyId: string
  isChampion: boolean = false
  ratioName: string = ''
  goldMax: string = ''
  goldMin: string = ''
  ratioKey: string = ''

  constructor(info: MarketInfoInterface) {
    this.systemId = info.systemId
    this.leagueId = info.leagueId
    this.gidm = info.gidm || ''
    this.hgid = info.hgid || ''
    this.sgidm = info.sgidm
    this.gameId = info.gameId
    this.pgidm = info.pgidm
    this.optionId = info.optionId || info.id || ''

    this.sw = info.sw
    this.championType = info.championType
    this.oddfType = info.oddfType
    this.showType = info.showType || info.showtype
    this.showtype = info.showType || info.showtype
    this.gameType = info.gameType
    this.playType = info.playType || ''
    this.ratioType = info.ratioType || ''
    this.ratioIpo = info.ratioIpo
    this.session = info.session
    this.ratio = info.ratio || info.ratio1
    this.ior = info.ior
    this.leagueName = info.leagueName
    this.homeTeam = info.homeTeam
    this.awayTeam = info.awayTeam
    this.suffix = info.suffix
    this.homeTeamSuffix = info.homeTeamSuffix
    this.sourceCompany = info.sourceCompany
    if (this.showtype === 'CP' || this.playType === 'CHAMPION') {
      this.isChampion = true
    } else {
      this.isChampion = false
    }
    try {
      this.ratioName = createBetItem({ ...this })
    } catch (error) {
      console.error(error)
    }
    this.checkoutAttrs(info)
    this.playOnlyId = MarketInfo.getPlayOnlyId(this)
    this.ratioKey = this.playOnlyId
  }
  checkoutAttrs(info: any) {
    const warnings: any[] = []
    requireAttrs.forEach((attr: string) => {
      if (!info[attr]) {
        warnings.push(attr)
      }
    })
    if (warnings.length) {
      console.warn(`缺少：${warnings.toString()}`)
    }
  }

  static getPlayOnlyId(info: MarketInfoInterface) {
    let gidm = info.gidm
    // 投注使用子比赛sgidm
    if (info.sgidm) {
      gidm = info.sgidm
    }
    // bti
    if (info.optionId) {
      return `${gidm}/${info.optionId}/${info.playType}${info.ratioType}`
    }
    // ibo
    return `${gidm}/${info.gameId}/${info.playType}/${info.ratioType}`
  }
  get vior() {
    return this.ior
  }
}
