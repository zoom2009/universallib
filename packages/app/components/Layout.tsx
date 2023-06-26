import { ReactNode } from 'react'
import { View } from 'app/components/ComponentWithTailwind'
import { StyleProp, ViewStyle } from 'react-native'
import clsx from 'clsx'

interface ILayoutProps {
  style?: StyleProp<ViewStyle>
  className?: string
  children?: ReactNode
}

const Wrapper = (props: ILayoutProps & { center?: boolean }) => (
  <View
    style={props.style}
    className={clsx([
      'flex flex-row flex-wrap items-center',
      props.center && 'justify-center',
      props.className,
    ])}
  >
    {props.children}
  </View>
)

const _2_1 = (props: ILayoutProps & { gapSize?: number }) => (
  <View
    style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
    className={clsx(['flex w-full md:w-[50%]', !props.gapSize && 'px-4', props.className])}
  >
    {props.children}
  </View>
)

const _3_1 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-full md:w-[33.33%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _4_2_1 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-full md:w-[50%] lg:w-[25%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _4_2 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-[50%] md:w-[25%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _6_4_2_1 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-full md:w-[50%] lg:w-[25%] xl:w-[16.66%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _6_4_2 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-[50%] md:w-[25%] lg:w-[16.66%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _6_3_1 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-full md:w-[33.33%] lg:w-[16.66%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _6_3 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-[33.33%] md:w-[16.66%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _8_6_4_2_1 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-full md:w-[50%] lg:w-[25%] xl:w-[16.66%] 2xl:w-[12.5%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _8_6_4_2 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-[50%] md:w-[25%] lg:w-[16.66%] xl:w-[12.5%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _8_6_4 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-[25%] md:w-[16.66%] lg:w-[12.5%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

const _8_4 = (props: ILayoutProps & { gapSize?: number }) => {
  return (
    <View
      style={[props.style, !!props.gapSize && { paddingHorizontal: props.gapSize }]}
      className={clsx(['flex w-[25%] md:w-[12.5%]', !props.gapSize && 'px-4', props.className])}
    >
      {props.children}
    </View>
  )
}

export const Layout = {
  Wrapper,
  _2_1,
  _3_1,
  _4_2_1,
  _4_2,
  _6_4_2_1,
  _6_4_2,
  _6_3_1,
  _6_3,
  _8_6_4_2_1,
  _8_6_4_2,
  _8_6_4,
  _8_4,
}
