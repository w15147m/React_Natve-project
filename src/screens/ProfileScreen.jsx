import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import { colors, fonts, dimensions } from '../constants';

const ProfileScreen = ({ navigation }) => {
  const menuItems = [
    { title: 'Invite Friends', icon: '👥', color: colors.primary },
    { title: 'Account Info', icon: '👤', color: colors.secondary },
    { title: 'Personal profile', icon: '📝', color: colors.success },
    { title: 'Message center', icon: '💬', color: colors.error },
    { title: 'Login and security', icon: '🔒', color: colors.primary },
    { title: 'Data and privacy', icon: '🛡️', color: colors.darkGray },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Profile"
        leftIcon={<Text style={styles.headerIcon}>←</Text>}
        onLeftPress={() => navigation.goBack()}
        rightIcon={<Text style={styles.headerIcon}>🔔</Text>}
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text style={styles.name}>Ervina Morgana</Text>
          <Text style={styles.email}>ervina.morgana@domain.com</Text>
        </View>
        
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={[styles.menuIcon, { backgroundColor: item.color }]}>
                <Text style={styles.menuIconText}>{item.icon}</Text>
              </View>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuArrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerIcon: {
    fontSize: 20,
    color: colors.white,
  },
  profileSection: {
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 40,
  },
  name: {
    fontSize: fonts.sizes.large,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  email: {
    fontSize: fonts.sizes.medium,
    color: colors.darkGray,
  },
  menuSection: {
    backgroundColor: colors.white,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuIconText: {
    fontSize: 16,
    color: colors.white,
  },
  menuTitle: {
    flex: 1,
    fontSize: fonts.sizes.medium,
    color: colors.text,
  },
  menuArrow: {
    fontSize: 16,
    color: colors.darkGray,
  },
});

export default ProfileScreen;
