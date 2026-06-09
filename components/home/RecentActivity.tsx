import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const activities = [
  {
    id: '1',
    title: 'Apple Store',
    subtitle: 'Subscription',
    amount: '-$9.99',
    time: '2h ago',
    icon: 'bag-handle-outline',
    color: '#FEE2E2',
    iconColor: '#DC2626',
    amountColor: '#1A2235',
  },
  {
    id: '2',
    title: 'David Wilson',
    subtitle: 'Transfer received',
    amount: '+$450.00',
    time: 'Yesterday',
    icon: 'wallet-outline',
    color: '#D1FAE5',
    iconColor: '#059669',
    amountColor: '#059669',
  },
  {
    id: '3',
    title: 'Shell Fuel',
    subtitle: 'Transport',
    amount: '-$45.20',
    time: 'Mar 12',
    icon: 'car-outline',
    color: '#E0E7FF',
    iconColor: '#4F46E5',
    amountColor: '#1A2235',
  },
];

export function RecentActivity() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Activity</Text>
        <Ionicons name="filter" size={20} color="#1A2235" />
      </View>
      <View style={styles.list}>
        {activities.map((item) => (
          <View key={item.id} style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <Ionicons name={item.icon as any} size={24} color={item.iconColor} />
              </View>
              <View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
              </View>
            </View>
            <View style={styles.itemRight}>
              <Text style={[styles.amount, { color: item.amountColor }]}>{item.amount}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A2235',
  },
  list: {
    gap: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A2235',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 13,
    color: '#64748B',
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#64748B',
  },
});
