import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { VanillaList } from "@screens"
import { SCREEN, SCREEN_OPTIONS } from "@utils"
import { VanillaStackTypes } from "@navigators"

const Stack = createStackNavigator<VanillaStackTypes>()

export function VanillaStack() {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen name={SCREEN.vanillaList} component={VanillaList} />
    </Stack.Navigator>
  )
}
