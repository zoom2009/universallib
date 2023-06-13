import { View } from 'app/components/ComponentWithTailwind'
import AwesomeAlert, { AwesomeAlertProps } from 'react-native-awesome-alerts'
import clsx from 'clsx'

// ** Note ** Alert Component should place outside ScrollView
export const Alert = (props: AwesomeAlertProps) => {
  return (
    <View
      pointerEvents={!props.show ? 'none' : 'auto'}
      className={clsx('fixed w-full z-50 top-0 right-0 left-0 bottom-0')}
    >
      <AwesomeAlert {...props} />
    </View>
  )
}
