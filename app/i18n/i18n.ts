import { I18n, TranslateOptions } from "i18n-js"
import en from "./translations/en.json"
import vi from "./translations/vi.json"

const i18n = new I18n()

i18n.enableFallback = true
i18n.defaultLocale = "en"
i18n.translations = {
  en,
  vi,
}

type DefaultLocale = typeof en
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>

type RecursiveKeyOf<TObj extends Record<string, unknown>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, unknown>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`
}[keyof TObj & string]

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export function translate(key: TxKeyPath, options?: TranslateOptions) {
  return key ? i18n.t(key, options) : `missing ${key}`
}

export type TxOptions = TranslateOptions
