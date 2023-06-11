import { Text } from 'app/components/ComponentWithTailwind'

interface IErrorMessageProps {
  text: string
}

export const ErrorMessage = (props: IErrorMessageProps) => {
  const { text } = props
  if (text === '') return null
  return (
    <Text className="text-danger text-sm md:text-md mt-2">
      {text}
    </Text>
  )
}
