import day from 'dayjs'
import { isEmpty } from 'app/logics/validate'
require('dayjs/locale/th')

const d = (dateTimestamp?: number | Date | string, format?: string) => day(dateTimestamp, format).locale('th')

export const _day = d

export const getDateTimestamp = (date?: Date | number) => {
  return d(date).valueOf()
}

export const getThaiYear = (dateTimestamp: number) => {
  return (+d(dateTimestamp).format('YYYY')) + 543
}

export const getFullDate = (dateTimestamp: number, emptyText?: string) => {
  if (!isNaN(dateTimestamp)) {
    const thaiYear = getThaiYear(dateTimestamp)
    return `${d(dateTimestamp).format('D MMMM')} ${thaiYear}`
  } else {
    return emptyText || '-'
  }
}

export const getAge = (dateTimestamp: number) => {
  return d().diff(d(dateTimestamp), 'years')
}

export const getDateFromDateTimestamp = (dateTimestamp: number) => {
  if (isEmpty(dateTimestamp) || dateTimestamp === -999) {
    return undefined
  }
  return d(dateTimestamp).toDate()
}

export const getStartDayDateTimestamp = (dateTimestamp?: number) => d(dateTimestamp).startOf('day').valueOf()

export const getEndDayDateTimestamp = (dateTimestamp?: number) => d(dateTimestamp).endOf('day').valueOf()
