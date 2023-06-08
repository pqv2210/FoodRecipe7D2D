import { TextProps as RNTextProps, TextStyle } from "react-native"
import { TxKeyPath, TxOptions } from "@i18n"
import { colors } from "@theme"
import { FontsTypes, fonts } from "@utils"

interface TextPresetProps {
  [name: string]: TextStyle
}

const BASE: TextStyle = {
  color: colors.black,
  fontFamily: fonts.medium,
  fontSize: 14,
}

export const presets: TextPresetProps = {
  default: BASE,
  link: {
    ...BASE,
    textDecorationLine: "underline",
    textDecorationColor: colors.lightBlue,
    color: colors.lightBlue,
  },
}

export type TextPresets = keyof typeof presets

export interface TextProps extends RNTextProps {
  preset?: TextPresets
  children?: React.ReactNode
  tx?: TxKeyPath
  txOptions?: TxOptions
  text?: string
  style?: TextStyle | TextStyle[]
  size?: number
  color?: string
  font?: FontsTypes
}
