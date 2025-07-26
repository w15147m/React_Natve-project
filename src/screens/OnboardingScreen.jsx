
// Updated src/screens/OnboardingScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/common/Button';
import { colors, fonts, dimensions } from '../constants';

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.illustration}>
          <Text style={styles.illustrationText}>💰📊💳</Text>
        </View>
        
        <Text style={styles.title}>Spend Smarter{'\n'}Save More</Text>
        
        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Register')}
            style={styles.button}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Already Have Account? Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: dimensions.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  illustration: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationText: {
    fontSize: 80,
  },
  title: {
    fontSize: fonts.sizes.xxlarge,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 40,
  },
  button: {
    width: '100%',
    marginBottom: 20,
  },
  loginText: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: fonts.sizes.medium,
    fontWeight: '600',
  },
});

export default OnboardingScreen;