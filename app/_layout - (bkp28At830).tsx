import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'

// === [Navigation Container and Stack navigation] === \\
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


//import AddGoal from './AddGoal'
//import PetShopHome from '@/components/PetShopHome'
//import Baker from '@/components/Baker'
//import LandingPage from './LandingPage'
import CategoriesScreen from '../screens/CategoriesScreen'
import MealsOverviewScreen from '../screens/MealsOverviewScreen'
import MealsDetailScreen from '../screens/MealsDetailScreen'

export default function RootLayout() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName='MealsCategories'
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: 'All Categories'
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealsDetailScreen"
            component={MealsDetailScreen}
            options_old={{
              // This is one way to adding title and button to the header of the screen,
              // but you cant pass anything related to that screen from here
              _title: 'Meal Screen Details',
              headerRight: () => {
                return <Button title="..." onPress={() => {
                  Alert.alert("Alert!", "Button pressed")
                }} />
              }
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    paddingTop: 25,
    paddingLeft: 5,
    marginTop: 0,

    _justifyContent: 'flex-start',
    _alignItems: 'flex-start',
    _flex: 1,
    _backgroundColor: 'blue'
  },
  textHello: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
