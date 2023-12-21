import { points } from '@/utils'
export default {
  mounted(el: any, binding: any) {
    _handleParams(el, binding)
  },
  updated(el: any, binding: any) {
    _handleParams(el, binding)
  }
}
function _handleParams(el: any, { value }: any) {
  const num = el.getAttribute('num') * 1 || 2
  el.innerText = points(value, num)
}
