
// src/components/common/TabBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../../constants';

const TabBar = ({ state, descriptors, navigation }) => {
  const tabs = [
    { name: 'Home', icon: '🏠' },
    { name: 'Statistics', icon: '📊' },
    { name: 'AddExpense', icon: '+' },
    { name: 'Wallet', icon: '💳' },
    { name: 'Profile', icon: '👤' },
  ];

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const tab = tabs.find(t => t.name === route.name) || tabs[index];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (route.name === 'AddExpense') {
          return (
            <TouchableOpacity
              key={index}
              style={styles.addButton}
              onPress={onPress}
              activeOpacity={0.8}
            >
              <Text style={styles.addButtonText}>{tab.icon}</Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={onPress}
            activeOpacity={0.8}
          >
            <Text style={[styles.icon, { opacity: isFocused ? 1 : 0.6 }]}>
              {tab.icon}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: colors.gray,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    fontSize: 24,
  },
  addButton: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TabBar;

