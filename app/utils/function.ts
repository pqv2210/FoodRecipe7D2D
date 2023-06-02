import { Platform } from "react-native"
import DeviceInfo from "react-native-device-info"

/**
 * @function check string
 * @param string
 * @returns boolean
 */
export const isEmptyString = (input: string): boolean => {
  return !input || !input.trim()
}

export const isNil = (input: unknown): input is null | undefined =>
  input == null

/**
 * @function
 * @return true / false
 * @method check if the device is an iPhone
 */
export const isIos = Platform.OS === "ios"

/**
 * @function
 * @return true / false
 * @method check if iPhone X to iPhone 13
 */
export const isIPhoneX = () => {
  const isTrue = false
  if (!isIos) {
    return isTrue
  }
  const name = DeviceInfo.getModel()
  const list = ["iPhone 5", "iPhone 6", "iPhone 7", "iPhone 8", "iPhone SE"]
  if (!list.some(item => name?.includes(item))) {
    return true
  }
  return isTrue
}
