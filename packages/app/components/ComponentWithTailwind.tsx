import { styled } from 'nativewind'
import { ComponentProps, memo } from 'react'
import {
  View as _View,
  Text as _Text,
  TouchableOpacity as _TouchableOpacity,
  ActivityIndicator as _ActivityIndicator,
  TextInput as _TextInput,
  ScrollView as _ScrollView,
  Image as _Image,
  SafeAreaView as _SafeAreaView,
} from 'react-native'

const DefaultText = styled(_Text)
type TextProps = ComponentProps<typeof DefaultText> & { bold?: boolean }
const __Text = (props: TextProps) => (
  <DefaultText
    {...props}
    style={[props.style, props.bold && { fontWeight: 'bold' }]}
  />
)

export const Text = memo(__Text)
export const View = styled(_View)
export const TouchableOpacity = styled(_TouchableOpacity)
export const ActivityIndicator = styled(_ActivityIndicator)
export const TextInput = styled(_TextInput)
export const ScrollView = styled(_ScrollView)
export const Image = styled(_Image)
export const SafeAreaView = styled(_SafeAreaView)
