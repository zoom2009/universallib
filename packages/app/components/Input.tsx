import { KeyboardTypeOptions } from 'react-native'
import { ReactNode, useMemo, useState } from 'react'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { View } from 'app/components/ComponentWithTailwind'
import { TextInput } from 'app/components/ComponentWithTailwind'
import { Label } from 'app/components/Label'
import { ErrorMessage } from 'app/components/ErrorMessage'
import { styled } from 'nativewind'

// @ts-ignore
const _MaskedTextInput = dynamic(() => import('react-native-mask-text').then((mod) => mod.MaskedTextInput), { ssr: false })
const MaskedTextInput = styled(_MaskedTextInput)

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
  RightIcon?: ReactNode
  transformOnChange?: (text: string) => string
  /** look how to use options here doc => https://github.com/akinncar/react-native-mask-text */
  isMask?: boolean
  /** look how to use options here doc => https://github.com/akinncar/react-native-mask-text */
  maskType?: string
  /** look how to use options here doc => https://github.com/akinncar/react-native-mask-text */
  maskString?: string
  /** look how to use options here doc => https://github.com/akinncar/react-native-mask-text */
  maskOptions?: any
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
    transformOnChange,
    RightIcon,
    isMask = false,
    maskType,
    maskString,
    maskOptions,
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

  // @ts-ignore
  const InputComponent: typeof TextInput = !isMask ? TextInput : MaskedTextInput
  const otherProps = !isMask
    ? {}
    : { mask: maskString, options: maskOptions, type: maskType }

  const onChangeText = (text: string) => {
    if (!transformOnChange) {
      onChangeEffect(text)
    } else {
      const transformedText = transformOnChange(text)
      onChangeEffect(transformedText)
    }
  }
  
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
        <InputComponent
          {...otherProps}
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
          onChangeText={onChangeText}
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
        {!!RightIcon && (
          <View className="pr-4">
            {RightIcon}
          </View>
        )}
      </View>
      <ErrorMessage text={errorMessage} />
    </View>
  )
}
