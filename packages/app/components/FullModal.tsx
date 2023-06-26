import { getInsets } from "app/functions/getInsets"
import { ReactNode } from "react"
import { Modal } from "react-native"
import { TouchableOpacity, View } from "app/components/ComponentWithTailwind"
import { Icon } from "app/components/Icon"
import { ACTIVE_OPACITY } from "./Button"

interface IFullModal {
  children: ReactNode
  visible: boolean
  onClose: () => void
  showClose?: boolean
  animationType?: 'none' | 'slide' | 'fade'
}

export const FullModal = (props: IFullModal) => {
  const {
    children,
    visible,
    onClose,
    showClose = true,
    animationType = 'slide',
  } = props
  const insets = getInsets()

  return (
    <Modal animationType={animationType} visible={visible} transparent>
      <View
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        className="flex flex-1 justify-center items-center relative"
      >
        {showClose && (
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={onClose}
            className="absolute top-5 right-5 z-50"
          >
            <Icon.XCircle weight="fill" color="black" size={36} />
          </TouchableOpacity>
        )}
        <View
          style={{ paddingTop: insets.top, paddingLeft: insets.left, paddingBottom: insets.bottom, paddingRight: insets.right }}
          className="flex flex-1 bg-white w-full"
        >
          {children}
        </View>
      </View>
    </Modal>
  )
}
