import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { TouchableOpacity, View } from 'app/components/ComponentWithTailwind'
import { Input } from 'app/components/Input'
import { Icon } from 'app/components/Icon'
import theme from 'app/global/theme'
import { ACTIVE_OPACITY } from 'app/components/Button'
import * as R from 'ramda'
import { getDateTimestamp, getFullDate, _day } from 'app/logics/date'
import { isEmpty } from 'app/logics/validate'
import { IDatePickerProps } from './interface'

// @ts-ignore
const DatePickerModal = dynamic(() => import('react-rainbow-components/components/DatePickerModal'), {
  ssr: false,
})

export const DatePicker = (props: IDatePickerProps) => {
  const {
    bold,
    label,
    errorMessage,
    placeholder,
    required,
    onChangeEffect,
    value,
  } = props
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false)

  const handleOnClick = () => {
    setTimeout(() => {
      const select = document.querySelector('select[tabindex="-1"]')
      let html = ''
      const children = R.propOr([], 'children', select) as any[]
      for (let i = 0; i < children.length; i++) {
        const option = children[i]
        html += `
          <option value="${option.value}">
            ${+option.value + 543}
          </option>
        `
      }
      if (select?.innerHTML) {
        select.innerHTML = html
        onChangeEffect(value)
      }
    }, 250)
  }

  const onOpenDatePicker = () => {
    setIsOpenDatePicker(true)
    handleOnClick()
  }

  const onCloseDatePicker = () => {
    setIsOpenDatePicker(false)
  }

  const onChange = (value: Date | undefined) => {
    if (!isEmpty(value)) {
      const d = getDateTimestamp(value)
      onChangeEffect(d)
    } else {
      onChangeEffect(undefined as any)
    }
    setTimeout(() => setIsOpenDatePicker(false), 200)
  }

  const valueModal = useMemo(() => {
    console.log('value:', value)
    return _day(value).toDate()
  }, [value])

  const title = useMemo(() => {
    return getFullDate(getDateTimestamp(value), 'กรุณาเลือก')
  }, [value])

  const inputValue = useMemo(() => {
    if (value) return getFullDate(value)
    return ''
  }, [value])

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
          onChangeEffect={() => {}}
          value={inputValue}
          placeholder={placeholder}
          bold={bold}
          disabledInput
          RightIcon={<Icon.Calendar size={24} color={theme.colors.primary} />}
        />
      </TouchableOpacity>
      <DatePickerModal
        isOpen={isOpenDatePicker}
        selectionType="single"
        locale="th-TH"
        onRequestClose={onCloseDatePicker}
        title={title}
        value={valueModal}
        onChange={onChange}
      />
    </View>
  )
}
