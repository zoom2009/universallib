import dynamic from 'next/dynamic'

export enum VideoResizeMode {
  CONTAIN = 'contain',
  COVER = 'cover',
  STRETCH = 'stretch',
}

// @ts-ignore
export const Video = dynamic(() => import('expo-av').then((mod) => mod.Video), { ssr: false })
