import { createI18n } from 'vue-i18n'
import en from './en/index'
import cn from './cn/index'
import vi from './vi/index'

const i18n: any = createI18n({
  legacy: false,
  globalInjection: true,
  // locale: 'vi-vn',
  locale: localStorage.getItem('locale') || 'zh-cn',
  messages: {
    'zh-cn': cn,
    'en-us': en,
    'vi-vn': vi
  }
})

export default i18n
