import Dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

export const dateUtil = Dayjs

export function formatToDateTime(date: any, format = DATE_TIME_FORMAT) {
  return dateUtil(date).format(format)
}

export function formatToDate(date: any, format = DATE_FORMAT) {
  return dateUtil(date).format(format)
}

export function dateFormat(date: any, format = DATE_TIME_FORMAT) {
  return dateUtil(date).format(format)
}
export function matchDateFormat(date: any, format = DATE_TIME_FORMAT) {
  // const today = new Date()
  // const newToday: any = dateUtil(today).format('MM-DD')
  // const newTodayDate: any = dateUtil(date).format('MM-DD')
  // if (newToday === newTodayDate) {
  //   return dateUtil(date).format('HH:mm A')
  // } else {
  //   return dateUtil(date).format(format)
  // }
  // 只导出上下午时间
  return dateUtil(date).format('HH:mm A')
}

export function formatWeekday(date: any) {
  const { t } = useI18n()
  const weeks = [
    t('home.Sunday'),
    t('home.Monday'),
    t('home.Tuesday'),
    t('home.Wednesday'),
    t('home.Thursday'),
    t('home.Friday'),
    t('home.Saturday')
  ]
  return weeks[dateUtil(date).day()]
}
