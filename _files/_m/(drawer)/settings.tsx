import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//import PaymentScreen from '../../components/PaymentScreen'

//import { StripeProvider } from '@stripe/stripe-react-native'
//import { STRIPE_PUBLISHABLE_KEY } from '../../config/Stripe'

import React from 'react'
//import { Linking } from 'react-native';
//import { useStripe } from '@stripe/stripe-react-native';
import PaymentForm from '@/components/PaymentForm'

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <PaymentForm />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})
