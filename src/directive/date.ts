import { date } from '@/utils'
export default {
  mounted(el: any, binding: any) {
    _handleParams(el, binding)
  },
  updated(el: any, binding: any) {
    _handleParams(el, binding)
  }
}
function _handleParams(el: any, { value }: any) {
  const format = el.getAttribute('format') || ''
  el.innerText = date(value, format)
}
