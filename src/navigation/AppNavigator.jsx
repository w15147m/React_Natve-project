
// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
// import OnboardingScreen from '../screens/OnboardingScreen';
// import TabNavigator from './TabNavigator';
// import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';
// import BillDetailsScreen from '../screens/BillDetailsScreen';
// import BillPaymentScreen from '../screens/BillPaymentScreen';
// import ConnectWalletScreen from '../screens/ConnectWalletScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
      <Stack.Screen name="BillDetails" component={BillDetailsScreen} />
      <Stack.Screen name="BillPayment" component={BillPaymentScreen} />
      <Stack.Screen name="ConnectWallet" component={ConnectWalletScreen} /> */}
    </Stack.Navigator>
  );
}