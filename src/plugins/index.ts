import './socket'
import SvgIcon from '@/components/SvgIcon/index.vue'
import BettingOption from '@/components/BettingOption/index.vue'
import SportsIcon from '@/components/button/SportsIcon/index.vue'
import ArrowTitle from '@/components/Title/ArrowTitle/index.vue'
import Loading from '@/components/Loading/index.vue'
import EmptyIcon from '@/components/EmptyIcon/index.vue'
import SportsButton from '@/components/Button/SportsButton/index.vue'
import SportsTabs from '@/components/SportsTabs/index.vue'
import ImageButton from '@/components/Button/ImageButton/index.vue'
import HomeMatchHandicap from '@/components/HomeMatch/MatchHandicap/index.vue'
import HomeEmpty from '@/components/HomeEmpty/index.vue'
import FooterHeight from '@/components/FooterHeight/index.vue'
import EmptyData from '@/components/EmptyData/index.vue'
export default {
  install(app: any) {
    app.component('SvgIcon', SvgIcon)
    app.component('BettingOption', BettingOption)
    app.component('SportsIcon', SportsIcon)
    app.component('ArrowTitle', ArrowTitle)
    app.component('Loading', Loading)
    app.component('EmptyIcon', EmptyIcon)
    app.component('SportsButton', SportsButton)
    app.component('SportsTabs', SportsTabs)
    app.component('ImageButton', ImageButton)
    app.component('HomeMatchHandicap', HomeMatchHandicap)
    app.component('HomeEmpty', HomeEmpty)
    app.component('FooterHeight', FooterHeight)
    app.component('EmptyData', EmptyData)
  }
}
