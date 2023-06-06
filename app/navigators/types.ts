import { DrawerNavigationProp } from "@react-navigation/drawer"
import { BOTTOM, SCREEN, STACK } from "@utils"

export type VanillaStackTypes = {
  [SCREEN.vanillaList]: undefined
  [SCREEN.favorite]: undefined
}

export type VanillaBottomTabTypes = {
  [STACK.vanillaList]: undefined
  [STACK.favorite]: undefined
}

export type DrawerTypes = {
  [BOTTOM.vanilla]: undefined
}

export type RootNavigationType = DrawerNavigationProp<DrawerTypes>
