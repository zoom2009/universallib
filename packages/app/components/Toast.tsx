import { forwardRef } from 'react'
import _Toast, { ToastType } from 'react-native-toast-notifications'
import { View } from 'app/components/ComponentWithTailwind'

export const Toast = forwardRef((props: any, ref) => (
  <View
    pointerEvents="none"
    className="fixed w-full z-50 top-0 right-0 left-0 bottom-0"
  >
    <_Toast
      {...props}
      ref={ref as any}
    />
  </View>
))

/*
  Example:
  const toastRef = useRef()

  const show = () => {
    toastRef.current.show('Hello World', {
      type: "normal | success | warning | danger | custom",
      placement: "top | bottom",
      duration: 4000,
      offset: 30,
      animationType: "slide-in | zoom-in",
    })
  }

  return (
    <Toast ref={(ref) => global['toast'] = ref} />
  )
*/
