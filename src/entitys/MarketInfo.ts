import store from '@/store'
import { points } from '@/utils'
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
  ratio?: any
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
  gameDate?: any
}
const requireAttrs: Array<string> = ['systemId', 'gidm', 'gameId', 'gameType', 'playType', 'ratioType', 'ior']

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
  gameDate: any

  playOnlyId: string
  isChampion: boolean = false
  ratioName: string = ''
  goldMax: string = ''
  goldMin: string = ''
  ratioKey: string = ''
  iorChange: string = ''
  isEuropePlay: boolean | undefined

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
    this.sourceCompany = info.sourceCompany || MarketInfo.getSourceCompany(this.gidm)
    this.isEuropePlay = MarketInfo.isOddsTypeChange({
      gameType: this.gameType,
      playType: this.playType,
      sourceCompany: this.sourceCompany
    })
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
  static getSourceCompany(gidm:string = '') {
    return gidm.split('_')[0]
  }
  static isOddsTypeChange({ playType, gameType, sourceCompany }:any) {
    let newPlay = playType
    const specifiersPlay = [
      '_conner',
      '_card',
      '_OT',
      '_PS',
      '_promote',
      '_champion'
    ]
    specifiersPlay.map(item => {
      const lowerPlayStr = playType.toLowerCase()
      const lowerItemStr = item.toLowerCase()
      if (lowerPlayStr.includes(lowerItemStr)) {
        const lowerPlay = lowerPlayStr.replace(new RegExp(lowerItemStr, 'g'), '')
        newPlay = lowerPlay.toUpperCase()
      }
    })
    let isSecifiers = false
    const dataSourceMap:any = {
      ib: 'ibo',
      sd: 'sd',
      ic: 'bti'
    }
    const oddsTypeChangeArraymap = store.state.app.doubleLineInfo
    const oddsTypeChangeArrayNew =
      (store.state.app && oddsTypeChangeArraymap[dataSourceMap[sourceCompany]]) ||
      null
    if (oddsTypeChangeArrayNew) {
      isSecifiers = oddsTypeChangeArrayNew.includes(playType)
      return isSecifiers && !(newPlay === 'PR' && gameType === 'BK')
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
      return `${gidm}/${info.optionId}/${info.playType}/${info.ratioType}`
    }
    // ibo
    return `${gidm}/${info.gameId}/${info.playType}/${info.ratioType}`
  }
  // 切换赔率
  get vior() {
    const { handicapType } = store.state.user.userConfig || {}
    if (!this.ior || +this.ior <= 0) {
      return this.ior
    }
    // 判断是否是串关并且属于欧洲玩法的 + 1
    if (this.isEuropePlay && handicapType === 'E') {
      // 当前属于欧洲盘，并且属于可欧洲玩法的 赔率+1
      return points(this.ior * 1 + 1)
    }
    return points(this.ior) || ''
  }
}
