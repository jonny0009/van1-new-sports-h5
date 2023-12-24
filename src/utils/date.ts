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
