import { ViewStyle } from "react-native"
import { KeyboardOffsets, ScreenPresets } from "./screen.presets"

export interface ScreenProps {
  children?: JSX.Element | JSX.Element[]
  style?: ViewStyle | ViewStyle[]
  preset?: ScreenPresets
  backgroundColor?: string
  statusBar?: "light-content" | "dark-content"
  unsafe?: boolean
  keyboardOffset?: KeyboardOffsets
  statusBarColor?: string
}
