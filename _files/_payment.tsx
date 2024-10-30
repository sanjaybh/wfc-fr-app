import { useStripe } from '@stripe/stripe-react-native'
import React, { useState } from 'react'
import { Alert, Button, View } from 'react-native'

export default function PaymentScreen() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe()
  const [loading, setLoading] = useState(true)

  const YOUR_API = 'http://localhost:4002'
  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${YOUR_API}/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const { paymentIntent, ephemeralKey, customer } = await response.json()

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    }
  }

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams()

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
    })
    if (!error) {
      setLoading(true)
    }
  }

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet()

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message)
    } else {
      Alert.alert('Success', 'Your payment is confirmed!')
    }
  }

  React.useEffect(() => {
    initializePaymentSheet()
  }, [])

  return (
    <View>
      <Button disabled={!loading} title="Checkout" onPress={openPaymentSheet} />
    </View>
  )
}
