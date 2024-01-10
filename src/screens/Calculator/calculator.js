import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);

  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperator = (operatorSymbol) => {
    handleNumberInput(operatorSymbol);
    setOperator(operatorSymbol);
    setFirstValue(parseFloat(displayValue));
  };

  const calculateResult = () => {
    setSecondValue(parseFloat(displayValue));
    let result = 0;
    switch (operator) {
      case '+':
        result = firstValue + secondValue;
        break;
      case '-':
        result = firstValue - secondValue;
        break;
      case 'x':
        result = firstValue * secondValue;
        break;
      case '/':
        result = firstValue / secondValue;
        break;
      case '%':
        result = firstValue % secondValue;
      default:
        break;
    }
    setDisplayValue(result.toString());
    setFirstValue(result);
    setOperator(null);
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue(null);
    setSecondValue(null);
  };

  return (

    <View style={styles.container}>

      <Text style={styles.display}>{displayValue}</Text>

      <View style={styles.buttons}>

        <View style={styles.row}>

          <TouchableOpacity onPress={handleClear} style={styles.button}>
            <Text>AC</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <Text>+/-</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => handleOperator('%')} style={styles.button}>
            <Text>%</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('/')} style={styles.button}>
            <Text>
              /</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.row}>


          <TouchableOpacity onPress={() => handleNumberInput('7')} style={styles.button}>
            <Text>7</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNumberInput('8')} style={styles.button}>
            <Text>8</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleNumberInput('9')} style={styles.button}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('x')} style={styles.button}>
            <Text>
              x</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.row}>

          <TouchableOpacity onPress={() => handleNumberInput('4')} style={styles.button}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('5')} style={styles.button}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('6')} style={styles.button}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('-')} style={styles.button}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberInput('1')} style={styles.button}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('2')} style={styles.button}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('3')} style={styles.button}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('-')} style={styles.button}>
            <Text>+</Text>
          </TouchableOpacity>

          {/* Giving a traditional calculator like look here */}
        </View>


        <View style={styles.row}>

          <TouchableOpacity onPress={() => handleNumberInput('0')} style={styles.zerobutton}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput(',')} style={styles.button}>
            <Text>,</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={calculateResult} style={styles.button}>
            <Text>=</Text>
          </TouchableOpacity>
        </View>




      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    padding: '5%',
    backgroundColor: '#fff',
  },

  display: {
    fontSize: 32,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlign: 'right',
    paddingVertical: 10,
  },

  buttons: {
    flexDirection: 'row',
    margin: 10,
    flex: 0,
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: "100%",


  },

  row: {
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-evenly',

  },

  zerobutton: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    borderRadius: 50,
    textAlign: 'center',
    margin: 10,
    height: 60,
    width: 140,
    fontSize: 26,
    fontWeight: '900',
  },

  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    borderRadius: 50,
    textAlign: 'center',
    margin: 10,
    height: 60,
    width: 60,
    fontSize: 26,
    fontWeight: '900',
  },
});
