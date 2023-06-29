import * as R from 'ramda'
import { View } from "app/components/ComponentWithTailwind"
import ThaiAddress from 'react-thai-address'
import { useState } from 'react'
import { Dropdown } from 'app/components/Dropdown'
import { Label } from 'app/components/Label'
import { Input } from 'app/components/Input'
import { Layout } from 'app/components/Layout'
import { isEmpty } from 'app/logics/validate'

type TOnSelect = {
  subDistrict: string
  district: string
  province: string
  zipcode: string
}

interface IAutoCompleteProps {
  addressField: string
  label: string
  placeholder?: string
  onSelect: (props: TOnSelect) => void
  value: { key: string, value: string }
  erorrMessage?: string
}

interface IThaiAddressAutoCompleteProps {
  label: string
  currentState: {
    address?: string
    province?: { key: string, value: string }
    district?: { key: string, value: string }
    subDistrict?: { key: string, value: string }
    zipcode?: { key: string, value: string }
  }
  onChangeEffect: (addressFields: {
    address?: string
    province?: { key: string, value: string }
    district?: { key: string, value: string }
    subDistrict?: { key: string, value: string }
    zipcode?: { key: string, value: string }
  }) => void
  CustomHeaderSection?: any
  errors: {
    address: string
    province: string
    district: string
    subDistrict: string
    zipcode: string
  }
}

const delimiter = ', '

const AutoComplete = (props: IAutoCompleteProps) => {
  const {
    addressField,
    label,
    placeholder,
    onSelect,
    value,
  } = props
  const [options, setOptions] = useState([])

  const handleChange = (text: string) => {
    let searchKey = addressField

    switch (searchKey) {
      case 'subDistrict': searchKey = 'tumbon'; break
      case 'district': searchKey = 'city'; break
      default:
    }

    const search = ThaiAddress.search({ [searchKey]: text }, 10)
    let _search = search
    _search = _search || search
    const _options = _search.map((item: any) => {
      const value = `${item.tumbon}${delimiter}${item.city}${delimiter}${item.province}${delimiter}${item.zipcode}`
      return { key: value, value }
    })

    setOptions(_options)
  }

  const handleSelect = (value: any) => {
    const address = value.split(delimiter)
    onSelect && onSelect({
      subDistrict: address[0],
      district: address[1],
      province: address[2],
      zipcode: address[3],
    })
  }

  return (
    <View>
      <Dropdown
        search
        label={label}
        placeholder={placeholder}
        options={options}
        onSearchEffect={handleChange}
        onChangeEffect={handleSelect}
        value={value}
        required
      />
    </View>
  )
}

export const ThaiAddressAutoComplete = (props: IThaiAddressAutoCompleteProps) => {
  const {
    label,
    currentState,
    onChangeEffect,
    errors,
    CustomHeaderSection,
  } = props

  const onSelect = (fullAddress: any) => {
    const { subDistrict, district, province, zipcode } = fullAddress
    if (
      !isEmpty(subDistrict) &&
      !isEmpty(district) &&
      !isEmpty(province) &&
      !isEmpty(zipcode)
    ) {
      onChangeEffect({
        subDistrict: { key: subDistrict, value: subDistrict },
        district: { key: district, value: district },
        province: { key: province, value: province },
        zipcode: { key: zipcode, value: zipcode },
      })
    }
  }


  const onChangeAddress = (text: string) => {
    onChangeEffect({ address: text })
  }

  return (
    <>
      <View className="flex flex-row flex-1 items-center">
        <Label bold>{label}</Label>
        {!!CustomHeaderSection && CustomHeaderSection}
      </View>
      <View className="h-8" />
      <View className="w-full">
        <Input
          label="ที่อยู่"
          required
          placeholder="บ้านเลขที่ / หมู่บ้าน / ถนน / ซอย"
          value={R.path(['address'], currentState)}
          onChangeEffect={onChangeAddress}
          errorMessage={errors.address}
        />
        <Layout.Wrapper top>
          <Layout._2_1 gapSize={-1} className="sm:pr-2">
            <View className="h-6" />
            <AutoComplete
              label="ตำบล / แขวง"
              addressField="subDistrict"
              onSelect={onSelect}
              value={R.path(['subDistrict'], currentState)}
              placeholder="พิมพ์เพื่อค้นหา"
              erorrMessage={errors.subDistrict}
            />
          </Layout._2_1>
          <Layout._2_1 gapSize={-1} className="sm:pl-2">
            <View className="h-6" />
            <AutoComplete
              label="เขต / อำเภอ"
              addressField="district"
              onSelect={onSelect}
              value={R.path(['district'], currentState)}
              placeholder="พิมพ์เพื่อค้นหา"
              erorrMessage={errors.district}
            />
          </Layout._2_1>
        </Layout.Wrapper>
        <Layout.Wrapper top>
          <Layout._2_1 gapSize={-1} className="sm:pr-2">
            <View className="h-6" />
            <AutoComplete
              label="จังหวัด"
              addressField="province"
              onSelect={onSelect}
              value={R.path(['province'], currentState)}
              placeholder="พิมพ์เพื่อค้นหา"
              erorrMessage={errors.province}
            />
          </Layout._2_1>
          <Layout._2_1 gapSize={-1} className="sm:pl-2">
            <View className="h-6" />
            <AutoComplete
              label="รหัสไปรษณีย์"
              addressField="zipcode"
              onSelect={onSelect}
              value={R.path(['zipcode'], currentState)}
              placeholder="พิมพ์เพื่อค้นหา"
              erorrMessage={errors.zipcode}
            />
          </Layout._2_1>
        </Layout.Wrapper>
      </View>
    </>
  )
}
