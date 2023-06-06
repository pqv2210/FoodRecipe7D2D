import { ImageSourcePropType } from "react-native"

export interface AssetType {
  [name: string]: ImageSourcePropType
}

export interface FoodProps {
  id: string
  name: string
  image: string
  type: string
  effectOnFullness: string
  effectOnHydration: string
  effectOnMaxStamina?: string
  effectOnHealth: string
  dysenteryChange: string
  price: {
    sell: string
    buy: string
  }
  maxStack: string
  description: string
  buff?: {
    type?: string
    effect?: string
  }
  isFavorite: boolean
}
