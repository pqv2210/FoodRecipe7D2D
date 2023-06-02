import { ViewStyle } from "react-native"
import { colors } from "@theme"
import { isNil } from "@utils"

export const offsets = { none: 0 }

export type KeyboardOffsets = keyof typeof offsets

export const presets = {
  fixed: {
    outer: {
      flex: 1,
      backgroundColor: colors.background,
      height: "100%",
    } as ViewStyle,
    inner: {
      justifyContent: "flex-start",
      alignItems: "stretch",
      height: "100%",
      width: "100%",
    } as ViewStyle,
  },

  scroll: {
    outer: {
      flex: 1,
      backgroundColor: colors.background,
      height: "100%",
    } as ViewStyle,
    inner: {
      justifyContent: "flex-start",
      alignItems: "stretch",
    } as ViewStyle,
  },
}

export type ScreenPresets = keyof typeof presets

export function isNonScrolling(preset: ScreenPresets) {
  return isNil(preset) || !preset.length || preset === "fixed"
}
