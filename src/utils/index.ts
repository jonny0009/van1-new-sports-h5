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
export const formatMoney = (number: any, decimals = 0, decPoint = '.', thousandsSep = ',') => {
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
export const points = (value:any, n = 2) => {
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
export const createScript = (url: string, async:boolean = true) => {
  const el = document.createElement('script')
  el.src = `${url}?r=${Date.now()}`
  el.async = async
  document.getElementsByTagName('head')[0].appendChild(el)
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
