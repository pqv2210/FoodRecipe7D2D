import * as React from "react"
import { Text as ReactNativeText } from "react-native"
import { translate } from "@i18n"
import { colors } from "@theme"
import { TextProps } from "./text.props"

export function Text(props: TextProps) {
  const {
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    size = 14,
    color = colors.black,
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

  const txStyle = [
    {
      ...styleOverride,
      color: color,
      fontSize: size,
    },
  ]

  return (
    <ReactNativeText {...rest} style={txStyle} allowFontScaling={false}>
      {renderText()}
    </ReactNativeText>
  )
}
