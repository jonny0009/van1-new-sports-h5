import { ImageSource } from '@/config'
import league from '@/assets/images/empty/league.png?url'
import team from '@/assets/images/empty/team.png?url'
import head from '@/assets/images/empty/head.png?url'
export default {
  mounted(el: any, binding: any) {
    // type 1是联赛，2是球队， 3是头像
    const type = el.getAttribute('type') * 1 || ''
    el._handlerError = () => {
      if (type === 1) {
        el.src = league
      } else if (type === 2) {
        el.src = team
      } else if (type === 3) {
        el.src = head
      }
    }
    if (type) {
      el.addEventListener('error', el._handlerError)
    }
    _handleParams(el, binding)
  },
  updated(el: any, binding: any) {
    _handleParams(el, binding)
  },
  // 指令与元素解绑的时候，移除事件绑定
  unmounted(el: any) {
    el.removeEventListener('error', el._handlerError)
  }
}

function _handleParams(el: any, { value }: any) {
  if (!value) {
    return false
  }
  if (value.startsWith('http') || value.startsWith('/src/assets/images/')) {
    el.src = value
  } else {
    el.src = `${ImageSource}${value}`
  }
}
