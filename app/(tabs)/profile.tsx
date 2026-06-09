import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { ProfileInfo } from '../../components/profile/ProfileInfo';
import { MenuList } from '../../components/profile/MenuList';
import { LogoutButton } from '../../components/profile/LogoutButton';

export default function ProfileScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.background }]}>
        <Ionicons name="wallet-outline" size={24} color={theme.headerIcon} />
        <Text style={[styles.headerTitle, { color: theme.headerIcon }]}>SecureVault</Text>
        <View style={styles.bellContainer}>
          <Ionicons name="notifications-outline" size={24} color={theme.headerIcon} />
          <View style={[styles.notificationBadge, { borderColor: theme.background }]} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <ProfileInfo />
        
        <MenuList />

        <LogoutButton />

        {/* Footer */}
        <Text style={[styles.versionText, { color: theme.textMuted }]}>Version 4.12.0</Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bellContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
  },
});
