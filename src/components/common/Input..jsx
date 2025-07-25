import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { colors, fonts, dimensions } from '../../constants';

const Input = ({ 
  label, 
  value, 
  onChangeText, 
  placeholder, 
  keyboardType = 'default',
  style,
  error 
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={colors.darkGray}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: fonts.sizes.medium,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: dimensions.borderRadius,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: fonts.sizes.medium,
    backgroundColor: colors.white,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    fontSize: fonts.sizes.small,
    color: colors.error,
    marginTop: 4,
  },
});

export default Input;