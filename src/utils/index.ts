import { getTheme } from './auth'
import { ImageSource } from '@/config'
import { lib } from 'xcsport-lib'
const { getGamePlayData, isStrong } = lib

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getQueryStringByName = function (name: string) {
  var result = location.search.match(new RegExp('[?&]' + name + '=([^&]+)', 'i'))
  if (result == null || result.length < 1) {
    return ''
  }
  return result[1]
}

export const transformData = function (data: any) {
  const params = new FormData()
  for (const item in data) {
    params.append(item, data[item])
  }
  return params
}

export const date = function (date: any, fmt = 'yyyy-MM-dd hh:mm:ss', number?: any) {
  if (date === null || typeof date === 'undefined' || date === '') {
    return null
  } else {
    // 时间要转成obj，否则报错
    date = new Date(date)
  }
  const day = number || 0
  var o: any = {
    'M+': new Date(date - 1000 * 60 * 60 * 24 * day).getMonth() + 1, // 月
    'd+': new Date(date - 1000 * 60 * 60 * 24 * day).getDate(), // 日
    'h+': date.getHours(), // 时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

/**
 * @description 格式化金额
 * @param number：要格式化的数字
 * @param decimals：保留几位小数 默认0位
 * @param decPoint：小数点符号 默认.
 * @param thousandsSep：千分位符号 默认为,
 */
export const formatMoney = (number: any, decimals = 2, decPoint = '.', thousandsSep = ',') => {
  const num = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+num) ? 0 : +num
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep
  const dec = typeof decPoint === 'undefined' ? '.' : decPoint

  const toFixedFix = function (n: number, prec: number) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
  const s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

/**
 * 格式化数字
 * @param number
 * @param decimals
 */
export const formatDecimals = (number: Number, decimals = 2) => {
  return formatMoney(number, decimals, '.', '')
}

/**
 * 处理小数点位数
 * @param  value
 * @param {*} n
 */
export const points = (value: any, n = 2) => {
  let valueStr = value + ''
  if (valueStr.indexOf('.') > -1) {
    valueStr += '00'
  } else {
    valueStr += '.000'
  }
  const regexp = new RegExp('([0-9]+.[0-9]{' + n + '})[0-9]*', 'g')
  return valueStr.replace(regexp, '$1')
}

/**
 * 创建script
 * @param url
 */
export const createScript = (url: string, async: boolean = true) => {
  return new Promise((resolve: any) => {
    const el = document.createElement('script')
    el.src = `${url}?r=${Date.now()}`
    el.async = async
    document.getElementsByTagName('head')[0].appendChild(el)
    el.onload = () => {
      resolve()
    }
    el.onerror = () => {
      resolve()
    }
  })
}

export const imgUrlFormat = (url: string) => {
  if (url) {
    if (url.indexOf('http') > -1) {
      return url
    }
    if (url.substring(0, 1) === '/') {
      return window.AIConfig.static_url + url.substring(1, url.length)
    }
    return window.AIConfig.static_url + url
  }
  return ''
}

// 获取url参数
export const getURLSearchParams = () => {
  const search = window.location.search
  const params: any = {}
  const splits = search.replace('?', '').split('&')
  splits.forEach((item: any) => {
    const temp = item.split('=')
    if (temp.length > 1) {
      params[temp[0]] = temp[1]
    }
  })
  return params
}

// 设置主题色
export const setTheme = () => {
  document.documentElement.dataset.theme = getTheme() || ''
}

// 获取默认语言,繁体默认简体中文,泰语隐藏,本地没有
export const getBrowserLanguage = () => {
  const searchParams = getURLSearchParams()
  if (window.navigator && window.navigator.language) {
    const obj: any = {
      'zh-cn': 'zh-cn',
      'zh-tw': 'zh-tw',
      'en-us': 'en-us',
      'vi-vn': 'vi-vn',
      'th-th': 'th-th',
      'ko-kr': 'ko-kr',
      'pt-pt': 'pt-pt',
      'pt-br': 'pt-pt',
      'ja-jp': 'ja-jp',
      'hi-in': 'hi-in',
      'tr-tr': 'tr-tr',
      'id-id': 'id-id',
      'es-es': 'es-es',
      'zh-sg': 'zh-sg',
      zh: 'zh-cn',
      tw: 'zh-tw',
      en: 'en-us',
      vi: 'vi-vn',
      th: 'th-th',
      ko: 'ko-kr',
      pt: 'pt-pt',
      ja: 'ja-jp',
      hi: 'hi-in',
      tr: 'tr-tr',
      id: 'id-id',
      es: 'es-es',
      sg: 'zh-sg'
    }

    let sysLanguage = ''
    if (searchParams && searchParams.lang) {
      sysLanguage = searchParams.lang
    } else {
      sysLanguage = window.navigator.language.toLowerCase()
    }

    return obj[sysLanguage] ? obj[sysLanguage] : 'en-us'
  }
  return 'en-us'
}

export const _checkImgUrl = (url: any) => {
  // console.log(url)
  if (!url) return
  // 本地图片
  if (
    url.includes('assets/img') ||
    url.includes('file://') ||
    url.includes('data:image') ||
    url.includes('http') ||
    url.includes('https')
  ) {
    return url
  }
  return ImageSource + url
}

export const _duration = (num: any) => {
  if (!num) return '00:00'
  const m: any = Math.floor(num / 60)
  // let s = num % 60
  const s = Math.round(num % 60)
  let str: string = ''
  if (m === 0) {
    str = '00'
  } else if (m > 0 && m < 10) {
    str = '0' + m
  } else {
    str = m
  }
  str += ':'
  if (s === 0) {
    str += '00'
  } else if (s > 0 && s < 10) {
    str += '0' + s
  } else {
    str += s
  }
  return str
}

export const _formatNumber = (num: any) => {
  if (!num) return
  if (num > 100000000) {
    return (num / 100000000).toFixed(1) + '亿'
  } else if (num > 10000) {
    return (num / 10000).toFixed(1) + '万'
  } else {
    return num
  }
}

/**
 * @description: 防抖
 * @param {type}
 * @return: 1
 */

export const debounce = (fn = (...args: any) => {}, ms: number, immediate: boolean = false) => {
  let timeout: any = null
  return function (this: unknown, ...args: any) {
    if (timeout) window.clearTimeout(timeout)

    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, ms)
      if (callNow) {
        fn.apply(this, args)
      }
    } else {
      timeout = window.setTimeout(() => {
        fn.apply(this, args)
      }, ms)
    }
  }
}

