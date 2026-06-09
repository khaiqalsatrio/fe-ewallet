import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export function RecentAssetMoves() {
  const { theme } = useTheme();

  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { marginBottom: 0, color: theme.text }]}>Recent Asset Moves</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <View style={[styles.assetItem, { backgroundColor: theme.card, borderColor: theme.divider }]}>
        <View style={styles.assetItemLeft}>
          <View style={[styles.iconContainer, { backgroundColor: theme.iconBg, width: 40, height: 40, borderRadius: 20 }]}>
            <Ionicons name="swap-horizontal" size={20} color={theme.iconColor} />
          </View>
          <View>
            <Text style={[styles.assetTitle, { color: theme.text }]}>Bought AAPL</Text>
            <Text style={[styles.assetSubtitle, { color: theme.textMuted }]}>Investments • Today</Text>
          </View>
        </View>
        <View style={styles.assetItemRight}>
          <Text style={[styles.assetAmount, { color: theme.text }]}>-$1,250.00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 24,
  },
  seeAll: {
    color: '#3B82F6',
    fontSize: 12,
    fontWeight: '600',
  },
  assetItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  assetItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  assetTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  assetSubtitle: {
    fontSize: 13,
  },
  assetItemRight: {
    alignItems: 'flex-end',
  },
  assetAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
