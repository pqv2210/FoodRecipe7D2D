import React from "react"
import { Header, ItemFood, Screen } from "@components"
import { FlashList, ListRenderItem } from "@shopify/flash-list"
import EnFoodTier3 from "../../i18n/data/en/7D2D-Food/Tier-3.json"
import { FoodProps, SCREEN } from "@utils"
import { useNavigation } from "@react-navigation/native"
import { VanillaStackType } from "@navigators"

export function VanillaList() {
  const navigation = useNavigation<VanillaStackType>()

  const onGoToFoodDetail = (data: FoodProps) => () =>
    navigation.navigate(SCREEN.foodDetail, { data })

  const getKeyExtractor = (item: FoodProps) => item.id

  const renderItem: ListRenderItem<FoodProps> = ({ item }) => (
    <ItemFood item={item} onPress={onGoToFoodDetail(item)} />
  )

  return (
    <Screen>
      <Header isRoot txHeader="all" />
      <FlashList
        keyExtractor={getKeyExtractor}
        data={EnFoodTier3}
        renderItem={renderItem}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
}
