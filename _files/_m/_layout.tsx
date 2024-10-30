// import { StripeProvider } from '@stripe/stripe-react-native'
// import { Drawer } from 'expo-router/drawer'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'

// import { useState } from 'react'
// import { STRIPE_PUBLISHABLE_KEY } from '../config/Stripe'

//const Drawer = createDrawerNavigator()

export default function RootLayout() {
  // const [publishableKey, setPublishableKey] = useState('')

  // const fetchPublishableKey = async () => {
  //   const key = await fetchKey() // fetch key from your server here
  //   setPublishableKey(key)

  //   console.log('publishableKey - ' + publishableKey)
  // }

  // useEffect(() => {
  //   fetchPublishableKey()
  // }, [])

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <StripeProvider
    //     publishableKey={publishableKey}
    //     urlScheme="urlScheme"
    //     merchantIdentifier="merchant.identifier"
    //   >
    //     <Drawer
    //       options={{
    //         headerShown: false,
    //       }}
    //     >
    //       <Drawer.Screen
    //         name="(tabs)"
    //         options={{
    //           drawerLabel: 'Home',
    //           title: 'Home Page',
    //         }}
    //       />
    //       <Drawer.Screen
    //         name="(drawer)/settings"
    //         options={{
    //           drawerLabel: 'Settings',
    //           title: 'Settings',
    //         }}
    //       />
    //       <Drawer.Screen
    //         name="(drawer)/preferences"
    //         options={{
    //           drawerLabel: 'Preferences',
    //           title: 'Preferences',
    //           _drawerItemStyle: { height: 0 },
    //         }}
    //       />
    //     </Drawer>
    //   </StripeProvider>
    // </GestureHandlerRootView>

    <View>
      <Text>Testing app</Text>
    </View>
  )
}
