import { memo, ReactNode, useEffect, useState } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Tooltip from 'react-native-walkthrough-tooltip'
import { MotiView } from 'moti'

interface IPopoverProps {
  isVisible: boolean
  Content: ReactNode
  children: ReactNode
  onClose: () => void
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center'
  backgroundColor?: string
  contentStyle?: StyleProp<ViewStyle>
}

const _Popover = (props: IPopoverProps) => {
  const duration = 200
  const [customBackgroundColor, setCustomBackgroundColor] = useState('transparent')
  const {
    isVisible,
    children,
    Content,
    onClose,
    placement = 'top',
    backgroundColor = 'rgba(0, 0, 0, 0.5)',
    contentStyle = {},
  } = props

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setCustomBackgroundColor('white'), duration - 20)
    } else {
      setTimeout(() => setCustomBackgroundColor('transparent'), duration)
    }
  }, [isVisible])

  return (
    <Tooltip
      isVisible={isVisible}
      content={
        <MotiView
          from={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'timing', duration }}
          style={{ flex: 1, backgroundColor: 'white' }}
        >
          {Content}
        </MotiView>
      }
      placement={placement}
      onClose={onClose}
      backgroundColor={backgroundColor}
      disableShadow
      contentStyle={[{ flex: 1, backgroundColor: customBackgroundColor }, contentStyle]}
    >
      {children}
    </Tooltip>
  )
}

export const Popover = memo(_Popover)
