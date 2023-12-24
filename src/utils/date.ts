import Dayjs from 'dayjs'

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
  const today = new Date()
  const newToday:any = dateUtil(today).format('MM-DD')
  const newTodayDate:any = dateUtil(date).format('MM-DD')
  if (newToday === newTodayDate) {
    return dateUtil(date).format('HH:mm A')
  } else {
    return dateUtil(date).format(format)
  }
}
