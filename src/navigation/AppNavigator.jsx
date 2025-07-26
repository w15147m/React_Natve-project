// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../contexts/AuthContext'; // We need this to check the user state

// Import all your screens
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { LoginScreen, RegisterScreen } from '../screens/AuthScreens';
import TabNavigator from './TabNavigator';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';
import BillDetailsScreen from '../screens/BillDetailsScreen';
import BillPaymentScreen from '../screens/BillPaymentScreen';
import ConnectWalletScreen from '../screens/ConnectWalletScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  // Get the user and loading state from your context
  const { user, loading } = useAuth();

  // You can show a loading/splash screen while the auth state is being checked
  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        // Screens for logged-in users
        <>
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
          <Stack.Screen name="BillDetails" component={BillDetailsScreen} />
          <Stack.Screen name="BillPayment" component={BillPaymentScreen} />
          <Stack.Screen name="ConnectWallet" component={ConnectWalletScreen} />
        </>
      ) : (
        // Screens for logged-out users
        <>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;