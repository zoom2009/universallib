import { styled } from 'nativewind'
import { ComponentProps, memo } from 'react'
import {
  View as _View,
  Text as _Text,
  TouchableOpacity as _TouchableOpacity,
  ActivityIndicator as _ActivityIndicator,
  TextInput as _TextInput,
  ScrollView as _ScrollView,
  Image as _BaseImage,
  SafeAreaView as _SafeAreaView,
} from 'react-native'
import dynamic from 'next/dynamic'

// @ts-ignore
const _Image = dynamic(() => import('expo-image').then((mod) => mod.Image), { ssr: false })

const DefaultText = styled(_Text)
type TextProps = ComponentProps<typeof DefaultText> & { bold?: boolean }
const __Text = (props: TextProps) => (
  <DefaultText
    {...props}
    style={[props.style, props.bold && { fontWeight: 'bold' }]}
  />
)

const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['
const DefaultImage = styled(_Image)
type ImageProps = ComponentProps<typeof DefaultImage>
const __DefaultImage = (props: ImageProps) => (
  <DefaultImage
    placeholder={blurhash}
    transition={1000}
    {...props}
  />
)

export const Text = memo(__Text)
export const View = styled(_View)
export const TouchableOpacity = styled(_TouchableOpacity)
export const ActivityIndicator = styled(_ActivityIndicator)
export const TextInput = styled(_TextInput)
export const ScrollView = styled(_ScrollView)
export const SafeAreaView = styled(_SafeAreaView)
export const BaseImage = styled(_BaseImage)
export const Image = memo(__DefaultImage)
