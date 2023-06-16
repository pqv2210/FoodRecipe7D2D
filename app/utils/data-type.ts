import { ImageSourcePropType } from "react-native"

export interface AssetType {
  [name: string]: ImageSourcePropType
}

export interface EffectProps {
  fullness: string
  hydration: string
  maxStamina?: string
  health: string
  dysenteryChange: string
}

export interface PriceProps {
  sell: string
  buy: string
}

export interface BuffProps {
  type?: string
  effect?: string
  duration?: string
}

export interface FoodProps {
  id: string
  name: string
  image: string
  type: string
  effects: EffectProps
  price: PriceProps
  maxStack: string
  description: string
  buff?: BuffProps
  isFavorite: boolean
}
