import { useRouter } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function SignIn() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button
        title="Login"
        onPress={() => router.replace('/(tabs)/dashboard')}
      />
      <Button title="Sign Up" onPress={() => router.push('/sign-up')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
})
