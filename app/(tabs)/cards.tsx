import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export default function CardsScreen() {
  const { theme } = useTheme();
  const [onlinePayments, setOnlinePayments] = useState(true);
  const [intlUse, setIntlUse] = useState(false);
  const [contactless, setContactless] = useState(true);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.background }]}>
        <Ionicons name="wallet-outline" size={24} color={theme.headerIcon} />
        <Text style={[styles.headerTitle, { color: theme.headerIcon }]}>SecureVault</Text>
        <Ionicons name="notifications-outline" size={24} color={theme.headerIcon} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={[styles.pageTitle, { color: theme.text }]}>My Cards</Text>
          <Text style={[styles.pageSubtitle, { color: theme.textMuted }]}>Manage your virtual and physical cards</Text>
        </View>

        {/* Card Carousel (Mocked as single card for now) */}
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

        {/* Action Buttons */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.card }]}>
            <View style={[styles.actionIconCircle, { backgroundColor: theme.iconBg }]}>
              <Ionicons name="eye-outline" size={24} color={theme.iconColor} />
            </View>
            <Text style={[styles.actionText, { color: theme.text }]}>Show{"\n"}Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.card }]}>
            <View style={[styles.actionIconCircle, { backgroundColor: theme.iconBg }]}>
              <MaterialCommunityIcons name="numeric" size={24} color={theme.iconColor} />
            </View>
            <Text style={[styles.actionText, { color: theme.text }]}>Reset{"\n"}PIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: theme.card }]}>
            <View style={[styles.actionIconCircle, { backgroundColor: '#FEE2E2' }]}>
              <Ionicons name="snow-outline" size={24} color="#DC2626" />
            </View>
            <Text style={[styles.actionText, { color: '#DC2626' }]}>Freeze{"\n"}Card</Text>
          </TouchableOpacity>
        </View>

        {/* Card Settings */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Card Settings</Text>
        <View style={[styles.settingsCard, { backgroundColor: theme.card }]}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={[styles.settingIconCircle, { backgroundColor: theme.iconBg }]}>
                <Ionicons name="globe-outline" size={20} color={theme.iconColor} />
              </View>
              <View>
                <Text style={[styles.settingTitle, { color: theme.text }]}>Online Payments</Text>
                <Text style={[styles.settingSubtitle, { color: theme.textMuted }]}>Internet transactions</Text>
              </View>
            </View>
            <Switch
              value={onlinePayments}
              onValueChange={setOnlinePayments}
              trackColor={{ false: '#E2E8F0', true: '#2563EB' }}
              thumbColor="#FFF"
            />
          </View>
          
          <View style={[styles.divider, { backgroundColor: theme.divider }]} />

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={[styles.settingIconCircle, { backgroundColor: theme.iconBg }]}>
                <Ionicons name="airplane-outline" size={20} color={theme.iconColor} />
              </View>
              <View>
                <Text style={[styles.settingTitle, { color: theme.text }]}>International Use</Text>
                <Text style={[styles.settingSubtitle, { color: theme.textMuted }]}>Transactions abroad</Text>
              </View>
            </View>
            <Switch
              value={intlUse}
              onValueChange={setIntlUse}
              trackColor={{ false: '#E2E8F0', true: '#2563EB' }}
              thumbColor="#FFF"
            />
          </View>

          <View style={[styles.divider, { backgroundColor: theme.divider }]} />

          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={[styles.settingIconCircle, { backgroundColor: theme.iconBg }]}>
                <MaterialCommunityIcons name="contactless-payment" size={20} color={theme.iconColor} />
              </View>
              <View>
                <Text style={[styles.settingTitle, { color: theme.text }]}>Contactless</Text>
                <Text style={[styles.settingSubtitle, { color: theme.textMuted }]}>Tap to pay in stores</Text>
              </View>
            </View>
            <Switch
              value={contactless}
              onValueChange={setContactless}
              trackColor={{ false: '#E2E8F0', true: '#2563EB' }}
              thumbColor="#FFF"
            />
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
  titleSection: {
    marginBottom: 24,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 14,
  },
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
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  actionBtn: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  actionIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionText: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingsCard: {
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  settingIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 13,
  },
  divider: {
    height: 1,
    marginVertical: 8,
    marginLeft: 56, // Align with text
  },
});
