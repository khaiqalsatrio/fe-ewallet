import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export function CardActions() {
  const { theme } = useTheme();

  return (
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
  );
}

const styles = StyleSheet.create({
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
});
