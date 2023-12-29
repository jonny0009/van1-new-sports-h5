import { ImageSource } from '@/config'
import league from '@/assets/images/empty/league.png?url'
import team from '@/assets/images/empty/team.png?url'
import head from '@/assets/images/empty/head.png?url'
import homeTeam from '@/assets/images/empty/match/team-home.svg?url'
import awayTeam from '@/assets/images/empty/match/team-away.svg?url'
import matchlLeague from '@/assets/images/empty/match/league.svg?url'
export default {
  mounted(el: any, binding: any) {
    _handleError(el)
    _handleLoad(el, binding)
  },
  updated(el: any, binding: any) {
    _handleLoad(el, binding)
  }
}

function _handleError(el: any) {
  // type 1是联赛，2是球队，3是头像，4是主队，5是客队
  const type = el.getAttribute('type') * 1 || ''
  if (type === 1) {
    el.src = league
  } else if (type === 2) {
    el.src = team
  } else if (type === 3) {
    el.src = head
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
function _handleLoad(el: any, { value = '' }: any) {
  const url = _handleParams(value)
  const img = new Image()
  img.onload = function () {
    el.src = url
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
