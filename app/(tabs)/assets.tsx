import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { PortfolioCard } from '../../components/assets/PortfolioCard';
import { AssetsList } from '../../components/assets/AssetsList';
import { RecentAssetMoves } from '../../components/assets/RecentAssetMoves';

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
        <PortfolioCard />
        
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Your Assets</Text>
        <AssetsList />
        
        <RecentAssetMoves />
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
