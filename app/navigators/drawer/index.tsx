import React from "react"
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer"
import { BOTTOM, DRAWER_SCREEN_OPTIONS, SCREEN } from "@utils"
import { DrawerTypes, VanillaBottomTabNavigator } from "@navigators"
import { DrawerContent } from "@components"
import { AppInfo } from "@screens"

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
      <Drawer.Screen name={SCREEN.appInfo} component={AppInfo} />
    </Drawer.Navigator>
  )
}
