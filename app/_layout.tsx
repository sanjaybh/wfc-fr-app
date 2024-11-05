//payment_layout

//Both Stripe and PayPal is integrated

import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar'

// === [Navigation Container and Stack navigation] === \\
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


import LandingPage from './LandingPage'

export default function RootLayout() {
  return (
    <>
      <StatusBar style='light' />
      <LandingPage />
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
