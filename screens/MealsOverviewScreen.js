import MealsItem from "@/components/MealsList/MealsList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

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

  return <MealsItem fromPage="MealsOverviewScreen" items={displayedMeals} />;
}

export default MealsOverviewScreen;
