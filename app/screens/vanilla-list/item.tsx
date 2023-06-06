import React from "react"
import { memo } from "react"
import { Image, StyleSheet, View } from "react-native"
import { FoodProps, IconTypes, images, isEmptyString } from "@utils"
import { Button, Icon, Row, Text } from "@components"

export interface ItemProps {
  item: FoodProps
  onPress: () => void
}

export const Item = memo((props: ItemProps) => {
  const { item, onPress } = props

  const source: string = isEmptyString(item.image) ? "AnimalFat" : item.image

  const renderStat = (icon: IconTypes, value?: string) => (
    <Row style={styles.rowStat}>
      <Icon icon={icon} size={30} />
      <Text size={15} style={styles.value} text={value ?? "--"} />
    </Row>
  )

  return (
    <Button style={styles.container} onPress={onPress}>
      <View>
        <Image style={styles.background} source={images.background} />
        <Image style={styles.image} source={images[source]} />
      </View>
      <View style={styles.wrapInfo}>
        <Text size={16} font="bold" text={item.name} />
        <Row style={styles.wrapStat}>
          {renderStat("fullness", item?.effectOnFullness)}
          {renderStat("hydration", item?.effectOnHydration)}
          {renderStat("health", item?.effectOnHealth)}
          {renderStat("stamina", item?.effectOnMaxStamina)}
        </Row>
      </View>
    </Button>
  )
})

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexDirection: "row",
  },
  background: {
    height: 100,
    width: 100,
    resizeMode: "cover",
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "cover",
    position: "absolute",
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  wrapInfo: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  wrapStat: {
    flex: 1,
  },
  rowStat: {
    flex: 1,
    justifyContent: "center",
  },
  value: {
    marginLeft: 5,
  },
})
