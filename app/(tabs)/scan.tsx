import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useTheme } from '../../context/ThemeContext';

const { width } = Dimensions.get('window');
const frameSize = 250;

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState<boolean>(false);

  const { theme } = useTheme();

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <View style={[styles.permissionContainer, { backgroundColor: theme.background }]}>
        <View style={styles.iconCircle}>
          <Ionicons name="camera-outline" size={48} color="#0A50E4" />
        </View>
        <Text style={[styles.permissionTitle, { color: theme.text }]}>Camera Access</Text>
        <Text style={[styles.permissionText, { color: theme.textMuted }]}>
          We need access to your camera to scan QR codes for payments and transfers.
        </Text>
        <TouchableOpacity style={styles.permissionBtn} onPress={requestPermission}>
          <Text style={styles.permissionBtnText}>Enable Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => router.back()}>
          <Text style={[styles.cancelBtnText, { color: theme.textMuted }]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    Alert.alert("Scan Successful", `QR Data: ${data}`, [
      { text: "OK", onPress: () => setScanned(false) }
    ]);
  };

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing="back"
        enableTorch={flash}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.overlay}>
          {/* Top Overlay */}
          <View style={styles.topOverlay}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.iconBtn} onPress={() => router.back()}>
                <Ionicons name="close" size={28} color="#FFF" />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Scan QR Code</Text>
              <TouchableOpacity style={styles.iconBtn} onPress={() => setFlash(!flash)}>
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
      </CameraView>
    </View>
  );
}

const overlayColor = 'rgba(0,0,0,0.65)';
const cornerLength = 40;
const cornerWidth = 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
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
    color: '#0F172A',
    marginBottom: 12,
  },
  permissionText: {
    fontSize: 16,
    color: '#64748B',
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
    color: '#64748B',
    fontSize: 16,
    fontWeight: '600',
  },
});
