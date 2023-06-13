import Collapsible from 'react-native-collapsible'
import { IAccordionProps } from './interface'

export const Accordion = (props: IAccordionProps) => {
  const { children, isOpen } = props

  return (
    // @ts-ignore
    <Collapsible collapsed={!isOpen}>
      {children}
    </Collapsible>
  )
}
