import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "@screens"

const Tab = createBottomTabNavigator()

export function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
    </Tab.Navigator>
  )
}
