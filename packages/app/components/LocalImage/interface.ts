import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";

export interface ILocalImageProps {
  source: ImageSourcePropType
  style?: StyleProp<ImageStyle>
  className?: string
  contentFit?: 'contain' | 'cover' | 'fill' | 'none'
}
