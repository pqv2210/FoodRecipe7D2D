import { Alert, Dimensions, Linking, Platform } from "react-native"
import DeviceInfo from "react-native-device-info"

export const PRODUCER_NAME = "https://thefunpimps.com"
export const OFFICIAL_WEBSITE = "https://7daystodie.com"
export const FANDOM_WEBSITE =
  "https://7daystodie.fandom.com/wiki/7_Days_to_Die_Wiki"

export const { width, height } = Dimensions.get("window")

export const DRAWER_WIDTH = width / 1.5

export const SCREEN_OPTIONS = {
  headerShown: false,
}

export const DRAWER_SCREEN_OPTIONS = {
  ...SCREEN_OPTIONS,
  width: DRAWER_WIDTH,
}

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

export const onOpenLink = (link: string) => () => {
  Linking.canOpenURL(link)
    .then(() => {
      Linking.openURL(link)
    })
    .catch(() => {
      Alert.alert("Error", "Error link.")
    })
}
