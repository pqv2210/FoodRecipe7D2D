import * as React from "react"
import { ButtonProps, scales } from "./button.props"
import {
  ActivityIndicator,
  Animated,
  TouchableWithoutFeedback,
} from "react-native"
import { Text } from ".."
import { colors } from "@theme"

export function Button(props: ButtonProps) {
  const {
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    bgColor,
    textColor,
    loading,
    size,
    txOptions,
    scale = "small",
    loadingColor,
    ...rest
  } = props

  const animation = new Animated.Value(0)

  const inputRange = [0, 1]

  const outputRange = [1, scales[scale ?? "large"]]

  const scaleType = animation.interpolate({ inputRange, outputRange })

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  const viewStyle = [
    styleOverride,
    { backgroundColor: bgColor ?? colors.white },
  ]

  const textStyle = [
    {
      ...textStyleOverride,
      fontSize: size ?? 14,
      color: textColor ?? colors.black,
    },
  ]

  const content = children || (
    <Text tx={tx} text={text} style={textStyle} txOptions={txOptions} />
  )

  return (
    <TouchableWithoutFeedback
      style={viewStyle}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={loading}
      {...rest}>
      <Animated.View
        style={{
          transform: [
            {
              scale: scaleType,
            },
          ],
          ...viewStyle,
        }}>
        {loading ? (
          <ActivityIndicator color={loadingColor ?? colors.black} />
        ) : (
          content
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
