// components/RecipeInfo.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function RecipeInfo({  duration, complexity }) {
  return (
    <View style={styles.details}>
    { duration && <Text style={styles.detailItem}>{duration}m,</Text> }
     { complexity &&<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text> }
    </View>
  );
}

export default RecipeInfo;

const styles = StyleSheet.create({
  details: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  detailItem: {
    textTransform:"capitalize",
    fontSize: 15,
  },
});
