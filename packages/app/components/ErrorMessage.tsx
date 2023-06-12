import { Text, View } from 'app/components/ComponentWithTailwind'

interface IErrorMessageProps {
  text?: string
}

export const ErrorMessage = (props: IErrorMessageProps) => {
  const { text = '' } = props
  if (text === '') return null
  return (
    <View className="mt-2">
      <Text className="text-danger text-sm md:text-md">
        {text}
      </Text>
    </View>
  )
}
