import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"


export default function MealItem({
  id,
  title,
  imageUrl,
}) {
  const navigation = useNavigation()

  function onPressHandler(id) {
    // navigation.navigate("MealDetail", {
    //   mealId: id,
    // })
  }

  return (
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() => onPressHandler(id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.mealImage} source={{ uri: imageUrl }} />
            <Text style={styles.mealTitle}>{title}</Text>
          </View>

        </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  mealImage: {
    height: 200,
    width: "100%",
  },

  buttonPressed: {
    opacity: 0.6,
  },
})