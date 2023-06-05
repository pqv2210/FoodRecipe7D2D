import { AssetType } from "@utils"

export const images: AssetType = {
  background: require("./background.png"),
  AnimalFat: require("./AnimalFat.webp"),
  Blueberries: require("./Blueberries.webp"),
  Corn: require("./Corn.webp"),
  CornMeal: require("./CornMeal.webp"),
  EarOfSuperCorn: require("./EarOfSuperCorn.webp"),
  FoodEgg: require("./FoodEgg.webp"),
  FoodHoney: require("./FoodHoney.webp"),
  Mushrooms: require("./Mushrooms.webp"),
  Potato: require("./Potato.webp"),
  Pumpkin: require("./Pumpkin.webp"),
  FoodRawMeat: require("./FoodRawMeat.webp"),
  FoodRottingFlesh: require("./FoodRottingFlesh.webp"),
  FoodYuccaFruit: require("./FoodYuccaFruit.webp"),
}

export type ImagesTypes = keyof typeof images
