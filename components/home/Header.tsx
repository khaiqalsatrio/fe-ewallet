import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export function Header() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background, borderBottomColor: theme.divider }]}>
      <View style={styles.left}>
        <Image source={require('../../assets/images/logo.png')} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
        <Text style={[styles.title, { color: theme.text }]}>Cash App</Text>
      </View>
      <View style={styles.right}>
        <Ionicons name="notifications-outline" size={24} color={theme.iconColor} />
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JS</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#F8FAFC',
    zIndex: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
