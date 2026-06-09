import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ScanOverlayProps {
  flash: boolean;
  onToggleFlash: () => void;
  onClose: () => void;
}

const { width } = Dimensions.get('window');
const frameSize = 250;
const overlayColor = 'rgba(0,0,0,0.65)';
const cornerLength = 40;
const cornerWidth = 4;

export function ScanOverlay({ flash, onToggleFlash, onClose }: ScanOverlayProps) {
  return (
    <View style={styles.overlay}>
      {/* Top Overlay */}
      <View style={styles.topOverlay}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn} onPress={onClose}>
            <Ionicons name="close" size={28} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Scan QR Code</Text>
          <TouchableOpacity style={styles.iconBtn} onPress={onToggleFlash}>
            <Ionicons name={flash ? "flash" : "flash-off"} size={24} color={flash ? "#FBBF24" : "#FFF"} />
          </TouchableOpacity>
        </View>
        <Text style={styles.instructionText}>Align QR code within the frame to scan</Text>
      </View>

      {/* Middle Row with transparent frame */}
      <View style={styles.middleRow}>
        <View style={styles.sideOverlay} />
        <View style={styles.focusFrame}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>
        <View style={styles.sideOverlay} />
      </View>

      {/* Bottom Overlay */}
      <View style={styles.bottomOverlay}>
        <TouchableOpacity style={styles.footerBtn}>
          <Ionicons name="image-outline" size={24} color="#FFF" />
          <Text style={styles.footerBtnText}>Upload from Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  topOverlay: {
    flex: 1,
    backgroundColor: overlayColor,
    paddingTop: 60,
    alignItems: 'center',
  },
  middleRow: {
    flexDirection: 'row',
    height: frameSize,
  },
  sideOverlay: {
    flex: 1,
    backgroundColor: overlayColor,
  },
  focusFrame: {
    width: frameSize,
    height: frameSize,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  bottomOverlay: {
    flex: 1,
    backgroundColor: overlayColor,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  instructionText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.8,
  },
  corner: {
    position: 'absolute',
    borderColor: '#3B82F6',
  },
  topLeft: {
    top: 0,
    left: 0,
    width: cornerLength,
    height: cornerLength,
    borderTopWidth: cornerWidth,
    borderLeftWidth: cornerWidth,
    borderTopLeftRadius: 16,
  },
  topRight: {
    top: 0,
    right: 0,
    width: cornerLength,
    height: cornerLength,
    borderTopWidth: cornerWidth,
    borderRightWidth: cornerWidth,
    borderTopRightRadius: 16,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    width: cornerLength,
    height: cornerLength,
    borderBottomWidth: cornerWidth,
    borderLeftWidth: cornerWidth,
    borderBottomLeftRadius: 16,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    width: cornerLength,
    height: cornerLength,
    borderBottomWidth: cornerWidth,
    borderRightWidth: cornerWidth,
    borderBottomRightRadius: 16,
  },
  footerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 30,
    gap: 8,
  },
  footerBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
