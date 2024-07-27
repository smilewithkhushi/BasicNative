import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Activate SOS Alert"
        onPress={() => navigation.navigate('SOSAlert')}
      />
    </View>
  );
};

export default HomeScreen;
