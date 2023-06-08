import React from "react"
import { Header, Screen, Text } from "@components"
import { version } from "../../../package.json"
import { StyleSheet, View } from "react-native"
import { translate } from "@i18n"
import {
  PRODUCER_NAME,
  OFFICIAL_WEBSITE,
  FANDOM_WEBSITE,
  onOpenLink,
} from "@utils"

export function AppInfo() {
  return (
    <Screen>
      <Header isRoot txHeader="appInfo.header" />
      <View style={styles.container}>
        <Text tx="appInfo.intro" />
        <Text>
          {translate("appInfo.note1")}
          <Text
            preset="link"
            text={PRODUCER_NAME}
            onPress={onOpenLink(PRODUCER_NAME)}
          />
          )
        </Text>
        <Text tx="appInfo.note2" />
        <Text>
          {translate("appInfo.note3")}
          <Text
            preset="link"
            text={OFFICIAL_WEBSITE}
            onPress={onOpenLink(OFFICIAL_WEBSITE)}
          />
          {translate("appInfo.or")}
          <Text
            preset="link"
            text={FANDOM_WEBSITE}
            onPress={onOpenLink(FANDOM_WEBSITE)}
          />
        </Text>
        <Text tx="appVersion" txOptions={{ version }} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})
