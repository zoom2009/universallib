import dynamic from 'next/dynamic'
import { StyleProp, ViewStyle } from 'react-native'
import { ReactNode } from 'react'

// @ts-ignore
export const MotiView = dynamic(() => import('moti').then((mod) => mod.MotiView), { ssr: false })

// @ts-ignore
export const _Skeleton = dynamic(() => import('moti/skeleton').then((mod) => mod.Skeleton), { ssr: false })

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
  width?: string | number
  height?: string | number
  radius?: 'round' | 'square' | number
}

export const Skeleton = (props: ISkeletonProps) => {
  return (
    <_Skeleton
      colorMode="light"
      radius={props.radius}
      height={props.height}
      width={props.width}
    />
  )
}
