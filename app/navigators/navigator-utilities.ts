/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useRef } from "react"
import { BackHandler, Platform } from "react-native"
import {
  PartialState,
  NavigationState,
  NavigationAction,
  createNavigationContainerRef,
} from "@react-navigation/native"

export const RootNavigation = {
  navigate(_name: string, _params?: any) {},
  goBack() {},
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
  getRootState(): NavigationState {
    return {} as any
  },
  dispatch(_action: NavigationAction) {},
}

export const navigationRef = createNavigationContainerRef()

export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>,
) {
  const route = state.routes[state.index ?? 0]

  if (!route.state) {
    return route.name
  }

  return getActiveRouteName(route.state)
}

export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
  if (Platform.OS === "ios") {
    return
  }

  const canExitRef = useRef(canExit)

  useEffect(() => {
    canExitRef.current = canExit
  }, [canExit])

  useEffect(() => {
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false
      }

      const routeName = getActiveRouteName(navigationRef.getRootState())

      if (canExitRef.current(routeName)) {
        BackHandler.exitApp()
        return true
      }

      if (navigationRef.canGoBack()) {
        navigationRef.goBack()
        return true
      }

      return false
    }

    BackHandler.addEventListener("hardwareBackPress", onBackPress)

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", onBackPress)
  }, [])
}
