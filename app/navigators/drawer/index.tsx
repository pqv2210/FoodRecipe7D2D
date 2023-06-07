import React from "react"
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer"
import { BOTTOM, DRAWER_SCREEN_OPTIONS } from "@utils"
import { DrawerTypes, VanillaBottomTabNavigator } from "@navigators"
import { DrawerContent } from "@components"

const Drawer = createDrawerNavigator<DrawerTypes>()

export function DrawerNavigator() {
  const renderDrawerContent = (props: DrawerContentComponentProps) => (
    <DrawerContent {...props} />
  )

  return (
    <Drawer.Navigator
      initialRouteName={BOTTOM.vanilla}
      screenOptions={DRAWER_SCREEN_OPTIONS}
      drawerContent={renderDrawerContent}>
      <Drawer.Screen
        name={BOTTOM.vanilla}
        component={VanillaBottomTabNavigator}
      />
    </Drawer.Navigator>
  )
}
