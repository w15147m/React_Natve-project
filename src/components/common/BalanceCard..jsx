import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, dimensions } from '../../constants';

const BalanceCard = ({ balance, income, expenses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Total Balance</Text>
      <Text style={styles.balance}>${balance.toFixed(2)}</Text>
      
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Income</Text>
          <Text style={[styles.itemValue, { color: colors.income }]}>
            ${income.toFixed(2)}
          </Text>
        </View>
        
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Expenses</Text>
          <Text style={[styles.itemValue, { color: colors.expense }]}>
            ${expenses.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: dimensions.borderRadius,
    padding: 20,
    margin: 20,
  },
  label: {
    fontSize: fonts.sizes.medium,
    color: colors.white,
    opacity: 0.8,
    marginBottom: 8,
  },
  balance: {
    fontSize: fonts.sizes.xxlarge,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
  },
  itemLabel: {
    fontSize: fonts.sizes.small,
    color: colors.white,
    opacity: 0.8,
    marginBottom: 4,
  },
  itemValue: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
  },
});

export default BalanceCard;
