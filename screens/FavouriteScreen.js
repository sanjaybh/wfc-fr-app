import { StyleSheet, View, Text } from "react-native";
import MealsItem from "@/components/MealsList/MealsList";
import { MEALS } from "@/data/dummy-data";

//Context
//import { useContext } from "react";
//import { FavoritesContext } from "@/store/context/favorites-context";

//Redux
import { useSelector } from "react-redux";

const FavouriteScreen = () => {
  //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    //favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.(redux)</Text>
      </View>
    );
  }

  return <MealsItem fromPage="FavouriteScreen" items={favoriteMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
