import React, { memo } from "react"
import RNModal from "react-native-modal"

export interface ModalProps {
  visible?: boolean
  position?: "center" | "bottom"
  children?: JSX.Element | JSX.Element[]
  direction?: "up" | "down"
  onClose?(): void
}

export const Modal = memo((props: ModalProps) => {
  const { visible, position, children, direction, onClose, ...rest } = props

  const getPosition = () => {
    if (!position || position === "center") {
      return "center"
    } else {
      return "flex-end"
    }
  }

  return (
    <RNModal
      {...rest}
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      swipeDirection={direction}
      style={{ justifyContent: getPosition() }}
      isVisible={visible}
      backdropOpacity={0.5}>
      {children}
    </RNModal>
  )
})
