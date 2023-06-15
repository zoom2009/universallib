import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Tooltip from 'react-native-walkthrough-tooltip'

interface IPopoverProps {
  isVisible: boolean
  Content: ReactNode
  children: ReactNode
  onClose: () => void
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center'
  backgroundColor?: string
  contentStyle?: StyleProp<ViewStyle>
}

export const Popover = (props: IPopoverProps) => {
  const {
    isVisible,
    children,
    Content,
    onClose,
    placement = 'top',
    backgroundColor = 'rgba(0, 0, 0, 0.5)',
    contentStyle = {},
  } = props

  return (
    <Tooltip
      isVisible={isVisible}
      content={Content as any}
      placement={placement}
      onClose={onClose}
      backgroundColor={backgroundColor}
      disableShadow
      contentStyle={[{ flex: 1 }, contentStyle]}
    >
      {children}
    </Tooltip>
  )
}
