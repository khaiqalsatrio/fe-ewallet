import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export function BalanceCard() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.label}>Total Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balance}>$12,450.00</Text>
            <Ionicons name="eye-outline" size={20} color="#8F9BB3" />
          </View>
        </View>
        <View style={styles.nfcIcon}>
          <MaterialCommunityIcons name="contactless-payment" size={20} color="#FFF" />
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View>
          <Text style={styles.label}>Wallet ID</Text>
          <Text style={styles.walletId}>****  ****  8829</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.label}>Secure Status</Text>
          <View style={styles.statusRow}>
            <Ionicons name="shield-checkmark" size={14} color="#10B981" />
            <Text style={styles.statusText}>Active</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A2235',
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 20,
    marginTop: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  label: {
    color: '#8F9BB3',
    fontSize: 12,
    marginBottom: 4,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  nfcIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  walletId: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 2,
  },
  statusContainer: {
    alignItems: 'flex-end',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statusText: {
    color: '#10B981',
    fontSize: 14,
    fontWeight: '600',
  },
});
