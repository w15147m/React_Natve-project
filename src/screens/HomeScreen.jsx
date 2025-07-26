// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react'; // <-- ADD useEffect and useState
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import BalanceCard from '../components/common/BalanceCard';
import TransactionItem from '../components/common/TransactionItem';
import { colors, fonts } from '../constants';
import { supabase } from '../lib/supabase'; // <-- IMPORT SUPABASE

const HomeScreen = ({ navigation }) => {
  const [connectionStatus, setConnectionStatus] = useState('Testing...'); // <-- ADD STATE

  // v-- ADD THIS useEffect HOOK TO TEST CONNECTION --v
  useEffect(() => {
    const testConnection = async () => {
      console.log("🔄 Testing Supabase connection...");
      setConnectionStatus('Testing...');
      
      try {
        // Try to fetch data from the status table
        const { data, error } = await supabase
          .from('status')
          .select('*');

        if (error) {
          console.error('❌ Connection failed:', error.message);
          setConnectionStatus(`❌ Error: ${error.message}`);
        } else {
          console.log('✅ Connection successful! Data:', data);
          setConnectionStatus(`✅ Connected! Found ${data.length} status records`);
        }
      } catch (error) {
        console.error('❌ Unexpected error:', error);
        setConnectionStatus('❌ Unexpected error occurred');
      }
    };

    testConnection();
  }, []);
  // ^-- END OF useEffect HOOK --^

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
        title="Good Afternoon, User"
        rightIcon={<Text style={styles.headerIcon}>🔔</Text>}
      />
      
      {/* ADD CONNECTION STATUS DISPLAY */}
      <View style={styles.connectionStatus}>
        <Text style={styles.connectionText}>{connectionStatus}</Text>
      </View>
      
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
  // ADD STYLES FOR CONNECTION STATUS
  connectionStatus: {
    backgroundColor: colors.gray,
    padding: 12,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  connectionText: {
    fontSize: fonts.sizes.small,
    color: colors.text,
    fontWeight: '500',
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