/**
 * @description: 节流函数，单一时间只触发一次
 * @param {type} ms fn
 * @return:
 */

export const throttle = (fn = () => {}, ms: number) => {
  let last = 0
  return function (this: unknown, ...args: any) {
    const nowTime = Date.now()
    if (nowTime - last > ms) {
      fn.apply(this, args)
      last = nowTime
    }
  }
}

const replaceStrFilter = (regStr: string, obj: any, specifiers: any) => {
  return regStr.replace(/{(.*?)}/g, (match: any, key: any) => {
    const specialKey = key.trim()

    return obj[specialKey] || specifiers[specialKey] || ''
  })
}

export const getRatioPlay = (betInfo: any) => {
  const { showtype, playType, ratio, ratio1, rt, teamSuffix } = betInfo
  // 判断是否是冠军杯
  if (showtype === 'CP' || playType === 'CHAMPION') {
    return ratio1 || ratio
  }
  // 判断玩法是否有ratioType
  const isRatioType = !(rt * 1)
  let obj = JSON.parse(JSON.stringify(betInfo))
  const { gameType, gameTypeSon, specifiers } = obj
  // 新增体育项兼容
  let ratioTypeData = getGamePlayData({ gameType, gameTypeSon, playType, teamSuffix })
  let regStr = ''
  if (isRatioType) {
    if (ratioTypeData) {
      regStr = ratioTypeData.text[obj.ratioType]
    } else {
      console.log('不存在玩法', playType)
    }
  } else {
    regStr = ratio1 || ratio
  }

  const regStrSplit = regStr.split('{ratio}')

  if (regStrSplit.length > 1) {
    const [params1, params2] = regStrSplit
    const ratioTag = isStrong(betInfo)
    let ratioParams1 = ''
    let ratioParams2 = ''
    if (ratioParams2) {
      ratioParams1 = replaceStrFilter(params1, obj, specifiers)
      ratioParams2 = replaceStrFilter(params2, obj, specifiers)
    } else {
      ratioParams1 = replaceStrFilter(params1, obj, specifiers)
    }

    return {
      ratioTag,
      ratioParams1,
      ratioParams2
    }
  }

  return false
}
// 处理视频
export const liveVideo = (streamNa: any) => {
  const { live, stream, videoLive, liveali } = streamNa || {}
  const m3u8 =
    (videoLive && videoLive.status && videoLive.m3u8) ||
    (liveali && liveali.status && liveali.m3u8) ||
    (stream && stream.status && stream.m3u8) ||
    (live && live.status && live.m3u8) ||
    {}
  return m3u8
}
