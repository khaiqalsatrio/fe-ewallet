import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export default function ProfileScreen() {
  const { isDarkMode, setIsDarkMode, theme } = useTheme();

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
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={[styles.avatar, { justifyContent: 'center', alignItems: 'center', backgroundColor: theme.iconBg }]}>
              <Ionicons name="person" size={48} color={theme.iconColor} />
            </View>
            <TouchableOpacity style={[styles.editBtn, { borderColor: theme.background }]}>
              <Ionicons name="pencil" size={12} color="#FFF" />
            </TouchableOpacity>
          </View>

          <Text style={[styles.name, { color: theme.text }]}>Radit R35</Text>

          <View style={[styles.badgePill, { backgroundColor: theme.badgeBg, borderColor: theme.badgeBorder }]}>
            <MaterialIcons name="verified" size={14} color="#3B82F6" />
            <Text style={[styles.badgeText, { color: theme.text }]}>Account Level: Gold</Text>
          </View>
        </View>

        {/* Menu List */}
        <View style={[styles.menuCard, { backgroundColor: theme.card }]}>

          {/* Dark Mode Toggle */}
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIconCircle, { backgroundColor: theme.iconBg }]}>
                <Ionicons name={isDarkMode ? "moon" : "moon-outline"} size={20} color={theme.iconColor} />
              </View>
              <Text style={[styles.menuItemText, { color: theme.text }]}>Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
              thumbColor="#FFF"
            />
          </View>

          <View style={[styles.divider, { backgroundColor: theme.divider }]} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIconCircle, { backgroundColor: theme.iconBg }]}>
                <Ionicons name="person-outline" size={20} color={theme.iconColor} />
              </View>
              <Text style={[styles.menuItemText, { color: theme.text }]}>Personal Information</Text>
            </View>
            <Feather name="chevron-right" size={20} color={theme.textMuted} />
          </TouchableOpacity>

          <View style={[styles.divider, { backgroundColor: theme.divider }]} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIconCircle, { backgroundColor: theme.iconBg }]}>
                <Ionicons name="lock-closed-outline" size={20} color={theme.iconColor} />
              </View>
              <Text style={[styles.menuItemText, { color: theme.text }]}>Security & PIN</Text>
            </View>
            <Feather name="chevron-right" size={20} color={theme.textMuted} />
          </TouchableOpacity>

          <View style={[styles.divider, { backgroundColor: theme.divider }]} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIconCircle, { backgroundColor: theme.iconBg }]}>
                <Ionicons name="notifications-outline" size={20} color={theme.iconColor} />
              </View>
              <Text style={[styles.menuItemText, { color: theme.text }]}>Notification Settings</Text>
            </View>
            <Feather name="chevron-right" size={20} color={theme.textMuted} />
          </TouchableOpacity>

          <View style={[styles.divider, { backgroundColor: theme.divider }]} />

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIconCircle, { backgroundColor: theme.iconBg }]}>
                <Ionicons name="help-circle-outline" size={20} color={theme.iconColor} />
              </View>
              <Text style={[styles.menuItemText, { color: theme.text }]}>Help & Support</Text>
            </View>
            <Feather name="chevron-right" size={20} color={theme.textMuted} />
          </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Ionicons name="log-out-outline" size={20} color="#DC2626" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

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
  profileSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#E2E8F0',
  },
  editBtn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  badgePill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
    borderWidth: 1,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  menuCard: {
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '500',
  },
  divider: {
    height: 1,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE2E2',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
    marginBottom: 24,
  },
  logoutText: {
    color: '#DC2626',
    fontSize: 16,
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
  },
});
