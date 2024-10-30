import { FlatList, View, StyleSheet } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "@/components/category/MealItem";
import { useLayoutEffect } from "react";

//Alternative we can also use useRoute hook
//import { useRoute } from "@react-navigation/native";

function MealsOverviewScreen({ route, navigation }) {
  //Get Route using useRoute hook if not possible to pass as param
  //const routePass = useRoute();
  //const catsIDD = routePass.params.categoryId;

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //finding category based on the catid
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (Category) => Category.id == catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
