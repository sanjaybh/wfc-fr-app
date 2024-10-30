import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const transactionData = [
  {
    id: '1',
    name: 'Grocery Store',
    amount: -50.25,
    date: '2023-06-01',
    image: require('../../assets/grocery.png'),
  },
  {
    id: '2',
    name: 'Salary Deposit',
    amount: 2000,
    date: '2023-06-02',
    image: require('../../assets/salary.png'),
  },
  {
    id: '3',
    name: 'Restaurant',
    amount: -35.5,
    date: '2023-06-03',
    image: require('../../assets/restaurant.png'),
  },
  // Add more dummy data here
]

const TransactionItem = ({ item }) => (
  <View style={styles.transactionItem}>
    <Image source={item.image} style={styles.transactionImage} />
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionName}>{item.name}</Text>
      <Text style={styles.transactionDate}>{item.date}</Text>
    </View>
    <Text
      style={[
        styles.transactionAmount,
        { color: item.amount >= 0 ? 'green' : 'red' },
      ]}
    >
      ${Math.abs(item.amount).toFixed(2)}
    </Text>
    <TouchableOpacity style={styles.viewDetailsButton}>
      <Text style={styles.viewDetailsText}>View Details</Text>
    </TouchableOpacity>
  </View>
)

export default function Transactions() {
  return (
    <FlatList
      data={transactionData}
      renderItem={({ item }) => <TransactionItem item={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  transactionImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 12,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  viewDetailsButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  viewDetailsText: {
    color: '#fff',
    fontSize: 12,
  },
})
