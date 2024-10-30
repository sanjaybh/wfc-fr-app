import { CardField, useConfirmPayment } from '@stripe/stripe-react-native'
import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { createPaymentIntent } from '../service/paymentService'

const PaymentScreen = () => {
  const [loading, setLoading] = useState(false)
  const { confirmPayment } = useConfirmPayment()

  const initPaymentIntent = async () => {
    try {
      //setLoading(true)

      // Get clientSecret from your backend
      const clientSecret = await createPaymentIntent(100) // $100 in this example
      console.log('clientSecret = ' + clientSecret) //clientSecret, paymentIntentId
      // Confirm payment
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
      })

      if (error) {
        Alert.alert('Error', error.message)
        return
      }

      if (paymentIntent) {
        Alert.alert('Success', 'Payment successful!')
        // Handle successful payment here

        console.log('paymentIntent = ' + paymentIntent)
      }
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setLoading(false)
    }
  }
  const handlePayment = async () => {
    // This is a 4 step process
    // 1. Create a payment intent
    initPaymentIntent()
    // 2. Initialize the Payment sheet
    // 3. Present the Payment Sheet from Stripe
    // 4. If payment ok -> create the order
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Card Details</Text>

      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={styles.card}
        style={styles.cardField}
      />

      <Button
        title={loading ? 'Processing...' : 'Pay Now'}
        onPress={handlePayment}
        disabled={loading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#efefefef',
  },
  cardField: {
    width: '100%',
    height: 50,
    marginVertical: 30,
  },
})

export default PaymentScreen
