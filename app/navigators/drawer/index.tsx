import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { HomeScreen } from "@screens"

const Drawer = createDrawerNavigator()

export function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  )
}
