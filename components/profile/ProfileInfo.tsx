import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export function ProfileInfo() {
  const { theme } = useTheme();

  return (
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
  );
}

const styles = StyleSheet.create({
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
});
