import React, { memo, useState } from "react"
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
  const { navigation } = props

  const [currentStack, setCurrentStack] = useState<STACK>(STACK.vanillaList)

  const onPress = (stack: STACK) => () => {
    navigation.navigate(stack)
    setCurrentStack(stack)
  }

  const renderButton = (name: TxKeyPath, icon: IconTypes, stack: STACK) => (
    <Button style={styles.btn} onPress={onPress(stack)}>
      <Icon
        size={20}
        icon={icon}
        color={currentStack === stack ? colors.black : colors.white}
      />
      <Text
        style={styles.tx}
        size={12}
        tx={name}
        color={currentStack === stack ? colors.black : colors.white}
      />
    </Button>
  )

  return (
    <Row>
      {renderButton("all", "back", STACK.vanillaList)}
      {renderButton("all", "back", STACK.favorite)}
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
