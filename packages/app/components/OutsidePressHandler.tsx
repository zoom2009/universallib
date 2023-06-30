import dynamic from 'next/dynamic'
import { memo, ReactNode } from 'react'

// @ts-ignore
const __OutsidePressHandlerProvider = dynamic(() => import('react-native-outside-press').then(mod => mod.EventProvider), { ssr: false })

const _OutsidePressHandlerProvider = ({ children }: { children: ReactNode }) => (
  <__OutsidePressHandlerProvider style={{ flex: 1 }}>
    {children}
  </__OutsidePressHandlerProvider>
)

// @ts-ignore
export const OutsidePressHandler = dynamic(() => import('react-native-outside-press'), { ssr: false })
export const OutsidePressHandlerProvider = memo(_OutsidePressHandlerProvider)
