import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export function BalanceCard() {
  const { theme, isDarkMode } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? theme.card : '#0F172A', borderColor: theme.divider, borderWidth: isDarkMode ? 1 : 0 }]}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.label}>TOTAL BALANCE</Text>
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
          <Text style={styles.label}>WALLET ID</Text>
          <Text style={styles.walletId}>....  ....  8829</Text>
        </View>
        <View style={styles.securePill}>
          <Ionicons name="shield-checkmark" size={14} color="#10B981" />
          <Text style={styles.secureText}>SECURE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F172A', // Darker blue
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
    color: '#64748B',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },
  nfcIcon: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
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
  securePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  secureText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
