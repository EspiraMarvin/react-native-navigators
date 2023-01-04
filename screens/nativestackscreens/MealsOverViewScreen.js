import { useLayoutEffect } from "react"
import { View, FlatList, StyleSheet } from "react-native"

import MealItem from "../../components/stack/MenuItem"
import { MEALS, CATEGORIES } from "../../data/dummy-data"

export default function MealsOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title

    // sets config options for MealsOverViewScreen navbar
    navigation.setOptions({
      title: categoryTitle,
      animation: "slide_from_right",
    })
  }, [catId, navigation])

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  )

  function renderMealItem(itemData) {
    const item = itemData.item
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
    }
    return <MealItem {...mealItemProps} />
  }

  return (
      <View style={styles.container}>
        <FlatList
          data={displayedMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})