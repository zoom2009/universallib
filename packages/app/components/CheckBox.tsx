import { Text, TouchableOpacity, View } from 'app/components/ComponentWithTailwind'
import clsx from 'clsx'
import theme from 'app/global/theme'
import { Label } from 'app/components/Label'
import { ACTIVE_OPACITY } from 'app/components/Button'
import { ErrorMessage } from 'app/components/ErrorMessage'
import { Icon } from 'app/components/Icon'

type TOption = {
  id: string
  text: string
}

interface ICheckBoxProps {
  label?: string
  radio?: boolean
  activeId: string[]
  onChangeEffect: (option: TOption) => void
  options: TOption[]
  required?: boolean
  bold?: boolean
  isColumn?: boolean
  errorMessage?: string
}

export const CheckBox = (props: ICheckBoxProps) => {
  const {
    label,
    radio = false,
    activeId,
    options,
    required,
    bold,
    isColumn = false,
    errorMessage,
    onChangeEffect,
  } = props

  const onSelect = (option: TOption) => () => {
    onChangeEffect(option)
  }

  return (
    <View className="flex flex-col">
      {label && (<>
        <Label bold={bold} required={required}>{label}</Label>
      </>)}
      <View className={clsx([
        'flex flex-wrap -ml-4',
        !label && '-mt-3',
        isColumn ? 'flex-col items-start' : 'flex-row items-end',
      ])}>
        {options.map((option, index) => {
          const { id, text } = option
          const isActive = activeId.includes(id)

          return (
            <TouchableOpacity
              key={id}
              activeOpacity={ACTIVE_OPACITY}
              onPress={onSelect(option)}
              className={clsx([
                isColumn ? 'items-center' : 'items-end',
                'ml-4 flex flex-row mt-3',
              ])}
            >
              {!radio ? (
                !isActive ? (
                  <Icon.Square size={28} color={theme.colors.info} />
                ) : (
                  <Icon.CheckSquare size={28} color={theme.colors.info} />
                )
              ) : (
                !isActive ? (
                  <Icon.Circle size={28} color={theme.colors.info} />
                ) : (
                  <Icon.RadioButton weight="fill" size={28} color={theme.colors.info} />
                )
              )}
              <View className="w-2" />
              <Text className="text-sm md:text-md">{text}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <ErrorMessage text={errorMessage} />
    </View>
  )
}
