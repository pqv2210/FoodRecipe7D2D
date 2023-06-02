/* eslint-disable no-undef */
module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./app"],
        alias: {
          "@components": "./app/components",
          "@i18n": "./app/i18n",
          "@navigators": "./app/navigators",
          "@screens": "./app/screens",
          "@theme": "./app/theme",
          "@utils": "./app/utils",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
}
