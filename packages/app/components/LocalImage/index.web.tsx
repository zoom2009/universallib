import { memo, useMemo } from 'react'
import * as R from 'ramda'
import { Image } from 'app/components/ComponentWithTailwind'
import { ILocalImageProps } from './interface'

const _LocalImage = (props: ILocalImageProps) => {
  const {
    source,
    style,
    className,
    contentFit,
  } = props

  const uri = useMemo(() => {
    return R.path(['default', 'src'], source)
  }, [source]) as string

  return (
    <Image
      source={{ uri }}
      style={style as any}
      className={className}
      contentFit={contentFit}
    />
  )
}

export const LocalImage = memo(_LocalImage)
