import { createI18n } from 'vue-i18n'
import en from './en/index'
import cn from './cn/index'
import vi from './vi/index'
import kr from './kr/index'
const lang = localStorage.getItem('locale') || 'zh-cn'
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import viVN from 'vant/es/locale/lang/vi-VN'
if (lang === 'en-us') {
  Locale.use('en-US', enUS)
}
if (lang === 'vi-vn') {
  Locale.use('vi-VN', viVN)
}
const i18n: any = createI18n({
  legacy: false,
  globalInjection: true,
  locale: lang,
  messages: {
    'zh-cn': cn,
    'en-us': en,
    'vi-vn': vi,
    'ko-kr': kr
  }
})

export default i18n
