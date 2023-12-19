import { Sports } from '@/config/sports'

export default {
  mounted(el: any, { value }: any) {
    el.innerText = Sports[value] || value
  },
  // 当传进来的值更新的时候触发
  updated(el: any, { value }: any) {
    el.innerText = Sports[value] || value
  }
}
