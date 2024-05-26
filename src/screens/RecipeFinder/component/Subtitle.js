// components/Subtitle.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleStyle}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleStyle: {
    marginVertical: 4,
    borderBottomWidth: 3,
    borderBottomColor: '#de8ddc',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
});
