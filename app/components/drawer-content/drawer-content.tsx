import React, { memo, useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import { DrawerContentComponentProps } from "@react-navigation/drawer"
import { Button } from "@components"
import { BOTTOM, DRAWER_WIDTH, SCREEN, images } from "@utils"
import { colors } from "@theme"
import { TxKeyPath } from "@i18n"

export const DrawerContent = memo((props: DrawerContentComponentProps) => {
  const { state, navigation } = props

  const [currentTab, setCurrentTab] = useState<string>("vanilla")

  const onGoToScreen = (screen: string) => () => {
    setCurrentTab(screen)
    navigation.navigate(screen)
  }

  const renderButton = (tx: TxKeyPath, navTo: string, index: number) => (
    <Button
      style={styles.btn}
      bgColor={state.index === index ? colors.pavlova : colors.white}
      textColor={state.index === index ? colors.white : colors.black}
      tx={tx}
      onPress={onGoToScreen(navTo)}
    />
  )

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={images.banner} />
      {renderButton("vanilla", BOTTOM.vanilla, 0)}
      {renderButton("appInfo.header", SCREEN.appInfo, 1)}
    </View>
  )
})

const styles = StyleSheet.create({
  container: { flex: 1 },
  banner: {
    width: DRAWER_WIDTH,
    height: (391 / 820) * DRAWER_WIDTH,
    resizeMode: "contain",
    alignSelf: "center",
  },
  btn: {
    marginHorizontal: 10,
    paddingVertical: 12,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
})
