import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

export function CardSettings() {
  const { theme } = useTheme();
  const [onlinePayments, setOnlinePayments] = useState(true);
  const [intlUse, setIntlUse] = useState(false);
  const [contactless, setContactless] = useState(true);

  return (
    <View style={[styles.settingsCard, { backgroundColor: theme.card }]}>
      {[
        {
          id: 'online',
          icon: 'globe-outline',
          title: 'Online Payments',
          subtitle: 'Internet transactions',
          value: onlinePayments,
          onValueChange: setOnlinePayments,
          iconLibrary: Ionicons,
        },
        {
          id: 'intl',
          icon: 'airplane-outline',
          title: 'International Use',
          subtitle: 'Transactions abroad',
          value: intlUse,
          onValueChange: setIntlUse,
          iconLibrary: Ionicons,
        },
        {
          id: 'contactless',
          icon: 'contactless-payment',
          title: 'Contactless',
          subtitle: 'Tap to pay in stores',
          value: contactless,
          onValueChange: setContactless,
          iconLibrary: MaterialCommunityIcons,
        },
      ].map((setting, index, array) => {
        const IconComp = setting.iconLibrary as any;
        return (
          <React.Fragment key={setting.id}>
            <View style={styles.settingRow}>
              <View style={styles.settingLeft}>
                <View style={[styles.settingIconCircle, { backgroundColor: theme.iconBg }]}>
                  <IconComp name={setting.icon} size={20} color={theme.iconColor} />
                </View>
                <View>
                  <Text style={[styles.settingTitle, { color: theme.text }]}>{setting.title}</Text>
                  <Text style={[styles.settingSubtitle, { color: theme.textMuted }]}>{setting.subtitle}</Text>
                </View>
              </View>
              <Switch
                value={setting.value}
                onValueChange={setting.onValueChange}
                trackColor={{ false: '#E2E8F0', true: '#2563EB' }}
                thumbColor="#FFF"
              />
            </View>
            {index < array.length - 1 && (
              <View style={[styles.divider, { backgroundColor: theme.divider }]} />
            )}
          </React.Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
