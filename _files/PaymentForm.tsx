import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

import { Stripe } from '@stripe/stripe-react-native'
import { STRIPE_PUBLISHABLE_KEY } from '../config/Stripe'

//const stripe = new Stripe(STRIPE_PUBLISHABLE_KEY)

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvc, setCvc] = useState('')

  //console.log('STRIPE_PUBLISHABLE_KEY - ' + STRIPE_PUBLISHABLE_KEY)

  const handlePayment = async () => {
    const paymentIntent = await new Stripe(
      STRIPE_PUBLISHABLE_KEY
    ).createPaymentIntent({
      amount: 1000, // Replace with your desired amount
      currency: 'usd',
    })

    // Confirm the payment
    const confirmation = await new Stripe(
      STRIPE_PUBLISHABLE_KEY
    ).confirmPaymentIntent(paymentIntent.client_secret, {
      payment_method: {
        card: {
          number: cardNumber,
          exp_month: expMonth,
          exp_year: expYear,
          cvc: cvc,
        },
      },
    })

    // Handle the payment result
    if (confirmation.paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!')
    } else {
      console.log('Payment failed!')
    }
  }

  return (
    <View>
      <Text>Card Number:</Text>
      <TextInput
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
        placeholder="Card Number"
        keyboardType="number-pad"
      />
      <Text>Expiration Month:</Text>
      <TextInput
        value={expMonth}
        onChangeText={(text) => setExpMonth(text)}
        placeholder="Expiration Month"
        keyboardType="number-pad"
      />
      <Text>Expiration Year:</Text>
      <TextInput
        value={expYear}
        onChangeText={(text) => setExpYear(text)}
        placeholder="Expiration Year"
        keyboardType="number-pad"
      />
      <Text>CVC:</Text>
      <TextInput
        value={cvc}
        onChangeText={(text) => setCvc(text)}
        placeholder="CVC"
        keyboardType="number-pad"
      />
      <Button title="Pay" onPress={handlePayment} />
    </View>
  )
}

export default PaymentForm
