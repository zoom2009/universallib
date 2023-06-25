import { memo } from 'react'
import { Image } from '../ComponentWithTailwind'
import { ILocalImageProps } from './interface'

const _LocalImage = (props: ILocalImageProps) => {
  const {
    source,
    style,
    className,
    contentFit,
  } = props

  return (
    <Image
      source={source}
      style={style as any}
      className={className}
      contentFit={contentFit}
    />
  )
}

export const LocalImage = memo(_LocalImage)
