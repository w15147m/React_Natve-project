// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen.jsx';
import StatisticsScreen from '../screens/StatisticsScreen.jsx';
import AddExpenseScreen from '../screens/AddExpenseScreen.jsx';
import WalletScreen from '../screens/WalletScreen.jsx';
import ProfileScreen from '../screens/ProfileScreen.jsx';
import TabBar from '../components/common/TabBar';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="AddExpense" component={AddExpenseScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
