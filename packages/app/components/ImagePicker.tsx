import { TouchableOpacity } from 'app/components/ComponentWithTailwind'
import { ACTIVE_OPACITY, Button } from 'app/components/Button'
import { ImagePickerAsset } from 'expo-image-picker'
import { ReactNode } from 'react'

const isSSR = () => typeof window === 'undefined'

interface IImagePickerProps {
  value: any[]
  onChangeEffect: (images: ImagePickerAsset[]) => void
  multiple?: boolean
  selectionLimit?: number
  quality?: number
  allowsEditing?: boolean
  text?: string
  CustomComponent?: ReactNode
}

export const ImagePicker = (props: IImagePickerProps) => {
  const {
    multiple = false,
    selectionLimit,
    quality = 1,
    allowsEditing = false,
    onChangeEffect,
    CustomComponent,
    text = 'Select Image',
  } = props

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    if (!isSSR()) {
      type ImagePickerExpo = typeof import('expo-image-picker')
      const ImagePickerExpo: ImagePickerExpo = require('expo-image-picker')
      let result = await ImagePickerExpo.launchImageLibraryAsync({
        mediaTypes: ImagePickerExpo.MediaTypeOptions.All,
        allowsEditing,
        allowsMultipleSelection: multiple,
        aspect: [4, 3],
        quality,
        selectionLimit,
      })
      if (!result.canceled) {
        onChangeEffect(result.assets)
      }
    }
  }

  if (!!CustomComponent) {
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      onPress={pickImage}
    >
      {CustomComponent}
    </TouchableOpacity>
  }

  return (
    <Button
      text={text}
      type="primary-outline"
      onPress={pickImage}
    />
  )
}
