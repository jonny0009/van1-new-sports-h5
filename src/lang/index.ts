import { createI18n } from 'vue-i18n'
import { getURLSearchParams } from '@/utils'
import en from './en/index'
import cn from './cn/index'
import vi from './vi/index'
import kr from './kr/index'
import pt from './pt/index'

import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import viVN from 'vant/es/locale/lang/vi-VN'
import koKR from 'vant/es/locale/lang/ko-KR'
import ptBR from 'vant/es/locale/lang/pt-BR'

const searchParams = getURLSearchParams()
const getBrowserLanguage = () => {
  if (window.navigator && window.navigator.language) {
    const obj: any = {
      'zh-cn': 'zh-cn',
      'zh-tw': 'zh-tw',
      'en-us': 'en-us',
      'vi-vn': 'vi-vn',
      'th-th': 'th-th',
      'ko-kr': 'ko-kr',
      'pt-pt': 'pt-pt',
      en: 'en-us',
      vi: 'vi-vn',
      th: 'th-th',
      ko: 'ko-kr',
      pt: 'pt-pt'
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

const lang = localStorage.getItem('locale') || getBrowserLanguage() // 'zh-cn'

if (lang === 'en-us') {
  Locale.use('en-US', enUS)
}
if (lang === 'vi-vn') {
  Locale.use('vi-VN', viVN)
}
if (lang === 'ko-kr') {
  Locale.use('ko-KR', koKR)
}
if (lang === 'pt-pt') {
  Locale.use('pt-BR', ptBR)
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
    'pt-pt': pt
  }
})

export default i18n
