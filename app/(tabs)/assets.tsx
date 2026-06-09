import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function AssetsScreen() {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.background }]}>
        <Ionicons name="wallet-outline" size={24} color={theme.headerIcon} />
        <Text style={[styles.headerTitle, { color: theme.headerIcon }]}>Assets</Text>
        <Ionicons name="notifications-outline" size={24} color={theme.headerIcon} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Portfolio Card */}
        <View style={styles.portfolioCard}>
          <Text style={styles.portfolioLabel}>Total Portfolio Value</Text>
          <Text style={styles.portfolioValue}>$142,850.00</Text>
          <View style={styles.profitRow}>
            <Feather name="trending-up" size={14} color="#10B981" />
            <Text style={styles.profitText}>+2.4% ($3,420)</Text>
            <Text style={styles.profitDuration}>Today</Text>
          </View>
        </View>

        {/* Your Assets */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Your Assets</Text>
        <View style={styles.assetsList}>
          {/* Item 1 */}
          <View style={[styles.assetItem, { backgroundColor: theme.card, borderColor: theme.divider }]}>
            <View style={styles.assetItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#E0E7FF' }]}>
                <MaterialCommunityIcons name="bank" size={24} color="#4F46E5" />
              </View>
              <View>
                <Text style={[styles.assetTitle, { color: theme.text }]}>Cash & Savings</Text>
                <Text style={[styles.assetSubtitle, { color: theme.textMuted }]}>3 Accounts</Text>
              </View>
            </View>
            <View style={styles.assetItemRight}>
              <Text style={[styles.assetAmount, { color: theme.text }]}>$45,200.00</Text>
              <Text style={[styles.assetPercent, { color: theme.textMuted }]}>31.6%</Text>
            </View>
          </View>

          {/* Item 2 */}
          <View style={[styles.assetItem, { backgroundColor: theme.card, borderColor: theme.divider }]}>
            <View style={styles.assetItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: '#D1FAE5' }]}>
                <Feather name="trending-up" size={24} color="#059669" />
              </View>
              <View>
                <Text style={[styles.assetTitle, { color: theme.text }]}>Investments</Text>
                <Text style={[styles.assetSubtitle, { color: theme.textMuted }]}>Stocks & ETFs</Text>
              </View>
            </View>
            <View style={styles.assetItemRight}>
              <Text style={[styles.assetAmount, { color: theme.text }]}>$82,450.00</Text>
              <Text style={[styles.assetPercent, { color: '#059669' }]}>▲ 1.2%</Text>
            </View>
          </View>

          {/* Item 3 */}
          <View style={[styles.assetItem, { backgroundColor: theme.card, borderColor: theme.divider }]}>
            <View style={styles.assetItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: theme.iconBg }]}>
                <MaterialCommunityIcons name="bitcoin" size={24} color={theme.iconColor} />
              </View>
              <View>
                <Text style={[styles.assetTitle, { color: theme.text }]}>Crypto</Text>
                <Text style={[styles.assetSubtitle, { color: theme.textMuted }]}>BTC, ETH</Text>
              </View>
            </View>
            <View style={styles.assetItemRight}>
              <Text style={[styles.assetAmount, { color: theme.text }]}>$15,200.00</Text>
              <Text style={[styles.assetPercent, { color: '#DC2626' }]}>▼ 0.8%</Text>
            </View>
          </View>
        </View>

        {/* Recent Asset Moves */}
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
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
  assetsList: {
    gap: 12,
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
  assetPercent: {
    fontSize: 12,
    fontWeight: '500',
  },
});
