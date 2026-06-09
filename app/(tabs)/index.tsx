import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Header } from '@/components/home/Header';
import { BalanceCard } from '@/components/home/BalanceCard';
import { ActionButtons } from '@/components/home/ActionButtons';
import { SpecialOffers } from '@/components/home/SpecialOffers';
import { RecentActivity } from '@/components/home/RecentActivity';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
    backgroundColor: '#F8FAFC',
  },
});
