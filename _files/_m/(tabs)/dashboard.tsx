import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const DashboardSection = ({ title, amount, imageSource }) => (
  <View style={styles.section}>
    <Image source={imageSource} style={styles.sectionImage} />
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionAmount}>${amount}</Text>
  </View>
)

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DashboardSection
        title="Total Balance"
        amount="5,000"
        imageSource={require('../../assets/balance.png')}
      />
      <DashboardSection
        title="Income"
        amount="3,500"
        imageSource={require('../../assets/income.png')}
      />
      <DashboardSection
        title="Expenses"
        amount="1,500"
        imageSource={require('../../assets/expenses.png')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066cc',
  },
})
