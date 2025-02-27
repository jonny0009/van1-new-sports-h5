import lang from '@/lang'
export default {
  mounted(el: any, { value }: any) {
    el.innerText = lang.global.t(`sport.sports.${value}`) || value
  },
  // 当传进来的值更新的时候触发
  updated(el: any, { value }: any) {
    el.innerText = lang.global.t(`sport.sports.${value}`) || value
  }
}
