import React, { memo } from "react"
import { StyleSheet } from "react-native"
import { Button, Icon, Row, Text } from "@components"
import { TxKeyPath } from "@i18n"
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs"
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native"
import { colors } from "@theme"
import { IconTypes, STACK } from "@utils"

interface BottomMenuProps {
  state: TabNavigationState<ParamListBase>
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
}

export const BottomMenu = memo((props: BottomMenuProps) => {
  const { state, navigation } = props

  const onPress = (stack: STACK) => () => {
    navigation.navigate(stack)
  }

  const renderButton = (
    name: TxKeyPath,
    icon: IconTypes,
    index: number,
    stack: STACK,
  ) => (
    <Button style={styles.btn} onPress={onPress(stack)}>
      <Icon size={20} icon={icon} />
      <Text
        style={styles.tx}
        size={12}
        tx={name}
        font={state.index === index ? "bold" : "medium"}
      />
    </Button>
  )

  return (
    <Row>
      {renderButton("all", "list", 0, STACK.vanillaList)}
      {renderButton("favorite", "favoriteFilled", 1, STACK.favorite)}
    </Row>
  )
})

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  tx: {
    textAlign: "center",
    marginTop: 3,
  },
})
