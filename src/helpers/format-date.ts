import dayjs, { Dayjs } from 'dayjs'

export const formatDate = (date: Dayjs) =>
  dayjs(date).format('DD.MM.YYYY HH:mm')
