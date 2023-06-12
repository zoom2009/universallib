import { KeyboardTypeOptions } from 'react-native'
import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { View } from 'app/components/ComponentWithTailwind'
import { TextInput } from 'app/components/ComponentWithTailwind'
import { Label } from 'app/components/Label'
import { ErrorMessage } from 'app/components/ErrorMessage'

interface IInputProps {
  label?: string
  onChangeEffect: (text: string) => void
  value: string
  placeholder?: string
  disabledStyle?: boolean
  disabledInput?: boolean
  errorMessage?: string
  bold?: boolean
  required?: boolean
  isPassword?: boolean
  isTextArea?: boolean
  numberOfLines?: number
  keyboardType?: KeyboardTypeOptions | undefined
  onFocus?: () => void
  onBlur?: () => void
  textColor?: string
}

export const Input = (props: IInputProps) => {
  const {
    label,
    onChangeEffect,
    value,
    placeholder,
    disabledStyle,
    disabledInput,
    errorMessage,
    bold,
    required,
    isPassword,
    isTextArea,
    numberOfLines,
    keyboardType,
    onFocus,
    onBlur,
    textColor,
  } = props

  const [isFocus, setIsFocus] = useState(false)

  const onFocusFunction = () => {
    setIsFocus(true)
    onFocus && onFocus()
  }

  const onBlurFunction = () => {
    setIsFocus(false)
    onBlur && onBlur()
  }

  const borderColor = useMemo(() => {
    if (!!errorMessage) return 'border-danger'
    if (isFocus) return 'border-info'
    return 'border-[#555]'
  }, [isFocus, errorMessage])

  return (
    <View className="w-full">
      {label && (
      <>
        <View className="flex flex-row justify-start items-center">
          <Label textClassName="text-sm sm:text-md" bold={bold} required={required}>
            {label}
          </Label>
        </View>
        <View className="h-3" />
      </>
      )}
      <View
        pointerEvents={!disabledInput ? 'auto' : 'none'}
        className={clsx([
          'border-[1px] w-full rounded-md flex flex-row justify-between items-center',
          borderColor,
        ])}
      >
        <TextInput
          className={clsx([
            'w-full p-4 rounded-md text-sm md:text-md flex-1 border-0',
            disabledStyle && 'text-muted',
            isTextArea && 'h-32',
          ])}
          // @ts-ignore
          style={[{ outlineStyle: 'none', textAlignVertical: isTextArea ? 'top' : 'auto' }, !!textColor && { color: textColor }]}
          value={value}
          onFocus={onFocusFunction}
          onBlur={onBlurFunction}
          onChangeText={onChangeEffect}
          multiline={isTextArea}
          secureTextEntry={isPassword}
          placeholder={placeholder}
          keyboardType={keyboardType}
          textContentType="none"
          numberOfLines={isTextArea ? numberOfLines : undefined}
          autoCorrect={false}
          placeholderTextColor="#999"
          autoCapitalize="none"
        />
      </View>
      <ErrorMessage text={errorMessage} />
    </View>
  )
}
