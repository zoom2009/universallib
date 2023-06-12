import { useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { Icon } from 'app/components/Icon'
import theme from 'app/global/theme'
import { View } from 'app/components/ComponentWithTailwind'
import { ErrorMessage } from 'app/components/ErrorMessage'
import { Label } from 'app/components/Label'

type TOption = {
  key: string
  value: string
  disabled?: boolean
}

interface IDropdownProps {
  label?: string
  errorMessage?: string
  bold?: boolean
  required?: boolean
  search?: boolean
  value: TOption
  options: TOption[]
  onChangeEffect: (option: TOption) => void
}

export const Dropdown = (props: IDropdownProps) => {
  const {
    label,
    errorMessage,
    bold,
    required,
    search = false,
    value,
    options,
    onChangeEffect,
  } = props

  const [isFocus, setIsFocus] = useState(false)

  return(
    <View className="w-full">
      {label && (
      <>
        <View className="flex flex-row justify-start items-center">
          <Label textClassName="text-sm sm:text-md" bold={bold} required={required}>
            {label}
          </Label>
        </View>
        <View className="h-3" />
      </>
      )}
      <SelectList
        setSelected={onChangeEffect}
        defaultOption={value}
        notFoundText="ไม่พบข้อมูล"
        data={options} 
        inputStyles={{
          // @ts-ignore
          outlineStyle: 'none',
        }}
        boxStyles={{
          borderRadius: 8,
          borderColor: !isFocus ? '#555' : theme.colors.info,
          alignItems: 'center',
        }}
        dropdownStyles={{
          borderColor: theme.colors.info,
        }}
        search={search}
        searchicon={
          <View className="pr-3">
            <Icon.MagnifyingGlass size={24} color="black" />
          </View>
        }
        arrowicon={<Icon.CaretDown size={24} color="black" />}
        closeicon={<Icon.XCircle size={24} color="black" />}
        placeholderColor="#999"
        onFocus={setIsFocus}
        searchPlaceholder="พิมพ์เพื่อค้นหา"
        placeholder="กรุณาเลือก"
      />
      <ErrorMessage text={errorMessage} />
    </View>
  )
}