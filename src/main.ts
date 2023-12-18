import { createApp } from 'vue'
import './styles/index.scss'
import 'vant/lib/index.css'
import 'virtual:svg-icons-register'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from './directive'
import plugins from '@/plugins'
import vant from 'vant'
import { createScript } from './utils'
const lang = 'zh-cn'
const playtypeScript = `${window.AIConfig.static_url}files/base/playtype/js/${lang}.js`
const ratiotypeScript = `${window.AIConfig.static_url}app/lang/ratiotype-${lang}-min.js`
createScript(playtypeScript, false)
createScript(ratiotypeScript, false)
const app = createApp(App)
app.use(directives)
app.use(router)
app.use(vant)
app.use(store)
app.mount('#app')
app.use(plugins)

export default app
