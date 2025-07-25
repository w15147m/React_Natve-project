
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