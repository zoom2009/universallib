import day from 'dayjs'
import { isEmpty } from 'app/logics/validate'
require('dayjs/locale/th')

const d = (dateTimestamp?: number | Date | string, format?: string) => day(dateTimestamp, format).locale('th')

export const _day = d

export const getDateTimestamp = (date?: Date | number) => {
  return d(date).valueOf()
}

export const getThaiYear = (dateTimestamp?: number) => {
  return (+d(dateTimestamp).format('YYYY')) + 543
}

export const getThaiMonth = (dateTimestamp?: number) => {
  return d(dateTimestamp).format('MMM')
}

export const getThaiDay = (dateTimestamp?: number) => {
  return d(dateTimestamp).format('D')
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

export const getYearList = () => {
  const currentYear = getThaiYear()
  let years: number[] = []
  for (let i = currentYear - 100; i < currentYear + 100; i++) {
    years.push(i)
  }
  return years
}

export const getDayList = () => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']

export const getMonthList = () => ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
