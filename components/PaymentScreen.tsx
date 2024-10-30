import { initStripe, useStripe } from '@stripe/stripe-react-native'
import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'

import { useRouter } from 'expo-router'

import { STRIPE_CONFIG } from '../config/Stripe'
import { createPaymentIntent } from '../service/paymentService'

const PaymentScreen = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [loading, setLoading] = useState(false)
  const [number, onChangeNumber] = React.useState('')

  const router = useRouter()

  useEffect(() => {
    initializeStripe()
  }, [])

  const initializeStripe = async () => {
    await initStripe({
      publishableKey: STRIPE_CONFIG.publishableKey,
      merchantIdentifier: STRIPE_CONFIG.merchantId,
      urlScheme: STRIPE_CONFIG.urlScheme,
    })
  }
  const handlePayment_old = async () => {}
  const handlePayment = async () => {
    if (number.trim() == '') {
      Alert.alert('Alert', 'This field is required.')
      return
    }

    const amount = number
    try {
      setLoading(true)
      const { clientSecret, message, success } = await createPaymentIntent(
        amount
      )
      // Initialize payment sheet
      const { error: initError } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'WFC fundraiser, INC',
        style: 'automatic',
        googlePay: true,
        applePay: true,
      })
      //console.log('Intent created successfully ', clientSecret)
      if (initError) {
        Alert.alert('Error', initError.message)
        return
      }

      // Present payment sheet
      const { error: paymentError } = await presentPaymentSheet()
      if (paymentError) {
        Alert.alert('Error', paymentError.message)
      } else {
        Alert.alert('Success', 'Payment completed successfully')
        //window.location.href = '../assets/success.html'
      }
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setLoading(false)
      router.push('/(tabs)/dashboard')
    }
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 15,
          marginBottom: 2,
        }}
      >
        Enter Amount
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter amount"
        keyboardType="numeric"
        mode="outlined"
        label="Amount"
      />
      <View style={styles.button}>
        <Button
          title={loading ? 'Processing...' : 'Pay'}
          onPress={() => handlePayment()}
          disabled={loading}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    margin: 0,
    borderWidth: 1,
    padding: 5,
  },
  textfield: {
    width: '100%',
    height: 50,
    // marginVertical: 0,
    // marginHorizontal: 0,
    // marginBottom: 30,
  },
  button: {
    marginTop: 20,
  },
})

export default PaymentScreen
