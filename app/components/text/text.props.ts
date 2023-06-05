import { TxKeyPath, TxOptions } from "@i18n"
import { FontsTypes } from "@utils"
import { TextProps as RNTextProps, TextStyle } from "react-native"

export interface TextProps extends RNTextProps {
  children?: JSX.Element | JSX.Element[]
  tx?: TxKeyPath
  txOptions?: TxOptions
  text?: string
  style?: TextStyle | TextStyle[]
  size?: number
  color?: string
  font?: FontsTypes
}
