import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

const ASSETS_DATA = [
  {
    id: '1',
    title: 'Cash & Savings',
    subtitle: '3 Accounts',
    amount: '$45,200.00',
    percent: '31.6%',
    icon: 'bank',
    iconLibrary: MaterialCommunityIcons,
    iconBgColor: '#E0E7FF',
    iconColor: '#4F46E5',
    percentColor: 'muted', // Special key to use theme.textMuted
  },
  {
    id: '2',
    title: 'Investments',
    subtitle: 'Stocks & ETFs',
    amount: '$82,450.00',
    percent: '▲ 1.2%',
    icon: 'trending-up',
    iconLibrary: Feather,
    iconBgColor: '#D1FAE5',
    iconColor: '#059669',
    percentColor: '#059669',
  },
  {
    id: '3',
    title: 'Crypto',
    subtitle: 'BTC, ETH',
    amount: '$15,200.00',
    percent: '▼ 0.8%',
    icon: 'bitcoin',
    iconLibrary: MaterialCommunityIcons,
    iconBgColor: 'theme.iconBg', // Special key
    iconColor: 'theme.iconColor', // Special key
    percentColor: '#DC2626',
  },
];

export function AssetsList() {
  const { theme } = useTheme();

  return (
    <View style={styles.assetsList}>
      {ASSETS_DATA.map((item) => {
        const IconComp = item.iconLibrary as any;
        const bgColor = item.iconBgColor === 'theme.iconBg' ? theme.iconBg : item.iconBgColor;
        const iColor = item.iconColor === 'theme.iconColor' ? theme.iconColor : item.iconColor;
        const pColor = item.percentColor === 'muted' ? theme.textMuted : item.percentColor;

        return (
          <View key={item.id} style={[styles.assetItem, { backgroundColor: theme.card, borderColor: theme.divider }]}>
            <View style={styles.assetItemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: bgColor }]}>
                <IconComp name={item.icon} size={24} color={iColor} />
              </View>
              <View>
                <Text style={[styles.assetTitle, { color: theme.text }]}>{item.title}</Text>
                <Text style={[styles.assetSubtitle, { color: theme.textMuted }]}>{item.subtitle}</Text>
              </View>
            </View>
            <View style={styles.assetItemRight}>
              <Text style={[styles.assetAmount, { color: theme.text }]}>{item.amount}</Text>
              <Text style={[styles.assetPercent, { color: pColor }]}>{item.percent}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
