
import './socket'
import SvgIcon from '@/components/SvgIcon/index.vue'
import BettingOption from '@/components/BettingOption/index.vue'
export default {
  install(app:any) {
    app.component('SvgIcon', SvgIcon)
    app.component('BettingOption', BettingOption)
  }
}
