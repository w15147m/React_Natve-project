import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import { colors, fonts, dimensions } from '../constants';

const TransactionDetailsScreen = ({ navigation, route }) => {
  const { transaction } = route.params || {};
  const isIncome = transaction?.type === 'income';

  const details = [
    { label: 'Status', value: isIncome ? 'Upwork Income' : 'Transfer' },
    { label: 'To', value: isIncome ? 'Me' : 'Chris Evren#' },
    { label: 'Time', value: isIncome ? '10:00 AM' : '04:30 PM' },
    { label: 'Date', value: 'Feb 20, 2022' },
  ];

  const amounts = [
    { label: 'Earnings', value: `${isIncome ? '870.00' : '85.00'}` },
    { label: 'Fee', value: isIncome ? '$20.00' : '$0.00' },
    { label: 'Total', value: `${isIncome ? '850.00' : '85.00'}` },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Transaction Details"
        leftIcon={<Text style={styles.headerIcon}>←</Text>}
        onLeftPress={() => navigation.goBack()}
        rightIcon={<Text style={styles.headerIcon}>⋯</Text>}
      />
      
      <ScrollView style={styles.content}>
        <View style={styles.amountSection}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>{isIncome ? '⬆️' : '👤'}</Text>
          </View>
          <Text style={styles.amount}>
            ${isIncome ? '850.00' : '85.00'}
          </Text>
        </View>
        
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Transaction details</Text>
          
          {details.map((detail, index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{detail.label}</Text>
              <Text style={styles.detailValue}>{detail.value}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.amountBreakdown}>
          {amounts.map((amount, index) => (
            <View key={index} style={styles.amountRow}>
              <Text style={styles.amountLabel}>{amount.label}</Text>
              <Text style={styles.amountValue}>{amount.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Download Receipt"
          variant="secondary"
          onPress={() => {}}
          style={styles.downloadButton}
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
  },
  amountSection: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 40,
    marginBottom: 20,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 30,
  },
  amount: {
    fontSize: fonts.sizes.xxlarge,
    fontWeight: 'bold',
    color: colors.text,
  },
  detailsSection: {
    backgroundColor: colors.white,
    padding: 20,
    marginBottom: 1,
  },
  sectionTitle: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  detailLabel: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
  },
  detailValue: {
    fontSize: fonts.sizes.medium,
    color: colors.text,
    fontWeight: '500',
  },
  amountBreakdown: {
    backgroundColor: colors.white,
    padding: 20,
  },
  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  amountLabel: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
  },
  amountValue: {
    fontSize: fonts.sizes.medium,
    color: colors.text,
    fontWeight: '500',
  },
  footer: {
    padding: 20,
  },
  downloadButton: {
    width: '100%',
  },
});

export default TransactionDetailsScreen;
