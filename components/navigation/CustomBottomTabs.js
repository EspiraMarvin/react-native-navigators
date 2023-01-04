import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"

import WelcomeScreen from "../../screens/WelcomeScreen"
import UserScreen from "../../screens/UserScreen"
import PostScreen from "../../screens/PostScreen"
import NotificationScreen from "../../screens/NotificationScreen"
import SettingScreen from "../../screens/SettingScreen"

const BottomTab = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress, style }) => {
  return (
    <Pressable
      style={{
        top: -20,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View style={{ width: 70, height: 70, borderRadius: "#e32f45" }}>
        {children}
      </View>
    </Pressable>
  )
}

function CustomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { height: 65 },
        headerStyle: { backgroundColor: "#3c0a6b" },
        headerTintColor: "white",
        tabBarActiveTintColor: "#3c0a6b",
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: [styles.tabBarLabel],
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
        name="Profile"
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
        name="Camera"
        component={PostScreen}
        options={{
          tabBarLabel: "Pic",
          tabBarLabelStyle: [styles.customTabBarLabel],
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/images/cam1.jpg")}
                resizeMode="contain"
                style={[
                  {
                    width: 65,
                    height: 65,
                    borderRadius: 32,
                    // tintColor: "white",
                  },
                  focused && [],
                ]}
              />
            )
          },
          tabBarIconStyle: { ...styles.shadow },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notifications",
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

export default CustomTabs

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
  tabBarLabel: {
    height: 20,
    marginTop: -5,
    marginBottom: 8,
    fontSize: 12,
  },
  customTabBarLabel: {
    marginTop: 20,
    marginBottom: -4,
    fontSize: 12,
  },
})
