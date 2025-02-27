import { createApp } from 'vue'
import './styles/index.scss'
import 'vant/lib/index.css'
import 'virtual:svg-icons-register'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from './directive'
import plugins from '@/plugins'
import bootstrap from '@/bootstrap'
import vant from 'vant'
import { Lazyload } from 'vant'
import { createScript, getBrowserLanguage } from './utils'
import i18n from './lang'

// 路由守卫
import './router/permission'

// 玩法名称，玩法球头表引入
const lang = localStorage.getItem('locale') || getBrowserLanguage()
let langType = lang
const langArr = ['tr-tr', 'id-id', 'hi-in', 'ja-jp', 'es-es']
if (langArr.includes(lang)) {
  langType = 'en-us'
}
const playtypeScript = `${window.AIConfig.static_url}files/base/playtype/js/${langType}.js`
const ratiotypeScript = `${window.AIConfig.static_url}app/lang/ratiotype-${lang}-min.js`

const app = createApp(App)
app.use(directives)
app.use(router)
app.use(vant)
app.use(Lazyload)
app.use(store)
app.use(plugins)
app.use(i18n)

const start = async () => {
  await createScript(playtypeScript, false)
  await createScript(ratiotypeScript, false)
  await bootstrap()
  app.mount('#app')
}

start()
export default app
