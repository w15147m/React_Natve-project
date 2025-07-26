// src/screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/common/Header';
import { colors, fonts, dimensions } from '../constants';
import { useAuth } from '../contexts/AuthContext'; // 1. Import the useAuth hook

const ProfileScreen = ({ navigation }) => {
  // 2. Get the signOut function from the auth context
  const { signOut, user } = useAuth();

  // 3. Define the sign out handler
  const handleSignOut = async () => {
    try {
      await signOut();
      // The AppNavigator will automatically handle redirecting to the login screen
    } catch (error) {
      Alert.alert("Sign Out Error", error.message);
    }
  };

  const menuItems = [
    { title: 'Invite Friends', icon: '👥', color: colors.primary },
    { title: 'Account Info', icon: '👤', color: colors.secondary },
    { title: 'Personal profile', icon: '📝', color: colors.success },
    { title: 'Message center', icon: '💬', color: colors.error },
    { title: 'Login and security', icon: '🔒', color: colors.primary },
    { title: 'Data and privacy', icon: '🛡️', color: colors.darkGray },
    // 4. Add the "Logout" button to your menu items array
    { title: 'Logout', icon: '🚪', color: colors.darkGray, action: 'logout' },
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
          {/* Use the user's actual name and email from the auth object */}
          <Text style={styles.name}>{user?.user_metadata?.name || 'User'}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
        
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            // 5. Modify the TouchableOpacity to handle the press action
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={item.action === 'logout' ? handleSignOut : () => Alert.alert("Navigate", `Tapped on ${item.title}`)}
            >
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

// --- Styles remain the same ---
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