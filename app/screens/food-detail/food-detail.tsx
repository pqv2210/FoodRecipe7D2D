import React from "react"
import { Image, ScrollView, StyleSheet, View } from "react-native"
import { Header, Row, Screen, Text } from "@components"
import { RouteProp, useRoute } from "@react-navigation/native"
import { FoodProps, images } from "@utils"
import { colors, commonStyle } from "@theme"
import { TxKeyPath } from "@i18n"

interface FoodDetailRouteProps {
  data: FoodProps
}

export function FoodDetail() {
  const route =
    useRoute<RouteProp<Record<string, FoodDetailRouteProps>, string>>()
  const { data } = route.params

  const renderField = (tx: TxKeyPath, value?: string) => (
    <Row style={styles.row}>
      <Text style={commonStyle.flex} tx={tx} />
      <Text style={commonStyle.flex} text={value} />
    </Row>
  )

  const renderEffect = () => (
    <View style={styles.content}>
      <Text size={17} font="bold" tx="effect.title" />
      {renderField("effect.fullness", data?.effects?.fullness)}
      {renderField("effect.hydration", data?.effects?.hydration)}
      {renderField("effect.maxStamina", data?.effects?.maxStamina)}
      {renderField("effect.health", data?.effects?.health)}
      {renderField("effect.dysenteryChange", data?.effects?.dysenteryChange)}
    </View>
  )

  const renderBuff = () => (
    <View style={styles.content}>
      <Text size={17} font="bold" tx="buff.title" />
      {renderField("buff.type", data?.buff?.type ?? "--")}
      {renderField("buff.effect", data?.buff?.effect ?? "--")}
      {renderField("buff.duration", data?.buff?.duration ?? "--")}
    </View>
  )

  return (
    <Screen>
      <Header textHeader={data.name} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <View>
          <Image style={styles.background} source={images.background} />
          <Image style={styles.image} source={images[data.image]} />
        </View>
        {renderEffect()}
        {data?.buff && renderBuff()}
        <View style={styles.content}>
          <Text size={17} font="bold" tx="price.title" />
          {renderField("price.buy", data.price.buy ?? "--")}
          {renderField("price.sell", data.price.sell ?? "--")}
        </View>
        <View style={styles.content}>
          <Text size={17} font="bold" tx="description" />
          <Text style={styles.mt10} text={data.description} />
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  mt10: { marginTop: 12 },
  container: {
    paddingHorizontal: 12,
  },
  background: {
    height: 120,
    width: 120,
    resizeMode: "cover",
  },
  image: {
    height: 110,
    width: 110,
    resizeMode: "cover",
    position: "absolute",
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  content: {
    marginTop: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  row: {
    marginTop: 10,
    width: "100%",
  },
})
