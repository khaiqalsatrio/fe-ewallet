import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function TabIcon({ focused, icon, label }: { focused: boolean, icon: string, label: string }) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: focused ? '#E2E8F0' : 'transparent',
        minWidth: 60,
      }}
    >
      <Ionicons name={icon as any} size={20} color={focused ? '#1E293B' : '#64748B'} />
      <Text
        style={{
          fontSize: 11,
          fontWeight: focused ? 'bold' : '600',
          color: focused ? '#1E293B' : '#64748B',
          marginTop: 2,
        }}
      >
        {label}
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
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="home" label="Home" />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="time-outline" label="History" />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="card-outline" label="Cards" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon="person-outline" label="Profile" />,
        }}
      />
    </Tabs>
  );
}
