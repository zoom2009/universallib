import React, { useState } from 'react'

interface IWithStateProps {
  children: React.ReactElement<any>
  customOnChangeEffect?: any
}

export const WithState = (props: IWithStateProps) => {
  const { children, customOnChangeEffect } = props
  const [state, setState] = useState<any>(undefined)
  return React.cloneElement(children, { value: state, onChangeEffect: customOnChangeEffect || setState })
}
