import React, { memo } from "react"
import { View } from "react-native"
import { Modal, Text } from "@components"

export interface DialogProps {
  visible?: boolean
  onClose?(): void
}

export const Dialog = memo(function Dialog(props: DialogProps) {
  const { visible, onClose } = props

  return (
    <Modal>
      <View>
        <Text text="text" />
      </View>
    </Modal>
  )
})
