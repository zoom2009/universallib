import { Platform } from 'react-native'
import { ToastContainer } from 'react-toast'
import React from 'react'

interface IToastRootProviderProps {
  children: React.ReactNode
}

export const ToastRootProvider = (props: IToastRootProviderProps) => {
  if (Platform.OS === 'web') return (
    <>
      {props.children}
      <ToastContainer />
    </>
  )

  return <>{props.children}</>
}
