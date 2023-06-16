import { DrawerNavigationProp } from "@react-navigation/drawer"
import { NavigationProp } from "@react-navigation/native"
import { BOTTOM, FoodProps, SCREEN, STACK } from "@utils"

export type VanillaStackTypes = {
  [SCREEN.vanillaList]: undefined
  [SCREEN.foodDetail]: { data: FoodProps }
}

export type VanillaStackType = NavigationProp<VanillaStackTypes>

export type VanillaBottomTabTypes = {
  [STACK.vanillaList]: undefined
  [STACK.favorite]: undefined
}

export type DrawerTypes = {
  [BOTTOM.vanilla]: undefined
  [SCREEN.appInfo]: undefined
}

export type RootNavigationType = DrawerNavigationProp<DrawerTypes>
