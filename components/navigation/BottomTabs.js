import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import WelcomeScreen from "../../screens/WelcomeScreen"
import UserScreen from "../../screens/UserScreen"
import NotificationScreen from "../../screens/NotificationScreen"
import SettingScreen from "../../screens/SettingScreen"

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const BottomTab = createBottomTabNavigator()

function Tabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#3c0a6b" },
        headerTintColor: "white",
        tabBarActiveTintColor: "#3c0a6b",
        tabBarStyle: { height: 58 },
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: [styles.tabBarLabel],
        tabBarActiveBackgroundColor: "#fcf0f0",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              color={color}
              size={size}
              style={{ marginTop: -5 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person"
              color={color}
              size={size}
              style={{ marginTop: -5 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bell"
              color={color}
              size={size}
              style={{ marginTop: -5 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="settings-sharp"
              color={color}
              size={size}
              style={{ marginTop: -5 }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
  tabBarLabel: {
    height: 20,
    marginTop: -8,
    marginBottom: 5,
    fontSize: 12,
  },
})
