interface MarketInfoInterface {
  homeTeam: any
  awayTeam: any
  gidm: any
  gameId: any
  gameType: any
  playType?: any
  ratioType?: any
  ratioIpo?: any
  showType: any
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
const requireAttrs: Array<string> = ['systemId', 'gidm', 'gameId', 'gameType', 'ratioType', 'ratio', 'ior']

/** */
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
    this.showType = info.showType
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
    this.checkoutAttrs(info)
    this.playOnlyId = this.getPlayOnlyId()
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
  getPlayOnlyId() {
    let gidm = this.gidm
    // 投注使用子比赛sgidm
    if (this.sgidm) {
      gidm = this.sgidm
    }
    // bti
    if (this.optionId) {
      return `${gidm}/${this.optionId}/${this.playType}${this.ratioType}`
    }
    // ibo
    return `${gidm}/${this.gameId}/${this.playType}/${this.ratioType}`
  }
  get vior() {
    return this.ior
  }
}
