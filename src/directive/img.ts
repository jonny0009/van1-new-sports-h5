import { ImageSource } from '@/config'
export default {
  mounted(el: any, binding: any) {
    _handleParams(el, binding)
  },
  updated(el: any, binding: any) {
    _handleParams(el, binding)
  }
}
function _handleParams(el: any, { value }: any) {
  if (!value) {
    return false
  }
  if (value.startsWith('/src/assets/images/') || value.startsWith('http')) {
    el.src = value
  } else {
    el.src = `${ImageSource}${value}`
  }
}
