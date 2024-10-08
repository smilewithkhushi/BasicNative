import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SOSAlertScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>SOS Alert Screen</Text>
      {/* Add SOS alert UI and logic here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SOSAlertScreen;
