import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Preferences() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preferences</Text>
      {/* Add your settings options here */}
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
