import { MotiView } from 'moti'
import { Skeleton as _Skeleton } from 'moti/skeleton'
import { StyleProp, ViewStyle } from 'react-native'
import { ReactNode } from 'react'

interface ISkeletonContainerProps {
  style?: StyleProp<ViewStyle>
  children: ReactNode
}

export const SkeletonContainer = (props: ISkeletonContainerProps) => (
  <MotiView
    transition={{ type: 'timing' }}
    style={[{ flex: 1 }, props.style]}
    animate={{ backgroundColor: '#fff' }}
  >
    {props.children}
  </MotiView>
)

interface ISkeletonProps {
  circle?: boolean
  width?: string | number
  height?: string | number
}

export const Skeleton = (props: ISkeletonProps) => {
  return (
    <_Skeleton
      colorMode="light"
      radius={props.circle ? 'round' : 'square'}
      height={props.height}
      width={props.width}
    />
  )
}
