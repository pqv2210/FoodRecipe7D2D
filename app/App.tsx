import React, { Suspense } from "react"
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context"
import { AppNavigator } from "@navigators"

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Suspense fallback={<></>}>
        <AppNavigator />
      </Suspense>
    </SafeAreaProvider>
  )
}
