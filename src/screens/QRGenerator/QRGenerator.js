import React, { useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image, TouchableOpacity, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import * as Sharing from 'expo-sharing';
import ViewShot from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

const QRCodeGenerator = () => {
  const [url, setUrl] = React.useState('');
  const [qrData, setQRData] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const qrCodeRef = useRef(null);

  const handleGenerateQR = () => {
    if (isValidUrl(url)) {
      setQRData(url);
      setModalVisible(true);
    } else {
      Alert.alert('Invalid URL', 'Please enter a valid URL');
    }
  };

  const handleDownloadQR = async () => {
    if (!qrCodeRef.current) {
      Alert.alert('Error', 'QR code not available for download.');
      return;
    }
  
    try {
      // Capture the QR code image
      const uri = await captureQRCode();
      
      // Save the QR code image to the device's file system
      const fileUri = `${FileSystem.cacheDirectory}qrcode.png`;
      console.log(fileUri)
      const test = await FileSystem.copyAsync({ from: uri, to: fileUri });
      console.log(test)
      // Prompt the user to share or save the QR code image
      await Sharing.shareAsync(fileUri, { dialogTitle: 'Save or share QR code' });
    } catch (error) {
      console.error('Error downloading QR code:', error);
      Alert.alert('Error', 'Failed to download QR code.');
    }
  };

  const captureQRCode = async () => {
    return new Promise((resolve, reject) => {
      qrCodeRef.current.capture().then(uri => {
        resolve(uri);
      }).catch(error => {
        reject(error);
      });
    });
  };


  const isValidUrl = (text) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter URL"
        value={url}
        onChangeText={setUrl}
      />
      <Button title="Generate QR" onPress={handleGenerateQR} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Image
                source={require('./close.png')} // Add your close button image here
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <ViewShot ref={qrCodeRef} options={{ format: 'jpg', quality: 1 }}>
              <QRCode value={qrData} size={200} />
            </ViewShot>
            <Button title="Download QR" onPress={handleDownloadQR} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
});

export default QRCodeGenerator;
