// src/screens/HomeScreen.js
import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import BalanceCard from '../components/common/BalanceCard';
import TransactionItem from '../components/common/TransactionItem';
import { colors, fonts } from '../constants';

const HomeScreen = ({ navigation }) => {
  const transactions = [
    { id: 1, title: 'Upwork Income', amount: 850, type: 'income', date: 'Today', icon: '⬆️', color: colors.success },
    { id: 2, title: 'Transfer', amount: -85, type: 'expense', date: 'Yesterday', icon: '💳', color: colors.primary },
    { id: 3, title: 'Paypal', amount: -1140, type: 'expense', date: 'Feb 22', icon: '🏪', color: colors.error },
    { id: 4, title: 'Youtube', amount: -11.99, type: 'expense', date: 'Feb 22', icon: '📺', color: colors.error },
  ];

  const suggestions = [
    { id: 1, name: 'John', avatar: '👤' },
    { id: 2, name: 'Sarah', avatar: '👤' },
    { id: 3, name: 'Mike', avatar: '👤' },
    { id: 4, name: 'Emma', avatar: '👤' },
    { id: 5, name: 'Alex', avatar: '👤' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Good Afternoon, Ervina Morgana"
        rightIcon={<Text style={styles.headerIcon}>🔔</Text>}
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <BalanceCard 
          balance={2548.00}
          income={1840.00}
          expenses={284.00}
        />
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Transactions History</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onPress={() => navigation.navigate('TransactionDetails', { transaction })}
            />
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Send Again</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.suggestions}>
            {suggestions.map(person => (
              <TouchableOpacity key={person.id} style={styles.suggestion}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{person.avatar}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.addSuggestion}>
              <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>
          </ScrollView>
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
  section: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.text,
  },
  seeAll: {
    fontSize: fonts.sizes.medium,
    color: colors.primary,
  },
  suggestions: {
    marginTop: 12,
  },
  suggestion: {
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
  },
  addSuggestion: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 24,
    color: colors.white,
  },
});

export default HomeScreen;