import { createI18n } from 'vue-i18n'
import en from './en/index'
import cn from './cn/index'
import vi from './vi/index'
import ko from './ko/index'
const lang = localStorage.getItem('locale') || 'zh-cn'
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import viVN from 'vant/es/locale/lang/vi-VN'
import koKR from 'vant/es/locale/lang/ko-KR'
if (lang === 'en-us') {
  Locale.use('en-US', enUS)
}
if (lang === 'vi-vn') {
  Locale.use('vi-VN', viVN)
}
if (lang === 'ko-kr') {
  Locale.use('ko-KR', koKR)
}
const i18n: any = createI18n({
  legacy: false,
  globalInjection: true,
  locale: lang,
  messages: {
    'zh-cn': cn,
    'en-us': en,
    'vi-vn': vi,
    'ko-kr': ko
  }
})

export default i18n
