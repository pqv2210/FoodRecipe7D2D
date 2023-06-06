import React from "react"
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs"
import { VanillaBottomTabTypes, VanillaStack } from "@navigators"
import { SCREEN_OPTIONS, STACK } from "@utils"
import { BottomMenu } from "@components"

const Tab = createBottomTabNavigator<VanillaBottomTabTypes>()

export function VanillaBottomTabNavigator() {
  const Dummy = () => <></>

  return (
    <Tab.Navigator
      initialRouteName={STACK.vanillaList}
      screenOptions={SCREEN_OPTIONS}
      tabBar={(props: BottomTabBarProps) => <BottomMenu {...props} />}>
      <Tab.Screen name={STACK.vanillaList} component={VanillaStack} />
      <Tab.Screen name={STACK.favorite} component={Dummy} />
    </Tab.Navigator>
  )
}
