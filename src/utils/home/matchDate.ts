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
  return `${week[datas]} ${dateUtil(date).format('DD/MM')}`
}
