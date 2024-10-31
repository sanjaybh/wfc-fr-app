//import { router } from "expo-router";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ScrollView,
  Image,
  Button,
} from "react-native";

import { MEALS } from "@/data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import IconButton from "@/components/IconButton";
import { useDispatch, useSelector } from "react-redux";

//Redux specific
import { addFavorite, removeFavorite } from "../store/redux/favorites";

//Context specific
//import { FavoritesContext } from "@/store/context/favorites-context";

function MealsDetailScreen({ route, navigation }) {
  //context specific
  //const favoriteMealsCtx = useContext(FavoritesContext);

  //redux specific
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params?.mealId;
  const mealTitle = route.params?.mealTitle;

  //console.log("route - " - route);
  //const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    //console.log("mealId ==>" + mealId);

    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite_old(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite_old(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  //alternative way just to showcase how it can be achieved
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      {/* <Text style={styles.title}>{selectedMeal.title}</Text> */}

      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal.duration} m</Text>
        <Text style={styles.detailItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          {selectedMeal.ingredients.map((ingredients) => (
            <View key={ingredients} style={styles.listItem}>
              <Text style={styles.itemText}>{ingredients}</Text>
            </View>
          ))}

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>

          {selectedMeal.steps.map((step) => (
            <View key={step} style={styles.listItem}>
              <Text style={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
