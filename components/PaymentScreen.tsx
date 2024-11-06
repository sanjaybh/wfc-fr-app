import React, { useEffect, useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useRouter } from 'expo-router'

import StripeBtn from './payments/Stripe/StripeBtn'
import PaypalBtn from './payments/PayPal/PaypalBtn'

const PaymentScreen = () => {
  const [number, onChangeNumber] = useState('111.00')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 12,
          marginBottom: 2,
        }}
      >
        Enter Amount ($)
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
      <Text style={{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 9,
        marginBottom: 2,
      }}>Make sure your server is up ?</Text>

      {/* Use Stripe payment button */}
      <StripeBtn amount={number} router={router} />

      {/* Use PayPal payment button */}
      <PaypalBtn amount={number} router={router} />
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
