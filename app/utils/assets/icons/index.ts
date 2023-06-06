import { AssetType } from "@utils"

export const icons: AssetType = {
  fullness: require("./Fullness.png"),
  hydration: require("./Hydration.png"),
  health: require("./Health.png"),
  stamina: require("./Stamina.png"),
  back: require("./Back.png"),
  menubar: require("./MenuBar.png"),
  favorite: require("./Favorite.png"),
  favoriteFilled: require("./FavoriteFilled.png"),
}

export type IconTypes = keyof typeof icons
