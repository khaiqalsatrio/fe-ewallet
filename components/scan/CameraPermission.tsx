import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../context/ThemeContext';

interface CameraPermissionProps {
  onRequestPermission: () => void;
  onCancel: () => void;
}

export function CameraPermission({ onRequestPermission, onCancel }: CameraPermissionProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.permissionContainer, { backgroundColor: theme.background }]}>
      <View style={styles.iconCircle}>
        <Ionicons name="camera-outline" size={48} color="#0A50E4" />
      </View>
      <Text style={[styles.permissionTitle, { color: theme.text }]}>Camera Access</Text>
      <Text style={[styles.permissionText, { color: theme.textMuted }]}>
        We need access to your camera to scan QR codes for payments and transfers.
      </Text>
      <TouchableOpacity style={styles.permissionBtn} onPress={onRequestPermission}>
        <Text style={styles.permissionBtnText}>Enable Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
        <Text style={[styles.cancelBtnText, { color: theme.textMuted }]}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 24,
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  permissionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  permissionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  permissionBtn: {
    backgroundColor: '#0A50E4',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  permissionBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelBtn: {
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
  },
  cancelBtnText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
