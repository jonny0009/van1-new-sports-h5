import { createApp } from 'vue'

// global css
import './styles/index.scss'
import 'virtual:svg-icons-register'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from './directive'
import plugins from '@/plugins'

const app = createApp(App)
app.use(directives)
app.use(router)
app.use(store)
app.mount('#app')
app.use(plugins)

export default app
