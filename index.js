import "react-native-gesture-handler"
import { AppRegistry } from "react-native"
import App from "./app/App"
import { name as appName } from "./app.json"
import { enableFreeze } from "react-native-screens"

enableFreeze(true)

AppRegistry.registerComponent(appName, () => App)
