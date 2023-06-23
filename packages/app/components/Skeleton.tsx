import dynamic from 'next/dynamic'

// @ts-ignore
const Placeholder = dynamic(() => import('rn-placeholder').then((mod) => mod.Placeholder), { ssr: false })

// @ts-ignore
const PlaceholderMedia = dynamic(() => import('rn-placeholder').then((mod) => mod.PlaceholderMedia), { ssr: false })

// @ts-ignore
const Fade = dynamic(() => import('rn-placeholder').then((mod) => mod.Fade), { ssr: false })

interface ISkeletonProps {
  width: number
  height: number
  borderRadius?: number
  backgroundColor?: string
  isCenter?: boolean
}

export const Skeleton = (props: ISkeletonProps) => {
  const { width, height, borderRadius, backgroundColor = 'white', isCenter = false } = props

  return (
    <Placeholder Animation={Fade}>
      <PlaceholderMedia style={{ alignSelf: isCenter ? 'center' : 'flex-start', width, height, borderRadius, backgroundColor }} />
    </Placeholder>
  )
}
