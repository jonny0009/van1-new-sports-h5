import playName from '@/utils/playName'

export default {
  mounted(el: any, { value }: any) {
    el.innerText = playName(value)
  },
  // 当传进来的值更新的时候触发
  updated(el: any, { value }: any) {
    el.innerText = playName(value)
  }
}
