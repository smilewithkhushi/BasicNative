import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { BarCodeScanner } from 'expo-barcode-scanner';

const QRScanner = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [qrData, setQRData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const handleTakePicture = async () => {
    setQRData(null)
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      const { assets } = result;
      if (assets && assets.length > 0) {
        setImage(assets[0].uri);
        detectQRCode(assets[0].uri);
      }
    }
  };
  
  const handleUploadImage = async () => {
    setQRData(null)
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      const { assets } = result;
      if (assets && assets.length > 0) {
        setImage(assets[0].uri);
        detectQRCode(assets[0].uri);
      }
    }
  };
  
  const detectQRCode = async (uri) => {
    try {
      const result = await BarCodeScanner.scanFromURLAsync(uri);
      if (result.length) {
        setQRData(result[0].data);
      }else{
        throw "No a QR"
      }
    } catch (error) {
      console.log('Error detecting QR code:', error);
    }
  };

  const handleOpenURL = () => {
    if (qrData) {
      Linking.openURL(qrData);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Take Picture" onPress={handleTakePicture} />
        <Button title="Upload" onPress={handleUploadImage} />
      </View>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {qrData && (
        <View style={styles.qrDataContainer}>
          <Text style={styles.qrDataText}>QR Code Data: {qrData}</Text>
          <TouchableOpacity onPress={handleOpenURL}>
            <Text style={styles.openURLButton}>Open URL</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 20
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  qrDataContainer: {
    alignItems: 'center',
  },
  qrDataText: {
    fontSize: 18,
    marginBottom: 10,
  },
  openURLButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default QRScanner;
