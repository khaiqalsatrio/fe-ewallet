import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';
import { CreditCardCarousel } from '../../components/cards/CreditCardCarousel';
import { CardActions } from '../../components/cards/CardActions';
import { CardSettings } from '../../components/cards/CardSettings';

export default function CardsScreen() {
  const { theme } = useTheme();

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

        <CreditCardCarousel />
        
        <CardActions />

        <Text style={[styles.sectionTitle, { color: theme.text }]}>Card Settings</Text>
        <CardSettings />

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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
