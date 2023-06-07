import { memo } from "react"
import { Button, Icon, Row, Text } from "@components"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet } from "react-native"
import { colors } from "@theme"
import { TxKeyPath } from "@i18n"
import { RootNavigationType } from "@navigators"

interface HeaderProps {
  isRoot?: boolean
  txHeader: TxKeyPath
}

export const Header = memo((props: HeaderProps) => {
  const { isRoot = false, txHeader } = props

  const navigation = useNavigation<RootNavigationType>()

  const renderLeftBtn = () => {
    if (isRoot) {
      return (
        <Button style={styles.btnBack} onPress={navigation.openDrawer}>
          <Icon icon="menubar" size={20} />
        </Button>
      )
    }

    return (
      <Button style={styles.btnBack} onPress={navigation.goBack}>
        <Icon icon="back" size={20} />
      </Button>
    )
  }

  return (
    <Row style={styles.container}>
      {renderLeftBtn()}
      <Text font="bold" size={17} tx={txHeader} />
    </Row>
  )
})

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    backgroundColor: colors.white,
  },
  btnBack: {
    padding: 10,
    marginRight: 10,
  },
})
