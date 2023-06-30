import { Modal, ActivityIndicator } from 'react-native'
import { Text, View } from 'app/components/ComponentWithTailwind'

interface ILoadingSpinnerOverlayProps {
  visible: boolean
  text?: string
}

export const LoadingSpinnerOverlay = (props: ILoadingSpinnerOverlayProps) => {
  const { 
    visible = false,
    text,
  } = props

  return (
    <Modal animationType="fade" visible={visible} transparent>
      <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="w-screen h-screen flex flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="white" />
        <View className="h-4" />
        {!!text && <Text className="text-white text-md text-center">{text}</Text>}
      </View>
    </Modal>
  )
}
