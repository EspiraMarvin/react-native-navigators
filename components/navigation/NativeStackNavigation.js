import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ImageBackground, StyleSheet } from "react-native"

import CategoriesScreen from "../../screens/nativestackscreens/CategoriesScreen"
import MealsOverViewScreen from "../../screens/nativestackscreens/MealsOverViewScreen"

const Stack = createNativeStackNavigator()

export default function NativeStackNavigation() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "black",
          headerTitleStyle: {
            color: "black",
            fontWeight: "bold",
          },
          headerBackground: () => (
            <ImageBackground
              style={[StyleSheet.absoluteFill, { opacity: 0.4 }]}
              source={require("../../assets/images/navbg.jpg")}
            />
          ),
        }}
      >
        <Stack.Screen
          name="categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverViewScreen}
        />
      </Stack.Navigator>
  )
}
