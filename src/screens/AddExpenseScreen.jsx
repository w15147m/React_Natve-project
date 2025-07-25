// src/screens/AddExpenseScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { colors, fonts, dimensions } from '../constants';

const AddExpenseScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('Tue, 27 Feb 2022');
  const [description, setDescription] = useState('');

  const categories = [
    { name: 'Food', icon: '🍔', color: colors.primary },
    { name: 'Transport', icon: '🚗', color: colors.secondary },
    { name: 'Shopping', icon: '🛍️', color: '#FF6B6B' },
    { name: 'Health', icon: '🏥', color: '#4ECDC4' },
  ];

  const handleAddExpense = () => {
    // Handle add expense logic
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Add Expense"
        leftIcon={<Text style={styles.headerIcon}>←</Text>}
        onLeftPress={() => navigation.goBack()}
        rightIcon={<Text style={styles.headerIcon}>⋯</Text>}
      />
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.form}>
          <Input
            label="AMOUNT"
            value={amount}
            onChangeText={setAmount}
            placeholder="$0.00"
            keyboardType="numeric"
          />
          
          <View style={styles.categorySection}>
            <Text style={styles.label}>CATEGORY</Text>
            <View style={styles.categories}>
              {categories.map((cat, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.categoryItem,
                    { backgroundColor: cat.color },
                    category === cat.name && styles.categorySelected
                  ]}
                  onPress={() => setCategory(cat.name)}
                >
                  <Text style={styles.categoryIcon}>{cat.icon}</Text>
                  <Text style={styles.categoryName}>{cat.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <Input
            label="DATE"
            value={date}
            onChangeText={setDate}
            placeholder="Select date"
          />
          
          <Input
            label="DESCRIPTION"
            value={description}
            onChangeText={setDescription}
            placeholder="Add description"
          />
        </View>
        
        <View style={styles.keypad}>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>1</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>3</Text></TouchableOpacity>
          </View>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>6</Text></TouchableOpacity>
          </View>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>7</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>8</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>9</Text></TouchableOpacity>
          </View>
          <View style={styles.keypadRow}>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>.</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>0</Text></TouchableOpacity>
            <TouchableOpacity style={styles.key}><Text style={styles.keyText}>⌫</Text></TouchableOpacity>
          </View>
        </View>
        
        <Button
          title="Add Expense"
          onPress={handleAddExpense}
          style={styles.addButton}
        />
      </KeyboardAvoidingView>
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
  form: {
    flex: 1,
  },
  label: {
    fontSize: fonts.sizes.small,
    fontWeight: '600',
    color: colors.darkGray,
    marginBottom: 8,
  },
  categorySection: {
    marginBottom: 20,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryItem: {
    flex: 1,
    minWidth: '22%',
    aspectRatio: 1,
    borderRadius: dimensions.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
  categorySelected: {
    opacity: 1,
    transform: [{ scale: 1.05 }],
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryName: {
    fontSize: fonts.sizes.small,
    color: colors.white,
    fontWeight: '500',
  },
  keypad: {
    marginVertical: 20,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  key: {
    flex: 1,
    aspectRatio: 2,
    backgroundColor: colors.white,
    borderRadius: dimensions.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  keyText: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.text,
  },
  addButton: {
    marginTop: 20,
  },
});

export default AddExpenseScreen;