/ src/components/common/TransactionItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, fonts } from '../../constants';

const TransactionItem = ({ transaction, onPress }) => {
  const isIncome = transaction.type === 'income';
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <View style={[styles.icon, { backgroundColor: transaction.color || colors.primary }]}>
          <Text style={styles.iconText}>{transaction.icon || '💰'}</Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <Text style={styles.title}>{transaction.title}</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>
      
      <Text style={[
        styles.amount,
        { color: isIncome ? colors.income : colors.expense }
      ]}>
        {isIncome ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  iconContainer: {
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: fonts.sizes.medium,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 2,
  },
  date: {
    fontSize: fonts.sizes.small,
    color: colors.darkGray,
  },
  amount: {
    fontSize: fonts.sizes.medium,
    fontWeight: '600',
  },
});

export default TransactionItem;