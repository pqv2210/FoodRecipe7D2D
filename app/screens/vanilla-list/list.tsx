import React from "react"
import { Header, ItemFood, Screen } from "@components"
import { FlashList, ListRenderItem } from "@shopify/flash-list"
import EnFoodIngredients from "../../i18n/data/en/7D2D-Food-Ingredients.json"
import { FoodProps } from "@utils"

export function VanillaList() {
  const getKeyExtractor = (item: FoodProps) => item.id

  const renderItem: ListRenderItem<FoodProps> = ({ item }) => (
    <ItemFood
      item={item}
      onPress={() => {
        //
      }}
    />
  )

  return (
    <Screen>
      <Header isRoot txHeader="all" />
      <FlashList
        keyExtractor={getKeyExtractor}
        data={EnFoodIngredients}
        renderItem={renderItem}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
}
