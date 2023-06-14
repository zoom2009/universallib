import React, { useEffect, useRef, useState } from 'react'
import { Modal, Platform, Switch } from 'react-native'
import { Image, SafeAreaView, TouchableOpacity, Text, View } from 'app/components/ComponentWithTailwind'
import { Icon } from 'app/components/Icon'
import { CameraCapturedPicture } from 'expo-camera'
import { ACTIVE_OPACITY, Button } from 'app/components/Button'
import theme from 'app/global/theme'

interface ICameraPickerProps {
  isShowCamera: boolean
  onClose: () => void
  onChangeEffect: (image: CameraCapturedPicture) => void
}

const isSSR = () => typeof window === 'undefined'

export const CameraPicker = (props: ICameraPickerProps) => {
  const { 
    isShowCamera = true,
    onClose,
    onChangeEffect,
  } = props

  type CameraModuleType = typeof import('expo-camera')
  const CameraModule: CameraModuleType = !isSSR() ? require('expo-camera') : undefined

  const cameraRef: any = useRef()
  const [picture, setPicture] = useState<CameraCapturedPicture | undefined>(undefined)
  const [hasCameraPermission, setHasCameraPermission] = useState(false)
  const [cameraType, setCameraType] = useState<any>('front')

  const requestCameraPermission = () => {
    if (!isSSR()) {
      CameraModule.requestCameraPermissionsAsync().then((permission) => {
        setHasCameraPermission(permission.granted)
      }).catch((e: any) => {
        setHasCameraPermission(false)
      })
    }
  }

  const onSave = () => {
    if (picture) {
      onChangeEffect(picture)
      onClose()
      setTimeout(() => {
        setPicture(undefined)
      }, 1000)
    }
  }

  const onReject = () => setPicture(undefined)

  const onToggleSwitch = (value: boolean) => setCameraType(value ? CameraModule.CameraType.back : CameraModule.CameraType.front)

  const onTakePicture = () => {
    if (cameraRef.current && cameraRef.current.takePictureAsync) {
      cameraRef.current.takePictureAsync({
        quality: 1,
        scale: 1,
        base64: false,
      }).then((pic: CameraCapturedPicture) => {
        setPicture(pic)
      }).catch((e: any) => {
        console.log('e:', e)
      })
    }
  }

  useEffect(() => {
    if (isShowCamera === true) {
      requestCameraPermission()
    }
  }, [isShowCamera])

  return (
    <Modal visible={isShowCamera} animationType="slide">
      <View className="w-screen h-screen">
        {picture && (
        <View className="flex flex-1 relative">
          <Image
            className="w-full h-full"
            source={{ uri: picture.uri }}
          />
          <View className="absolute z-10 bottom-10 w-full justify-center items-center flex flex-row">
            <Button
              LeftIcon={<Icon.FloppyDisk color="white" size={30} />}
              text="บันทึก"
              onPress={onSave}
              type="primary"
            />
            <View className="w-4" />
            <Button
              LeftIcon={<Icon.ArrowClockwise color="white" size={30} />}
              text="ถ่ายใหม่"
              onPress={onReject}
              type="danger"
            />
          </View>
        </View>
        )}
        {hasCameraPermission && !picture && !isSSR() && (
        <CameraModule.Camera
          style={{ flex: 1, width: '100%', height: '100%' }}
          type={cameraType}
          ref={cameraRef}
        >
          <SafeAreaView style={{ flex: 1, width: '100%' }}>
            <View className="w-full justify-between flex flex-row p-4 items-start">
              <TouchableOpacity
                activeOpacity={ACTIVE_OPACITY}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} className="rounded-full px-4 py-2"
                onPress={onClose}
              >
                <Icon.CaretLeft
                  size={36}
                  color="white"
                />
              </TouchableOpacity>
              {(Platform.OS === 'android' || Platform.OS === 'ios') && (
              <View className="rounded-xl px-3 py-0.5 bg-gray-300 items-center justify-center flex flex-row">
                <Text className="text-md">
                  สลับกล้อง
                </Text>
                <Switch
                  onValueChange={onToggleSwitch}
                  value={cameraType === CameraModule.CameraType.back}
                  thumbColor={theme.colors.primary}
                  trackColor={{ true: theme.colors.info }}
                />
              </View>
              )}
            </View>
            <View className="flex flex-1" />
            <View className="p-4">
            <TouchableOpacity
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              className="mx-auto w-48 py-1.5 rounded-full justify-center items-center"
              activeOpacity={global.activeOpacity}
              onPress={onTakePicture}
            >
              <View className="bg-black p-4 rounded-full">
                <Icon.Camera size={30} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
        </CameraModule.Camera>
        )}
      </View>
    </Modal>
  )
}
