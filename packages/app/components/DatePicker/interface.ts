export interface IDatePickerProps {
  errorMessage?: string
  label?: string
  required?: boolean
  placeholder?: string
  bold?: boolean
  onChangeEffect: (dateTimestamp: number | undefined) => void
  value: number | undefined
}
