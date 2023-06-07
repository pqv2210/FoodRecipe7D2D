import React, { memo } from "react"
import { ButtonProps, scales } from "./button.props"
import {
  ActivityIndicator,
  Animated,
  TouchableWithoutFeedback,
} from "react-native"
import { Text } from "@components"
import { colors } from "@theme"

export const Button = memo((props: ButtonProps) => {
  const {
    tx,
    text,
    style: styleOverride,
    textStyle,
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

  const viewStyle = {
    ...styleOverride,
    backgroundColor: bgColor ?? colors.white,
    transform: [
      {
        scale: scaleType,
      },
    ],
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={loading}
      {...rest}>
      <Animated.View style={viewStyle}>
        {loading ? (
          <ActivityIndicator color={loadingColor ?? colors.black} />
        ) : (
          children ?? (
            <Text
              style={textStyle}
              tx={tx}
              size={size ?? 14}
              color={textColor ?? colors.black}
              text={text}
              txOptions={txOptions}
            />
          )
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
})
