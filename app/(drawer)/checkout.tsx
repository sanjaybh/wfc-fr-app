import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import PaymentScreen from '../../components/PaymentScreen'

export default function Checkout() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <PaymentScreen />
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
