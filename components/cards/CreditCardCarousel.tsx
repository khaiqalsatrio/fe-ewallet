import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function CreditCardCarousel() {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.creditCard}>
        <View style={styles.cardTop}>
          <Text style={styles.cardLogo}>SecureVault</Text>
          <View style={styles.nfcIcon}>
            <MaterialCommunityIcons name="contactless-payment" size={16} color="#FFF" />
          </View>
        </View>

        <View style={styles.cardNumberContainer}>
          <View style={styles.dotGroup}>
            <View style={styles.dot} /><View style={styles.dot} /><View style={styles.dot} /><View style={styles.dot} />
          </View>
          <View style={styles.dotGroup}>
            <View style={styles.dot} /><View style={styles.dot} /><View style={styles.dot} /><View style={styles.dot} />
          </View>
          <View style={styles.dotGroup}>
            <View style={styles.dot} /><View style={styles.dot} /><View style={styles.dot} /><View style={styles.dot} />
          </View>
          <Text style={styles.cardNumberLast4}>4289</Text>
        </View>

        <View style={styles.cardBottom}>
          <View>
            <Text style={styles.cardLabel}>CARDHOLDER</Text>
            <Text style={styles.cardValue}>ALEX JENKINS</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.cardLabel}>EXPIRES</Text>
            <Text style={styles.cardValue}>12/28</Text>
          </View>
        </View>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        <View style={[styles.pageDot, styles.pageDotActive]} />
        <View style={styles.pageDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  creditCard: {
    width: '100%',
    backgroundColor: '#0F172A',
    borderRadius: 20,
    padding: 24,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  cardLogo: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nfcIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    gap: 16,
  },
  dotGroup: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#94A3B8',
  },
  cardNumberLast4: {
    color: '#FFF',
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: '500',
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardLabel: {
    color: '#94A3B8',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardValue: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  pageDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#CBD5E1',
  },
  pageDotActive: {
    backgroundColor: '#0F172A',
  },
});
