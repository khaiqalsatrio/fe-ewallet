import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

function TabIcon({ focused, icon, label, IconComponent = Feather }: { focused: boolean, icon: string, label: string, IconComponent?: any }) {
  const { theme } = useTheme();
  const color = focused ? theme.navActive : theme.navInactive;
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: 60 }}>
      <IconComponent name={icon} size={24} color={color} />
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          color: color,
          marginTop: 4,
          letterSpacing: 0.5,
        }}
      >
        {label}
      </Text>
    </View>
  );
}

function ScanTabIcon() {
  const { theme } = useTheme();
  return (
    <View style={{ alignItems: 'center', justifyContent: 'flex-start', width: 60, height: 70 }}>
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: theme.navActive,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -20, // Float above the tab bar
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <MaterialCommunityIcons name="qrcode-scan" size={24} color={theme.navBg} />
      </View>
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          color: theme.navInactive,
          marginTop: 6,
          letterSpacing: 0.5,
        }}
      >
        SCAN
      </Text>
    </View>
  );
}

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 92 : 80,
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 32 : 16,
          backgroundColor: theme.navBg,
          borderTopWidth: 1,
          borderTopColor: theme.navBorder,
          elevation: 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="home" label="HOME" />,
        }}
      />
      <Tabs.Screen
        name="assets"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="wallet" label="ASSETS" IconComponent={MaterialCommunityIcons} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          tabBarIcon: () => <ScanTabIcon />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="credit-card" label="CARDS" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="user" label="USER" />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          href: null, // Hide from tab bar
        }}
      />
    </Tabs>
  );
}
