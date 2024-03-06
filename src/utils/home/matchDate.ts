import Dayjs from 'dayjs'
export const dateUtil = Dayjs // format=> 'YYYY-MM-DD HH:mm:ss'
import { useI18n } from 'vue-i18n'
export function matchDate(date: any) {
  const { t } = useI18n()
  const datas = dateUtil(date).day()
  const week = [
    t('home.Sunday'),
    t('home.Monday'),
    t('home.Tuesday'),
    t('home.Wednesday'),
    t('home.Thursday'),
    t('home.Friday'),
    t('home.Saturday')
  ]
  // const now = dateUtil().format('YYYY-MM-DD')
  // const dataNow = dateUtil(date).format('YYYY-MM-DD')
  // if (now === dataNow) {
  //   // am 0：00：00～11：59：59
  //   // pm 12：00：00～23：59：59
  //   var text = 'pm'
  //   if (dateUtil(date).hour() < 12) {
  //     text = 'am'
  //   }
  //   return `${dateUtil(date).format('DD/MM')} ${text}`
  // }
  // return `${week[datas]} ${dateUtil(date).format('DD/MM')}`
  return `${week[datas]} ${dateUtil(date).format('MM/DD')}`
}
