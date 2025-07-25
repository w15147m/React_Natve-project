
// src/screens/WalletScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import TransactionItem from '../components/common/TransactionItem';
import { colors, fonts, dimensions } from '../constants';

const WalletScreen = ({ navigation }) => {
  const balance = 2548.00;
  
  const actions = [
    { title: 'Add', icon: '+' },
    { title: 'Pay', icon: '💳' },
    { title: 'Send', icon: '📤' },
  ];

  const transactions = [
    { id: 1, title: 'Upwork Income', amount: 850, type: 'income', date: 'Today', icon: '⬆️', color: colors.success },
    { id: 2, title: 'Transfer', amount: -85, type: 'expense', date: 'Yesterday', icon: '💳', color: colors.primary },
    { id: 3, title: 'House Rent', amount: -1400, type: 'expense', date: 'Feb 23', icon: '🏠', color: colors.error },
    { id: 4, title: 'Spotify', amount: -11.99, type: 'expense', date: 'Feb 23', icon: '🎵', color: colors.error },
  ];

  const upcomingBills = [
    { id: 1, title: 'Transactions', icon: '📊' },
    { id: 2, title: 'Upcoming Bills', icon: '📄' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Wallet"
        leftIcon={<Text style={styles.headerIcon}>←</Text>}
        onLeftPress={() => navigation.goBack()}
        rightIcon={<Text style={styles.headerIcon}>🔔</Text>}
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.balanceSection}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balance}>${balance.toFixed(2)}</Text>
          
          <View style={styles.actions}>
            {actions.map((action, index) => (
              <TouchableOpacity key={index} style={styles.actionButton}>
                <View style={styles.actionIcon}>
                  <Text style={styles.actionIconText}>{action.icon}</Text>
                </View>
                <Text style={styles.actionTitle}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.tabSection}>
          {upcomingBills.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tab, index === 0 && styles.activeTab]}
            >
              <Text style={[styles.tabText, index === 0 && styles.activeTabText]}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.transactionsSection}>
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onPress={() => navigation.navigate('TransactionDetails', { transaction })}
            />
          ))}
        </View>
      </ScrollView>
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
  balanceSection: {
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
    marginBottom: 8,
  },
  balance: {
    fontSize: fonts.sizes.xxlarge,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 30,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionIconText: {
    fontSize: 20,
  },
  actionTitle: {
    fontSize: fonts.sizes.medium,
    color: colors.text,
  },
  tabSection: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 1,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
  },
  activeTabText: {
    color: colors.primary,
    fontWeight: '600',
  },
  transactionsSection: {
    backgroundColor: colors.white,
    marginTop: 1,
  },
});

export default WalletScreen;
