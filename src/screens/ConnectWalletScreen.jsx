
// src/screens/ConnectWalletScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import { colors, fonts, dimensions } from '../constants';

const ConnectWalletScreen = ({ navigation }) => {
  const [selectedAccount, setSelectedAccount] = useState(null);

  const accounts = [
    { id: 1, name: 'Bank Link', description: 'Connect bank for easy fund', icon: '🏦', selected: true },
    { id: 2, name: 'Microdeposits', description: 'Deposit to bank account', icon: '💰', selected: false },
    { id: 3, name: 'Paypal', description: 'Connect your paypal account', icon: '💳', selected: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Connect Wallet"
        leftIcon={<Text style={styles.headerIcon}>←</Text>}
        onLeftPress={() => navigation.goBack()}
      />
      
      <ScrollView style={styles.content}>
        <View style={styles.cardSection}>
          <View style={styles.card}>
            <Text style={styles.cardNumber}>•••• •••• •••• 4012</Text>
            <Text style={styles.cardHolder}>Ervina Morgana</Text>
            <Text style={styles.cardExpiry}>12/26</Text>
          </View>
          
          <Text style={styles.sectionTitle}>Add your debit Card</Text>
          <Text style={styles.sectionSubtitle}>
            This card must be connected to a bank account in your name at a bank or credit union in your name
          </Text>
        </View>
        
        <View style={styles.accountsSection}>
          <Text style={styles.sectionTitle}>Accounts</Text>
          
          {accounts.map((account) => (
            <TouchableOpacity
              key={account.id}
              style={[
                styles.accountItem,
                selectedAccount === account.id && styles.accountItemSelected
              ]}
              onPress={() => setSelectedAccount(account.id)}
            >
              <View style={styles.accountIcon}>
                <Text style={styles.accountIconText}>{account.icon}</Text>
              </View>
              <View style={styles.accountDetails}>
                <Text style={styles.accountName}>{account.name}</Text>
                <Text style={styles.accountDescription}>{account.description}</Text>
              </View>
              <View style={[
                styles.radio,
                account.selected && styles.radioSelected
              ]}>
                {account.selected && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Next"
          onPress={() => navigation.goBack()}
          style={styles.nextButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerIcon: {
    fontSize: 20,
    color: colors.white,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  cardSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: colors.primary,
    borderRadius: dimensions.borderRadius,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardNumber: {
    fontSize: fonts.sizes.large,
    color: colors.white,
    fontWeight: '600',
  },
  cardHolder: {
    fontSize: fonts.sizes.medium,
    color: colors.white,
  },
  cardExpiry: {
    fontSize: fonts.sizes.medium,
    color: colors.white,
    alignSelf: 'flex-end',
  },
  sectionTitle: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
    textAlign: 'center',
    lineHeight: 22,
  },
  accountsSection: {
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadius,
    padding: 20,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  accountItemSelected: {
    backgroundColor: colors.gray,
    borderRadius: dimensions.borderRadius,
    marginHorizontal: -10,
    paddingHorizontal: 10,
  },
  accountIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  accountIconText: {
    fontSize: 20,
  },
  accountDetails: {
    flex: 1,
  },
  accountName: {
    fontSize: fonts.sizes.medium,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  accountDescription: {
    fontSize: fonts.sizes.small,
    color: colors.darkGray,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: colors.primary,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  footer: {
    padding: 20,
  },
  nextButton: {
    width: '100%',
  },
});

export default ConnectWalletScreen;
