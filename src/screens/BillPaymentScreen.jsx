// src/screens/BillPaymentScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import { colors, fonts, dimensions } from '../constants';

const BillPaymentScreen = ({ navigation }) => {
  const [paymentStep, setPaymentStep] = useState('confirm'); // 'confirm' or 'success'

  const transactionDetails = [
    { label: 'Payment method', value: 'Debit Card' },
    { label: 'Status', value: 'Success' },
    { label: 'Time', value: '05:10 AM' },
    { label: 'Date', value: 'Feb 28, 2022' },
    { label: 'Transaction ID', value: '200928193847l' },
  ];

  const amounts = [
    { label: 'Price', value: '$11.99' },
    { label: 'Fee', value: '$1.99' },
    { label: 'Total', value: '$13.98' },
  ];

  if (paymentStep === 'confirm') {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Bill Payment"
          leftIcon={<Text style={styles.headerIcon}>←</Text>}
          onLeftPress={() => navigation.goBack()}
          rightIcon={<Text style={styles.headerIcon}>⋯</Text>}
        />
        
        <ScrollView style={styles.content}>
          <View style={styles.serviceSection}>
            <View style={styles.serviceIcon}>
              <Text style={styles.serviceIconText}>📺</Text>
            </View>
            <Text style={styles.serviceName}>You will pay YouTube Premium</Text>
            <Text style={styles.serviceDescription}>for one month with BCA OneKlik</Text>
          </View>
          
          <View style={styles.amountSection}>
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
            title="Confirm and Pay"
            onPress={() => setPaymentStep('success')}
            style={styles.confirmButton}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Bill Payment"
        leftIcon={<Text style={styles.headerIcon}>←</Text>}
        onLeftPress={() => navigation.goBack()}
        rightIcon={<Text style={styles.headerIcon}>⋯</Text>}
      />
      
      <ScrollView style={styles.content}>
        <View style={styles.successSection}>
          <View style={styles.successIcon}>
            <Text style={styles.successIconText}>✓</Text>
          </View>
          <Text style={styles.successTitle}>Payment Successfully</Text>
          <Text style={styles.successSubtitle}>YouTube Premium</Text>
        </View>
        
        <View style={styles.detailsSection}>
          <Text style={styles.sectionTitle}>Transaction details</Text>
          
          {transactionDetails.map((detail, index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{detail.label}</Text>
              <Text style={styles.detailValue}>{detail.value}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.amountSection}>
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
          title="Share Receipt"
          variant="secondary"
          onPress={() => navigation.popToTop()}
          style={styles.shareButton}
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
  serviceSection: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 40,
    marginBottom: 20,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  serviceIconText: {
    fontSize: 30,
  },
  serviceName: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
    textAlign: 'center',
  },
  successSection: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 40,
    marginBottom: 20,
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  successIconText: {
    fontSize: 40,
    color: colors.white,
    fontWeight: 'bold',
  },
  successTitle: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  successSubtitle: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
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
  amountSection: {
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
  confirmButton: {
    width: '100%',
  },
  shareButton: {
    width: '100%',
  },
});

export default BillPaymentScreen;