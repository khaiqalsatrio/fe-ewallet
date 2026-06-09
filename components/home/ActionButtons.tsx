import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

const actions = [
  { id: 'transfer', title: 'SEND', icon: 'send-outline' },
  { id: 'topup', title: 'TOP-UP', icon: 'wallet-plus-outline' },
  { id: 'withdraw', title: 'WITHDRAW', icon: 'cash' },
  { id: 'history', title: 'STATS', icon: 'history' },
];

export function ActionButtons() {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <View key={action.id} style={styles.actionItem}>
          <TouchableOpacity style={[styles.iconContainer, { backgroundColor: theme.card, borderColor: theme.divider }]}>
            <MaterialCommunityIcons name={action.icon as any} size={28} color={theme.iconColor} />
          </TouchableOpacity>
          <Text style={[styles.title, { color: theme.textMuted }]}>{action.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 24,
  },
  actionItem: {
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 68,
    height: 68,
    borderRadius: 22,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 10,
    color: '#475569',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});
