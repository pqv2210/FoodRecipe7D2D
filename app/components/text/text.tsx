import * as React from "react"
import { Text as ReactNativeText } from "react-native"
import { translate } from "@i18n"
import { TextProps, presets } from "./text.props"
import { fonts } from "@utils"

export const Text = function memo(props: TextProps) {
  const {
    preset = "default",
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    size,
    color,
    font,
    ...rest
  } = props

  const renderText = () => {
    if (tx) {
      return translate(tx, txOptions)
    }
    if (text) {
      return text
    }
    if (children) {
      return children
    }
    return ""
  }

  const txStyle = {
    ...styleOverride,
    ...presets[preset],
    color: color ? color : presets[preset].color,
    fontSize: size ? size : presets[preset].fontSize,
    fontFamily: font ? fonts[font] : presets[preset].fontFamily,
  }

  return (
    <ReactNativeText {...rest} style={txStyle} allowFontScaling={false}>
      {renderText()}
    </ReactNativeText>
  )
}
