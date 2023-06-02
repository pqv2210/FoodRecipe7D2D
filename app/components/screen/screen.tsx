import * as React from "react"
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  View,
  ViewStyle,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ScreenProps } from "./screen.props"
import { isNonScrolling, offsets, presets } from "./screen.presets"
import { colors } from "@theme"
import { isIos, isIPhoneX } from "@utils"

const WIDTH: ViewStyle = { width: "100%" }

function ScreenWithoutScrolling(props: ScreenProps) {
  const {
    style,
    backgroundColor,
    unsafe,
    statusBar = "dark-content",
    statusBarColor = colors.white,
    keyboardOffset = "none",
    children,
  } = props

  const insets = useSafeAreaInsets()

  const preset = presets.fixed
  const backgroundStyle = backgroundColor ? { backgroundColor } : {}
  const insetStyle = {
    ...WIDTH,
    height: unsafe || !isIos ? 0 : isIPhoneX() ? insets.top - 7 : insets.top,
    backgroundColor: statusBarColor,
  }

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      keyboardVerticalOffset={offsets[keyboardOffset]}>
      <View style={insetStyle} />
      <StatusBar
        backgroundColor={statusBarColor}
        barStyle={statusBar || "dark-content"}
      />
      <View style={[preset.inner, style]}>{children}</View>
    </KeyboardAvoidingView>
  )
}

function ScreenWithScrolling(props: ScreenProps) {
  const {
    style,
    backgroundColor,
    unsafe,
    statusBar = "dark-content",
    statusBarColor = colors.white,
    keyboardOffset = "none",
    children,
  } = props

  const insets = useSafeAreaInsets()
  const preset = presets.scroll
  const backgroundStyle = backgroundColor ? { backgroundColor } : {}
  const insetStyle = {
    ...WIDTH,
    height: unsafe || !isIos ? 0 : isIPhoneX() ? insets.top - 7 : insets.top,
    backgroundColor: statusBarColor ?? colors.white,
  }

  return (
    <KeyboardAvoidingView
      style={[preset.outer, backgroundStyle]}
      keyboardVerticalOffset={offsets[keyboardOffset]}>
      <View style={insetStyle} />
      <StatusBar backgroundColor={statusBarColor} barStyle={statusBar} />
      <View style={[preset.outer, backgroundStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle]}
          contentContainerStyle={[preset.inner, style]}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

export function Screen(props: ScreenProps) {
  if (isNonScrolling(props.preset ?? "fixed")) {
    return <ScreenWithoutScrolling {...props} />
  } else {
    return <ScreenWithScrolling {...props} />
  }
}
