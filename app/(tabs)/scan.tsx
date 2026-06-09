import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { router } from 'expo-router';
import { CameraPermission } from '../../components/scan/CameraPermission';
import { ScanOverlay } from '../../components/scan/ScanOverlay';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [flash, setFlash] = useState<boolean>(false);

  if (!permission) {
    return <View style={styles.container} />;
  }

  if (!permission.granted) {
    return (
      <CameraPermission 
        onRequestPermission={requestPermission} 
        onCancel={() => router.back()} 
      />
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
        <ScanOverlay 
          flash={flash} 
          onToggleFlash={() => setFlash(!flash)} 
          onClose={() => router.back()} 
        />
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
});
