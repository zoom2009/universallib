import { Modal } from 'react-native'
import { ReactNode, useEffect, useState } from 'react'
import { View, ScrollView, TouchableOpacity } from 'app/components/ComponentWithTailwind'
import { getInsets } from 'app/functions/getInsets'
import { MotiView } from 'moti'
import { OutsidePressHandler } from 'app/components/OutsidePressHandler'
import { ACTIVE_OPACITY } from 'app/components/Button'
import { Icon } from 'app/components/Icon'

interface IDrawerProps {
  visible: boolean
  onClose: () => void
  backgroundColor?: string
  withClose?: boolean
  children: ReactNode
}

export const Drawer = (props: IDrawerProps) => {
  const {
    visible,
    onClose,
    children,
    backgroundColor = 'white',
    withClose = false,
  } = props

  const duration = 300
  const maxWidth = 400
  const [showAnimation, setShowAnimation] = useState(false)
  const insets = getInsets()

  useEffect(() => {
    if (visible) {
      setShowAnimation(true)
    }
  }, [visible])

  const onCloseFunction = () => {
    setShowAnimation(false)
    setTimeout(() => onClose(), duration)
  }

  return (
    <Modal visible={visible} transparent onRequestClose={onCloseFunction} style={{ position: 'relative' }}>
      <View
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        className="flex flex-1 w-screen h-screen absolute -z-10"
      />
      <OutsidePressHandler
        style={{ height: '100%', width: '85%', maxWidth }}
        disabled={false} onOutsidePress={onCloseFunction}
      >
        <MotiView
          animate={{
            opacity: showAnimation ? 1 : 0,
            width: showAnimation ? '85%' : '0%',
          }}
          transition={{ type: 'timing', duration }}
          style={{ backgroundColor, maxWidth, height: '100%', flex: 1 }}
        >
          <ScrollView className="relative" contentContainerStyle={{ paddingTop: insets.top + 10, paddingBottom: insets.bottom + 10, flexGrow: 1 }}>
            {withClose && (
              <TouchableOpacity className="absolute z-20 top-4 right-4" hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} activeOpacity={ACTIVE_OPACITY} onPress={onCloseFunction}>
                <Icon.X size={22} color="#555" weight="bold" />
              </TouchableOpacity>
            )}
            {children}
          </ScrollView>
        </MotiView>
      </OutsidePressHandler>
    </Modal>
  )
}
