import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export function MenuList() {
  const { isDarkMode, setIsDarkMode, theme } = useTheme();

  return (
    <View style={[styles.menuCard, { backgroundColor: theme.card }]}>
      {/* Dark Mode Toggle */}
      <View style={styles.menuItem}>
        <View style={styles.menuItemLeft}>
          <View style={[styles.menuIconCircle, { backgroundColor: theme.iconBg }]}>
            <Ionicons name={isDarkMode ? "moon" : "moon-outline"} size={20} color={theme.iconColor} />
          </View>
          <Text style={[styles.menuItemText, { color: theme.text }]}>Dark Mode</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
          thumbColor="#FFF"
        />
      </View>

      <View style={[styles.divider, { backgroundColor: theme.divider }]} />

      {[
        { id: 'info', title: 'Personal Information', icon: 'person-outline' },
        { id: 'security', title: 'Security & PIN', icon: 'lock-closed-outline' },
        { id: 'notifications', title: 'Notification Settings', icon: 'notifications-outline' },
        { id: 'help', title: 'Help & Support', icon: 'help-circle-outline' },
      ].map((item, index, array) => (
        <React.Fragment key={item.id}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIconCircle, { backgroundColor: theme.iconBg }]}>
                <Ionicons name={item.icon as any} size={20} color={theme.iconColor} />
              </View>
              <Text style={[styles.menuItemText, { color: theme.text }]}>{item.title}</Text>
            </View>
            <Feather name="chevron-right" size={20} color={theme.textMuted} />
          </TouchableOpacity>
          {index < array.length - 1 && (
            <View style={[styles.divider, { backgroundColor: theme.divider }]} />
          )}
        </React.Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menuCard: {
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  menuIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: '500',
  },
  divider: {
    height: 1,
  },
});
