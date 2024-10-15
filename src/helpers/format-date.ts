import dayjs, { Dayjs } from 'dayjs';

export const formatDate = (date: Dayjs | Date | string) =>
  dayjs(date).format('DD.MM.YYYY HH:mm');
