import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function PortfolioCard() {
  return (
    <View style={styles.portfolioCard}>
      <Text style={styles.portfolioLabel}>Total Portfolio Value</Text>
      <Text style={styles.portfolioValue}>$142,850.00</Text>
      <View style={styles.profitRow}>
        <Feather name="trending-up" size={14} color="#10B981" />
        <Text style={styles.profitText}>+2.4% ($3,420)</Text>
        <Text style={styles.profitDuration}>Today</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  portfolioCard: {
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  portfolioLabel: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 8,
    fontWeight: '500',
  },
  portfolioValue: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  profitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  profitText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: 'bold',
  },
  profitDuration: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '500',
  },
});
