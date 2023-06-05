import { AssetType } from "@utils"

export const icons: AssetType = {
  fullness: require("./Fullness.png"),
  hydration: require("./Hydration.png"),
  health: require("./Health.png"),
  stamina: require("./Stamina.png"),
}

export type IconTypes = keyof typeof icons
