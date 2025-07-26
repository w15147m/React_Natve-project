// src/navigation/AppNavigator.js (Fixed Version)
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

// Import screens
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { LoginScreen, RegisterScreen } from '../screens/AuthScreens';

const Stack = createStackNavigator();

// Temporary Main Screen Component
const MainScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Mono!</Text>
    <Text style={{ marginTop: 10 }}>Main app screens coming soon...</Text>
  </View>
);

const AppNavigator = () => {
  const { user, loading } = useAuth();

  return (
    <Stack.Navigator 
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      {/* Always define ALL screens - don't use conditional rendering */}
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;