import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const actions = [
  { id: 'transfer', title: 'Transfer', icon: 'send', color: '#1A2235', iconColor: '#FFF' },
  { id: 'topup', title: 'Top-Up', icon: 'wallet-outline', color: '#3B82F6', iconColor: '#FFF' },
  { id: 'withdraw', title: 'Withdraw', icon: 'cash-outline', color: '#E2E8F0', iconColor: '#1A2235' },
  { id: 'history', title: 'History', icon: 'time-outline', color: '#D1FAE5', iconColor: '#059669' },
];

export function ActionButtons() {
  return (
    <View style={styles.container}>
      {actions.map((action) => (
        <View key={action.id} style={styles.actionItem}>
          <TouchableOpacity style={[styles.iconContainer, { backgroundColor: action.color }]}>
            <Ionicons name={action.icon as any} size={24} color={action.iconColor} />
          </TouchableOpacity>
          <Text style={styles.title}>{action.title}</Text>
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
    gap: 8,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 13,
    color: '#475569',
    fontWeight: '500',
  },
});
