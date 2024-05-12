import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from 'react';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('');
  const [expression, setExpression] = useState('');

  const handleNumberInput = (num) => {
    setDisplayValue(displayValue + num);
    setExpression(expression + num);
  };

  const handleOperator = (operatorSymbol) => {
    setDisplayValue(displayValue + operatorSymbol);
    setExpression(expression + ' ' + operatorSymbol + ' ');
  };

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setDisplayValue(result.toString());
      setExpression('');
    } catch (error) {
      setDisplayValue('Error');
      setExpression('');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
    setExpression('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity onPress={handleClear} style={[styles.button, styles.clearButton]}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('/')} style={styles.button}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberInput('7')} style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('8')} style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('9')} style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('x')} style={styles.button}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberInput('4')} style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('5')} style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('6')} style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('-')} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberInput('1')} style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('2')} style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('3')} style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperator('+')} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberInput('0')} style={[styles.button, styles.doubleButton]}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput('.')} style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={calculateResult} style={[styles.button, styles.equalButton]}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
  clearButton: {
    backgroundColor: '#FF6347', // Red color for C
  },
  doubleButton: {
    width: 165,
  },
  equalButton: {
    backgroundColor: '#FFA500', // Orange color for =
  },
  buttonText: {
    fontSize: 24,
  },
});
