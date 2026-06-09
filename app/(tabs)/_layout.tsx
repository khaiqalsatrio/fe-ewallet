import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

function TabIcon({ focused, icon, label, IconComponent = Feather }: { focused: boolean, icon: string, label: string, IconComponent?: any }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: 60 }}>
      <IconComponent name={icon} size={24} color={focused ? '#000000' : '#9CA3AF'} />
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          color: focused ? '#000000' : '#9CA3AF',
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
  return (
    <View style={{ alignItems: 'center', justifyContent: 'flex-start', width: 60, height: 70 }}>
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: '#000000',
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
        <MaterialCommunityIcons name="qrcode-scan" size={24} color="#FFFFFF" />
      </View>
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          color: '#9CA3AF',
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
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 92 : 80,
          paddingTop: 8,
          paddingBottom: Platform.OS === 'ios' ? 32 : 16,
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          borderTopColor: '#F1F5F9',
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
