
// src/screens/StatisticsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import { colors, fonts, dimensions } from '../constants';

const StatisticsScreen = ({ navigation }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Month');
  const periods = ['Day', 'Week', 'Month', 'Year'];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Statistics"
        leftIcon={<Text style={styles.headerIcon}>←</Text>}
        onLeftPress={() => navigation.goBack()}
        rightIcon={<Text style={styles.headerIcon}>📤</Text>}
      />
      
      <ScrollView style={styles.content}>
        <View style={styles.periodSelector}>
          {periods.map(period => (
            <TouchableOpacity
              key={period}
              style={[
                styles.periodButton,
                selectedPeriod === period && styles.periodButtonActive
              ]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text style={[
                styles.periodText,
                selectedPeriod === period && styles.periodTextActive
              ]}>
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.chartContainer}>
          <Text style={styles.chartPlaceholder}>📊 Chart Visualization</Text>
          <Text style={styles.amount}>$1,235</Text>
        </View>
        
        <View style={styles.spendingSection}>
          <Text style={styles.sectionTitle}>Top Spending</Text>
          
          <View style={styles.spendingItem}>
            <View style={styles.spendingIcon}>
              <Text>☕</Text>
            </View>
            <View style={styles.spendingDetails}>
              <Text style={styles.spendingName}>Starbucks</Text>
              <Text style={styles.spendingDate}>Jan 12, 2022</Text>
            </View>
            <Text style={styles.spendingAmount}>-$150.00</Text>
          </View>
          
          <View style={styles.spendingItem}>
            <View style={styles.spendingIcon}>
              <Text>💳</Text>
            </View>
            <View style={styles.spendingDetails}>
              <Text style={styles.spendingName}>Transfer</Text>
              <Text style={styles.spendingDate}>Jan 12, 2022</Text>
            </View>
            <Text style={styles.spendingAmount}>-$85.00</Text>
          </View>
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
  content: {
    flex: 1,
    padding: 20,
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: colors.gray,
    borderRadius: dimensions.borderRadius,
    padding: 4,
    marginBottom: 20,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: dimensions.borderRadius - 4,
  },
  periodButtonActive: {
    backgroundColor: colors.white,
  },
  periodText: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
  },
  periodTextActive: {
    color: colors.text,
    fontWeight: '600',
  },
  chartContainer: {
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadius,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    minHeight: 200,
    justifyContent: 'center',
  },
  chartPlaceholder: {
    fontSize: 48,
    marginBottom: 10,
  },
  amount: {
    fontSize: fonts.sizes.xxlarge,
    fontWeight: 'bold',
    color: colors.text,
  },
  spendingSection: {
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadius,
    padding: 20,
  },
  sectionTitle: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  spendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  spendingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  spendingDetails: {
    flex: 1,
  },
  spendingName: {
    fontSize: fonts.sizes.medium,
    fontWeight: '500',
    color: colors.text,
  },
  spendingDate: {
    fontSize: fonts.sizes.small,
    color: colors.darkGray,
  },
  spendingAmount: {
    fontSize: fonts.sizes.medium,
    fontWeight: '600',
    color: colors.expense,
  },
});

export default StatisticsScreen;