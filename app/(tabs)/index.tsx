import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '@/components/home/Header';
import { BalanceCard } from '@/components/home/BalanceCard';
import { ActionButtons } from '@/components/home/ActionButtons';
import { SpecialOffers } from '@/components/home/SpecialOffers';
import { RecentActivity } from '@/components/home/RecentActivity';
import { useTheme } from '@/context/ThemeContext';

export default function HomeScreen() {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BalanceCard />
        <ActionButtons />
        <SpecialOffers />
        <RecentActivity />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
