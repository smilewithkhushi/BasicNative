// components/List.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Reuseable component used to display instructions of preparing recipe
function List({ data }) {
  return (
    data.map((dataPoint) => (
      <View style={styles.listStyle} key={dataPoint+Math.random().toString()}>
        <Text style={styles.text}>{dataPoint}</Text>
      </View>
    ))
  );
}

export default List;

const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: '#ecd7ec',
    borderRadius: 8,
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
  },
  text: {
    color: '#f904f1',
    textAlign: 'center',
    fontSize: 15,
  },
});
