import {
  ViewStyle,
  TextStyle,
  TouchableWithoutFeedbackProps,
} from "react-native"
import { TxKeyPath, TxOptions } from "@i18n"

export const scales = {
  small: 0.98,
  large: 0.9,
  none: 1,
}

type ScaleType = keyof typeof scales

export interface ButtonProps extends TouchableWithoutFeedbackProps {
  tx?: TxKeyPath
  text?: string
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
  children?: JSX.Element | JSX.Element[]
  bgColor?: string
  textColor?: string
  iconColor?: string
  loading?: boolean
  size?: number
  scale?: ScaleType
  txOptions?: TxOptions
  loadingColor?: string
}
