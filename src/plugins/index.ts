
import './socket'
import SvgIcon from '@/components/SvgIcon/index.vue'
export default {
  install(app:any) {
    app.component('SvgIcon', SvgIcon)
  }
}
