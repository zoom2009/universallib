import clsx from 'clsx'
import { Text, View } from 'app/components/ComponentWithTailwind'
import { memo } from 'react'
import { TextProps } from 'react-native'

interface ILabelProps {
  children: string
  required?: boolean
  fullText?: boolean
  bold?: boolean
  textClassName?: string
  color?: string
  otherTextProps?: TextProps
}

const _Label = (props: ILabelProps) => {
  const {
    children,
    required = false,
    fullText = false,
    bold = false,
    textClassName = '',
    color,
    otherTextProps = {},
  } = props

  return (
    <View className="flex flex-row items-center">
      <Text
        bold={bold}
        style={color ? { color } : {}}
        className={clsx([
          'text-sm sm:text-md',
          fullText && 'whitespace-pre',
          textClassName,
        ])}
        {...otherTextProps}
      >
        {children}
        <Text className="pl-0.5 text-danger text-sm sm:text-lg lg:text-xl">
          {required ? '*' : ''}
        </Text>
      </Text>
    </View>
  )
}

export const Label = memo(_Label)
