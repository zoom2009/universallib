import { Picker } from 'react-native-wheel-pick'
import { Text, TouchableOpacity, View } from 'app/components/ComponentWithTailwind'
import { getDateTimestamp, getDayList, getFullDate, getMonthList, getThaiDay, getThaiMonth, getThaiYear, getYearList, _day } from 'app/logics/date'
import { useMemo, useRef, useState } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Input } from 'app/components/Input'
import { Icon } from 'app/components/Icon'
import { ACTIVE_OPACITY } from 'app/components/Button'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import theme from 'app/global/theme'
import { IDatePickerProps } from './interface'

const pickerStyle = { backgroundColor: 'white', width: '33%', minHeight: 280 }

export const DatePicker = (props: IDatePickerProps) => {
  const {
    value,
    onChangeEffect,
    label,
    bold,
    placeholder,
    required,
    errorMessage,
  } = props

  const insets = useSafeAreaInsets()
  const [daySelected, setDaySelected] = useState<string>('')
  const [monthSelected, setMonthSelected] = useState<string>('')
  const [yearSelected, setYearSelected] = useState<string>('')

  const onOpenDatePicker = () => bottomSheetRef.current.open()
  const onCloseDatePicker = () => bottomSheetRef.current.close()

  const bottomSheetRef = useRef({
    open: () => {},
    close: () => {},
  })

  const inputValue = useMemo(() => {
    if (value) return getFullDate(value)
    return ''
  }, [value])

  const { days, months, years } = useMemo(() => {
    return {
      days: getDayList(),
      months: getMonthList(),
      years: getYearList().map((y) => `${y}`),
    }
  }, [])

  const onOpen = () => {
    if (!value) {
      setDaySelected(getThaiDay())
      setMonthSelected(getThaiMonth())
      setYearSelected(`${getThaiYear()}`)
    } else {
      const dayString = getThaiDay(value)
      const monthString = getThaiMonth(value)
      const yearString = `${getThaiYear(value)}`
      setDaySelected(dayString)
      setMonthSelected(monthString)
      setYearSelected(yearString)
    }
  }

  const onPicker = () => {
    const dateString = `${+yearSelected - 543}-${months.findIndex((m) => m === monthSelected) + 1}-${daySelected}`
    const d = _day(dateString, 'YYYY-M-D').toDate()
    onChangeEffect(getDateTimestamp(d))
  }

  return (
    <View className="w-full">
      <TouchableOpacity
        onPress={onOpenDatePicker}
        activeOpacity={ACTIVE_OPACITY}
      >
        <Input
          errorMessage={errorMessage}
          label={label}
          required={required}
          onChangeEffect={console.log}
          value={inputValue}
          placeholder={placeholder}
          bold={bold}
          disabledInput
          RightIcon={<Icon.Calendar size={24} color={theme.colors.primary} />}
        />
      </TouchableOpacity>
      <RBSheet
        // @ts-ignore
        ref={bottomSheetRef}
        height={340}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          }
        }}
        onOpen={onOpen}
        onClose={onPicker}
      >
        <View className="flex flex-1">
          <TouchableOpacity
            onPress={onCloseDatePicker}
            activeOpacity={ACTIVE_OPACITY}
            className="ml-auto justify-center items-center px-3.5 h-[50px]"
          >
            <Text className="text-primary text-lg">ตกลง</Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-between items-center flex-1">
            <Picker
              style={pickerStyle}
              selectedValue={daySelected}
              pickerData={days}
              onValueChange={setDaySelected}
            />
            <Picker
              style={pickerStyle}
              selectedValue={monthSelected}
              pickerData={months}
              onValueChange={setMonthSelected}
            />
            <Picker
              style={pickerStyle}
              selectedValue={yearSelected}
              pickerData={years}
              onValueChange={setYearSelected}
            />
          </View>
          <View style={{ height: insets.bottom }} />
        </View>
      </RBSheet>
    </View>
  )
}
