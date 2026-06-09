import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export function SpecialOffers() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Exclusive Offers</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, { backgroundColor: '#0B132B' }]}>
          <Text style={styles.cardSubtitle}>CASHBACK</Text>
          <Text style={styles.cardTitle}>5% Off Daily Coffee</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#3B82F6' }]}>
          <Text style={styles.cardSubtitle}>Investment</Text>
          <Text style={styles.cardTitle}>Grow Your Wealth</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A2235',
  },
  seeAll: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: 20,
    gap: 16,
  },
  card: {
    width: 280,
    height: 140,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
  },
  cardSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    marginBottom: 4,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
