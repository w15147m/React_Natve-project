// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts, dimensions } from '../constants';
import { useAuth } from '../contexts/AuthContext';

const SplashScreen = ({ navigation }) => {
  const { user, loading } = useAuth();

  // Update your SplashScreen.js
useEffect(() => {
  const timer = setTimeout(() => {
    if (!loading) {
      if (user) {
        // User is authenticated, go to main app
        navigation.replace('Main');
      } else {
        navigation.replace('Onboarding');
      }
    }
  }, 2000);

  return () => clearTimeout(timer);
}, [navigation, user, loading]);

// Also add this effect to handle real-time auth changes
useEffect(() => {
  if (!loading && user) {
    navigation.replace('Main');
  }
}, [user, loading, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>mono</Text>
      <Text style={styles.tagline}>Smart Expense Tracking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
  },
  tagline: {
    fontSize: fonts.sizes.medium,
    color: colors.white,
    opacity: 0.8,
  },
});

export default SplashScreen;