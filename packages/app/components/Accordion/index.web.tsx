import dynamic from 'next/dynamic'
import { IAccordionProps } from './interface'

// @ts-ignore
const Collapsible = dynamic(() => import('react-collapsible'), {
  ssr: false,
})

export const Accordion = (props: IAccordionProps) => {
  const { children, isOpen, duration = 0.25 } = props
  return (
    <Collapsible trigger="" open={isOpen} transitionTime={duration * 1000}>
      {children}
    </Collapsible>
  )
}
