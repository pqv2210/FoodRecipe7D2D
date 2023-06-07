import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { navigationRef, useBackButtonHandler } from "./navigator-utilities"
import { DrawerNavigator } from "@navigators"

const exitRoutes = ["home"]

type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>

export function AppNavigator(props: NavigationProps) {
  useBackButtonHandler(routeName => exitRoutes.includes(routeName))

  return (
    <NavigationContainer ref={navigationRef} {...props}>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
