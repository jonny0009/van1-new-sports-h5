import Dayjs from 'dayjs'
export const dateUtil = Dayjs // format=> 'YYYY-MM-DD HH:mm:ss'
export function matchDate(date: any) {
  const datas = dateUtil(date).day()
  const week = ['日', '一', '二', '三', '四', '五', '六']
  return `星期${week[datas]} ${dateUtil(date).format('DD/MM')}`
}
