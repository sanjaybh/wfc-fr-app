import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const dummyData = {
  name: 'John Doe',
  balance: 12739.86,
  assets: [
    { name: 'Bitcoin', symbol: 'BTC', value: 20479.89, change: 0.070 },
    { name: 'Ethereum', symbol: 'ETH', value: 2345.78, change: 0.050 },
    { name: 'Cardano', symbol: 'ADA', value: 234.786, change: -0.075 },
    { name: 'Binance', symbol: 'BNB', value: 56479.89, change: 0.087 },
    { name: 'Navcoin', symbol: 'NAV', value: 2345.78, change: 0.050 },
  ],
};

const CryptoIcon = ({ symbol }) => {
  // This is a placeholder. In a real app, you'd use actual crypto icons.
  return <View style={[styles.cryptoIcon, { backgroundColor: symbol === 'BTC' ? '#F7931A' : '#627EEA' }]} />;
};

export default function CryptoWalletScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, {dummyData.name}</Text>
        <Text style={styles.subGreeting}>Let's check your crypto wallet</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>your current balance</Text>
        <Text style={styles.balanceAmount}>${dummyData.balance.toLocaleString()}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonLight]}>
            <Text style={[styles.buttonText, styles.buttonTextDark]}>Received</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.assetsContainer}>
        <View style={styles.assetsHeader}>
          <Text style={styles.assetsTitle}>Assets</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {dummyData.assets.map((asset, index) => (
            <View key={index} style={styles.assetItem}>
              <CryptoIcon symbol={asset.symbol} />
              <View style={styles.assetInfo}>
                <Text style={styles.assetSymbol}>{asset.symbol}</Text>
                <Text style={styles.assetName}>{asset.name}</Text>
              </View>
              <View style={styles.assetValue}>
                <Text style={styles.assetAmount}>${asset.value.toLocaleString()}</Text>
                <Text style={[styles.assetChange, { color: asset.change >= 0 ? 'green' : 'red' }]}>
                  {asset.change >= 0 ? '+' : ''}{(asset.change * 100).toFixed(2)}%
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C365A',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subGreeting: {
    fontSize: 16,
    color: '#B0B3B8',
  },
  menuButton: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  balanceCard: {
    backgroundColor: '#4C5980',
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
  balanceLabel: {
    color: '#B0B3B8',
    fontSize: 16,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2C365A',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonLight: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonTextDark: {
    color: '#2C365A',
  },
  assetsContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  assetsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  assetsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#4C5980',
  },
  assetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cryptoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  assetInfo: {
    flex: 1,
  },
  assetSymbol: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  assetName: {
    color: '#B0B3B8',
  },
  assetValue: {
    alignItems: 'flex-end',
  },
  assetAmount: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  assetChange: {
    fontSize: 14,
  },
});