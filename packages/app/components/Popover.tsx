import { ReactNode } from 'react'
import { Text } from 'react-native'
import Tooltip from 'react-native-walkthrough-tooltip'

interface IPopoverProps {
  isVisible: boolean
  children: ReactNode
  onClose: () => void
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center'
  backgroundColor?: string
}

export const Popover = (props: IPopoverProps) => {
  const {
    isVisible,
    children,
    onClose,
    placement = 'top',
    backgroundColor = 'rgba(0, 0, 0, 0.5)',
  } = props

  return (
    <Tooltip
      isVisible={isVisible}
      content={<Text>Check this out!</Text>}
      placement={placement}
      onClose={onClose}
      backgroundColor={backgroundColor}
      disableShadow
    >
      {children}
    </Tooltip>
  )
}
