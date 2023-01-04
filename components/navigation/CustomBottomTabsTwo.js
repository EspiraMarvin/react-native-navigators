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
  // console.log('props a cut', props);

  return (
    <TouchableOpacity
      style={[
        { justifyContent: "center", alignItems: "center" },
        onPress && { top: 0 },
        !onPress && { top: -20 },
      ]}
      onPress={onPress}
    >
      <View
        style={{
          flex: 1,
          width: 70,
          marginHorizontal: 6,
          height: 70,
          borderRadius: "#e32f45",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  )
}

function CustomTabsTwo() {
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
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/images/home.jpg")}
                resizeMode="contain"
                style={[
                  focused
                    ? {
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        // tintColor: "white",
                        marginBottom: 35,
                      }
                    : {
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                      },
                ]}
              />
            )
          },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/images/user.jpg")}
                resizeMode="contain"
                style={[
                  focused
                    ? {
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        // tintColor: "white",
                        marginBottom: 35,
                      }
                    : {
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                      },
                ]}
              />
            )
          },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="Camera"
        component={PostScreen}
        options={{
          tabBarLabel: "Camera",
          // tabBarLabelStyle: [styles.customTabBarLabel],
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/images/cam1.jpg")}
                resizeMode="contain"
                style={[
                  focused
                    ? {
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        // tintColor: "white",
                        marginBottom: 35,
                      }
                    : {
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                      },
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
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/images/notif.jpg")}
                resizeMode="contain"
                style={[
                  focused
                    ? {
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        // tintColor: "white",
                        marginBottom: 35,
                      }
                    : {
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                      },
                ]}
              />
            )
          },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={require("../../assets/images/settings.jpg")}
                resizeMode="contain"
                style={[
                  focused
                    ? {
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        // tintColor: "white",
                        marginBottom: 35,
                      }
                    : {
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                      },
                ]}
              />
            )
          },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

export default CustomTabsTwo

const styles = StyleSheet.create({
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
  // not working as intended
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
})
