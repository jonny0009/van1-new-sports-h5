import { createI18n } from 'vue-i18n'
import { getBrowserLanguage } from '@/utils'
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
import thTH from 'vant/es/locale/lang/th-TH'

const lang = localStorage.getItem('locale') || getBrowserLanguage()

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

if (lang === 'th-th') {
  Locale.use('th-TH', thTH)
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
