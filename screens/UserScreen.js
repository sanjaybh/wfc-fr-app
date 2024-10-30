import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const UserScreen = ({ navigation }) => {
  function onDrawerHandler() {
    navigation.toggleDrawer();
  }

  return (
    <View style={styles.rootContainer}>
      <Text>UserScreen</Text>
      <Button title="Open Drawer" onPress={onDrawerHandler} />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
