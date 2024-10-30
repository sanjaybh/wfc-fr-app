import React from 'react'
//import { Text, View } from 'react-native'

import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const LandingPage = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        options={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Home Page',
          }}
        />
        <Drawer.Screen
          name="(drawer)/checkout"
          options={{
            drawerLabel: 'Checkout',
            title: 'Checkout',
          }}
        />
        <Drawer.Screen
          name="(drawer)/preferences"
          options={{
            drawerLabel: 'Preferences',
            title: 'Preferences',
            _drawerItemStyle: { height: 0 },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default LandingPage
