import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { BOTTOM, SCREEN_OPTIONS } from "@utils"
import { VanillaBottomTabNavigator } from "../bottom-tab"
import { DrawerTypes } from "@navigators"

const Drawer = createDrawerNavigator<DrawerTypes>()

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName={BOTTOM.vanilla}
      screenOptions={SCREEN_OPTIONS}>
      <Drawer.Screen
        name={BOTTOM.vanilla}
        component={VanillaBottomTabNavigator}
      />
    </Drawer.Navigator>
  )
}
