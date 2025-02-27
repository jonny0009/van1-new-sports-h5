import { ImageSource } from '@/config'
import league from '@/assets/images/empty/league.png?url'
import blueLeague from '@/assets/images/user/blue/league.png?url'
import team from '@/assets/images/empty/team.png?url'
import head from '@/assets/images/empty/head.png?url'
import blueHead from '@/assets/images/user/blue/head.png?url'
import homeTeam from '@/assets/images/empty/match/team-home.svg?url'
import awayTeam from '@/assets/images/empty/match/team-away.svg?url'
import matchlLeague from '@/assets/images/empty/match/league1.svg?url'
import { computed } from 'vue'
import store from '@/store'
const theme = computed(() => store.state.app.theme)
const ifBLue = computed(() => {
  if (theme.value === 'blue') {
    return true
  }
  return false
})

export default {
  mounted(el: any, binding: any, { props }: any) {
    _handleError(el, props)
    _handleLoad(el, binding, props)
  },
  updated(el: any, binding: any, { props }: any) {
    _handleLoad(el, binding, props)
  }
}

function _handleError(el: any, props: any) {
  if (!el.classList.contains('v-img-error')) {
    el.classList.add('v-img-error')
  }
  if (props.errorImg) {
    el.src = props.errorImg
    return false
  }

  // type 1是联赛，2是球队，3是头像，4是主队，5是客队
  const type = el.getAttribute('type') * 1 || ''
  if (type === 1) {
    el.src = league
    if (ifBLue.value) {
      el.src = blueLeague
    } else {
      el.src = league
    }
  } else if (type === 2) {
    el.src = team
  } else if (type === 3) {
    if (ifBLue.value) {
      el.src = blueHead
    } else {
      el.src = head
    }
  } else if (type === 4) {
    el.src = homeTeam
  } else if (type === 5) {
    el.src = awayTeam
  } else if (type === 6) {
    el.src = matchlLeague
  } else if (type === 7) {
    el.src = ''
  }
}
function _handleLoad(el: any, { value = '' }: any, props: any) {
  const url = _handleParams(value)
  const img = new Image()
  img.onload = function () {
    el.src = url
    el.classList.remove('v-img-error')
  }
  img.onerror = function () {
    _handleError(el, props)
  }
  img.src = url
}

function _handleParams(value: any) {
  if (
    !value ||
    value.startsWith('http') ||
    value.startsWith('data:image/') ||
    value.startsWith('/src/assets/images/')
  ) {
    return value
  } else {
    return `${ImageSource}${value}`
  }
}
