import Toast from 'react-native-root-toast'
import { IDisplayToastProps } from './interface'

export const TOAST_DURATION = 4500

export const displayToast = (props: IDisplayToastProps) => {
  const { message } = props
  Toast.show(message, {
    duration: TOAST_DURATION,
    delay: 0,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
  })
}
