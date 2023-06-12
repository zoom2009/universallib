import { Picker, DatePicker as DatePickerWheel } from 'react-native-wheel-pick'
import { Text, View } from 'app/components/ComponentWithTailwind'
import { IDatePickerProps } from './interface'

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

  return (
    <View>
      <Text>DatePicker</Text>
    </View>
  )
}
