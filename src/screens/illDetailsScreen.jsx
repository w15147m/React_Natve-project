
// src/screens/BillDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
import { colors, fonts, dimensions } from '../constants';

const BillDetailsScreen = ({ navigation }) => {
  const billDetails = [
    { label: 'Price', value: '$11.99' },
    { label: 'Fee', value: '$1.99' },
    { label: 'Total', value: '$13.98' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Bill Details"
        leftIcon={<Text style={styles.headerIcon}>←</Text>}
        onLeftPress={() => navigation.goBack()}
        rightIcon={<Text style={styles.headerIcon}>⋯</Text>}
      />
      
      <ScrollView style={styles.content}>
        <View style={styles.serviceSection}>
          <View style={styles.serviceIcon}>
            <Text style={styles.serviceIconText}>📺</Text>
          </View>
          <Text style={styles.serviceName}>YouTube Premium</Text>
          <Text style={styles.serviceDate}>Feb 28, 2022</Text>
        </View>
        
        <View style={styles.detailsSection}>
          {billDetails.map((detail, index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.detailLabel}>{detail.label}</Text>
              <Text style={styles.detailValue}>{detail.value}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>Select payment method</Text>
          
          <View style={styles.paymentMethod}>
            <View style={styles.paymentIcon}>
              <Text style={styles.paymentIconText}>💳</Text>
            </View>
            <Text style={styles.paymentText}>Debit Card</Text>
            <View style={styles.radio}>
              <View style={styles.radioSelected} />
            </View>
          </View>
          
          <View style={styles.paymentMethod}>
            <View style={styles.paymentIcon}>
              <Text style={styles.paymentIconText}>💰</Text>
            </View>
            <Text style={styles.paymentText}>Paypal</Text>
            <View style={styles.radio} />
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Pay Now"
          onPress={() => navigation.navigate('BillPayment')}
          style={styles.payButton}
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
    marginBottom: 4,
  },
  serviceDate: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
  },
  detailsSection: {
    backgroundColor: colors.white,
    padding: 20,
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
  paymentSection: {
    backgroundColor: colors.white,
    padding: 20,
  },
  sectionTitle: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 20,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  paymentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  paymentIconText: {
    fontSize: 20,
  },
  paymentText: {
    flex: 1,
    fontSize: fonts.sizes.medium,
    color: colors.text,
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
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  footer: {
    padding: 20,
  },
  payButton: {
    width: '100%',
  },
});

export default BillDetailsScreen;
