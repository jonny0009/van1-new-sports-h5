import { createI18n } from 'vue-i18n'
import { getBrowserLanguage, getURLSearchParams } from '@/utils'

import en from './en/index'
import cn from './cn/index'
import vi from './vi/index'
import kr from './kr/index'
import pt from './pt/index'
import th from './th/index'
import jp from './jp/index'
import es from './es/index'
import id from './id/index'
import tw from './tw/index'
import hiInI from './in/index' // 印地

import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import viVN from 'vant/es/locale/lang/vi-VN'
import koKR from 'vant/es/locale/lang/ko-KR'
import ptBR from 'vant/es/locale/lang/pt-BR' // 葡萄牙
import thTH from 'vant/es/locale/lang/th-TH' // 泰语
import jaJP from 'vant/es/locale/lang/ja-JP'
import idID from 'vant/es/locale/lang/id-ID' // 印度尼西亚语
import hiIN from 'vant/es/locale/lang/hi-IN' // 印地
import esES from 'vant/es/locale/lang/es-ES' // 世界语
import zhTW from 'vant/es/locale/lang/zh-TW'

if (getURLSearchParams().lang) {
  localStorage.setItem('locale', getURLSearchParams().lang)
}
const lang = localStorage.getItem('locale') || getBrowserLanguage()

if (lang === 'en-us') {
  Locale.use('en-US', enUS)
} else if (lang === 'vi-vn') {
  Locale.use('vi-VN', viVN)
} else if (lang === 'ko-kr') {
  Locale.use('ko-KR', koKR)
} else if (lang === 'pt-pt') {
  Locale.use('pt-BR', ptBR)
} else if (lang === 'th-th') {
  Locale.use('th-TH', thTH)
} else if (lang === 'ja-jp') {
  Locale.use('ja-JP', jaJP)
} else if (lang === 'es-es') {
  Locale.use('es-ES', esES)
} else if (lang === 'id-id') {
  Locale.use('id-ID', idID)
} else if (lang === 'zh-tw') {
  Locale.use('zh-TW', zhTW)
} else if (lang === 'hi-in') {
  Locale.use('hi-IN', hiIN)
}

const i18n: any = createI18n({
  legacy: false,
  globalInjection: true,
  warnHtmlMessage: false,
  locale: lang,
  messages: {
    'zh-cn': cn,
    'en-us': en,
    'vi-vn': vi,
    'ko-kr': kr,
    'pt-pt': pt,
    'th-th': th,
    'ja-jp': jp,
    'es-es': es,
    'id-id': id,
    'zh-tw': tw,
    'hi-in': hiInI
  }
})

export default i18n
