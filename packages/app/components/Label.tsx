import clsx from 'clsx'
import { Text, View } from 'app/components/ComponentWithTailwind'
import { memo } from 'react'

interface ILabelProps {
  children: string
  required?: boolean
  fullText?: boolean
  bold?: boolean
  textClassName?: string
}

const _Label = (props: ILabelProps) => {
  const {
    children,
    required = false,
    fullText = false,
    bold = false,
    textClassName = '',
  } = props

  return (
    <View className="flex flex-row items-center">
      <Text
        bold={bold}
        className={clsx([
          'text-sm sm:text-md',
          fullText && 'whitespace-pre',
          textClassName,
        ])}
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
