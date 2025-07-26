// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

// Import screens
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { LoginScreen, RegisterScreen } from '../screens/AuthScreens';

// Debug: Log to verify imports
console.log('📦 Imports check:');
console.log('- SplashScreen:', typeof SplashScreen);
console.log('- OnboardingScreen:', typeof OnboardingScreen);
console.log('- LoginScreen:', typeof LoginScreen);
console.log('- RegisterScreen:', typeof RegisterScreen);

const Stack = createStackNavigator();

// Temporary Main Screen Component
const MainScreen = () => {
  const { signOut } = useAuth();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to Mono!</Text>
      <Text style={{ marginTop: 10, marginBottom: 20 }}>Main app screens coming soon...</Text>
      <Text 
        style={{ color: '#007AFF', fontSize: 16 }}
        onPress={signOut}
      >
        Sign Out (for testing)
      </Text>
    </View>
  );
};

const AppNavigator = () => {
  const { user, loading } = useAuth();
  
  console.log('🔍 AppNavigator render - user:', user ? 'authenticated' : 'not authenticated', 'loading:', loading);
  console.log('📱 Registering screens: Splash, Onboarding, Login, Register, Main');

  return (
    <Stack.Navigator 
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ title: 'Splash Screen' }}
      />
      <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen}
        options={{ title: 'Onboarding Screen' }}
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{ title: 'Login Screen' }}
      />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen}
        options={{ title: 'Register Screen' }}
      />
      <Stack.Screen 
        name="Main" 
        component={MainScreen}
        options={{ title: 'Main Screen' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;