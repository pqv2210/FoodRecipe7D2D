import * as React from "react"
import { View, ViewStyle } from "react-native"

const CONTAINER: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
}

export interface RowProps {
  style?: ViewStyle
  children: JSX.Element | JSX.Element[]
}

export function Row(props: RowProps) {
  const { style: styleOverride, children, ...rest } = props
  const viewStyle = { ...CONTAINER, ...styleOverride }

  return (
    <View style={viewStyle} {...rest}>
      {children}
    </View>
  )
}
