import { MMKV } from "react-native-mmkv"

export const storage = new MMKV()

export const getFromStorage = (key: string) => storage.getString(key)

export const saveToStorage = (key: string, value: string) =>
  storage.set(key, value)
