import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons';


// === [Drawer Navigation] === \\
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

//Import components
import WelcomeScreen from '../screens/WelcomeScreen';
import UserScreen from '../screens/UserScreen'


export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName='User'
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b',
          _drawerStyle: { backgroundColor: '#ccc' }
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: 'User Screen',
            drawerIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer >
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
