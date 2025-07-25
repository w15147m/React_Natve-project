import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, fonts, dimensions } from '../../constants';

const Button = ({ 
  title, 
  onPress, 
  variant = 'primary', 
  size = 'large',
  disabled = false,
  style 
}) => {
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    disabled && styles.disabledText
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles} 
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: dimensions.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.darkGray,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: '600',
    fontSize: fonts.sizes.medium,
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.text,
  },
  disabled: {
    backgroundColor: colors.darkGray,
  },
  disabledText: {
    color: colors.white,
  },
});

export default Button;