import { Platform } from 'react-native'
import { ToastContainer } from 'react-toast'
import React from 'react'
import { TOAST_DURATION } from 'app/functions/displayToast/index.native'

interface IToastRootProviderProps {
  children: React.ReactNode
}

export const ToastRootProvider = (props: IToastRootProviderProps) => {
  if (Platform.OS === 'web') return (
    <>
      {props.children}
      <ToastContainer delay={TOAST_DURATION} />
    </>
  )

  return <>{props.children}</>
}
