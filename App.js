import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StatusBar, StyleSheet } from "react-native"

import CustomBottomTabs from "./components/navigation/CustomBottomTabs"
import CustomBottomTabsTwo from "./components/navigation/CustomBottomTabsTwo"

import BottomTabs from "./components/navigation/BottomTabs"
import DrawerNavigation from "./components/navigation/DrawerNavigation"
import NativeStackNavigation from "./components/navigation/NativeStackNavigation"

const BottomTab = createBottomTabNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#070406"/>
      <NavigationContainer>
      {/* example of drawerNavigation  navigation   */}
      {/* <DrawerNavigation /> */}
      
        {/* example of BottomTabs  navigation */}
        {/* <BottomTabs /> */}

        {/* example one of CustomBottomTabs  navigation */}
        {/* <CustomBottomTabs /> */}

        {/* example two of CustomBottomTabs  navigation */}
        <CustomBottomTabsTwo />

        {/* example of native stack navigation */}
        {/* <NativeStackNavigation /> */}
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  tabBarLabel: {
    height: 20,
    marginTop: -8,
    marginBottom: 5,
    fontSize: 12,
  },
})
