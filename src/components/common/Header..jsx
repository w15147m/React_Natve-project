export const colors = {
  primary: '#00A693',
  secondary: '#4ECDC4',
  background: '#FFFFFF',
  gray: '#F5F5F5',
  darkGray: '#8E8E8E',
  text: '#333333',
  success: '#00D4AA',
  error: '#FF6B6B',
  income: '#00D4AA',
  expense: '#FF6B6B',
  white: '#FFFFFF',
  black: '#000000',
};

// src/constants/fonts.js
export const fonts = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  sizes: {
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 32,
  },
};

// src/constants/dimensions.js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const dimensions = {
  width,
  height,
  padding: 20,
  margin: 16,
  borderRadius: 12,
};

// src/components/common/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, fonts } from '../../constants';

const Header = ({ title, leftIcon, rightIcon, onLeftPress, onRightPress, showBack = false }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.iconContainer} 
        onPress={onLeftPress}
        activeOpacity={0.7}
      >
        {leftIcon || (showBack && <Text style={styles.backIcon}>←</Text>)}
      </TouchableOpacity>
      
      <Text style={styles.title}>{title}</Text>
      
      <TouchableOpacity 
        style={styles.iconContainer} 
        onPress={onRightPress}
        activeOpacity={0.7}
      >
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.white,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: colors.white,
  },
});

export default Header;