import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HexColorGeneratorScreen = () => {
  // State to store the current color
  const [color, setColor] = useState('#FFFFFF'); // Initial color

  // function to randomly generate the color using Math.random()
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };


  // function to convert hex -> rgb
  const hexToRgb = (hex) => {
    const hexNumber = parseInt(hex.slice(1), 16);
    const r = (hexNumber >> 16) & 255;
    const g = (hexNumber >> 8) & 255;
    const b = hexNumber & 255;
    return `rgb(${r}, ${g}, ${b})`;
  };


 // function to convert hex -> rgba
  const hexToRgba = (hex) => {
    const hexNumber = parseInt(hex.slice(1), 16);
    const r = (hexNumber >> 16) & 255;
    const g = (hexNumber >> 8) & 255;
    const b = hexNumber & 255;
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  return (
    //code to show and style the container and the details regarding the colors beign randomly shown.
    <View style={styles.container}>
      <Text style={{fontWeight:'700',fontSize:28,marginBottom:15,textDecorationLine:'underline'}}>COLOR GENERATOR</Text>
      <Text style={styles.colorText}>HEX CODE: {color}</Text>
      <Text style={styles.colorText}>RGB CODE: {hexToRgb(color)}</Text>
      <Text style={styles.colorText}>RGBA CODE: {hexToRgba(color)}</Text>
      <TouchableOpacity style={[styles.colorBox, { backgroundColor: color }]} onPress={generateRandomColor}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={generateRandomColor}>
        <Text style={styles.buttonText}>GENERATE COLOR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBox: {
    width: 350,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    margin: 10,
  },
  colorText: {
    fontSize: 17,
    color: 'black',
    marginBottom: 10,
    fontWeight:'500'
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: 290,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default HexColorGeneratorScreen;
