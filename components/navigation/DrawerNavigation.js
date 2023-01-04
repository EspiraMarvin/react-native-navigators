import { createDrawerNavigator } from "@react-navigation/drawer"
import WelcomeScreen from "../../screens/WelcomeScreen"
import UserScreen from "../../screens/UserScreen"
import NotificationScreen from "../../screens/NotificationScreen"
import SettingScreen from "../../screens/SettingScreen"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: { backgroundColor: "#3c0a6b" },
        headerTintColor: "white",
        drawerActiveBackgroundColor: "#f0e1ff",
        drawerActiveTintColor: "#3c0a6b",
        // drawerStyle: { backgroundColor: "#ccc" },
      }}
    >
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          drawerLabel: "Welcome Screen",
          drawerLabelStyle: { fontSize: 18 },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={UserScreen}
        options={{
          drawerLabelStyle: { fontSize: 18 },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          drawerLabelStyle: { fontSize: 18 },
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
            name="bell"
            color={color}
            size={size}
          />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerLabelStyle: { fontSize: 18 },
          drawerIcon: ({ color, size }) => (
            <Ionicons
            name="settings-sharp"
            color={color}
            size={size}
          />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}
