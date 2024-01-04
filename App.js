import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, TouchableHighlight, Touchable, Pressable } from 'react-native';
import { useState } from 'react';
import { Counter } from './src/components/Counter'

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>

      <Image
        source={require('./assets/nature1.jpg')}
        style={{ width: 500, height: 280, marginBottom: 10, }}
      />

      <Text style={styles.heading}>Welcome to my first React Native App :) </Text>

      <StatusBar style="auto" />

      <View style={styles.list}>

        <TouchableHighlight>
          <Text style={styles.items}>Displaying Touchable Highlight</Text>
        </TouchableHighlight>

        <Pressable>
          <Text style={styles.items}>Pressable Text</Text>
        </Pressable>

        <TouchableOpacity>
          <Text style={styles.items}>Displaying Touchable Opacity</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.btngrid}>
        <Text style={styles.button} title="Alert Button" onPress={(() => {
          Alert.alert("Alert Button is pressed!")
        })}>Alert Button</Text>

        <Text style={styles.button} title="Home Screen" onPress={(() => {
          console.log("Button to Home Screen is Pressed!")
        })}>Home Screen</Text>

        <Text style={styles.button} title="Calculator" onPress={(() => {
          console.log("Button to Calculator Screen is Pressed!")
        })}>Nothing</Text>
      </View>

      <Text style={{ padding: 4, marginTop: 6, fontSize: 20, color: '#E2294F', fontWeight: "bold", }}> Press the buttons to change the count! </Text>
      <Text style={styles.heading}>Count : {count}</Text>

      <View style={styles.btngrid}>
        <Button title="Increment" style={{ padding: 6, }} onPress={() => { setCount(count + 1) }} />
        <Button title="Decrement" style={{ padding: 6, }} onPress={() => { setCount(count - 1) }} />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  button: {
    textAlign: 'center',
    margin: 8,
    width: 150,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 16,
    borderColor: '#ed6872',
    color: '#fff',
    borderRadius: 10,
    backgroundColor: '#600047',
    shadowColor: '#ed6872',
  },
  heading: {
    color: '#600047',
    fontWeight: "bold",
    fontSize: 22,
    padding: 8,
    textAlign: 'center',
  },

  btngrid: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    margin: 10,
    width: 400,

  },

  list: {
    flex: 0,
    flexDirection: 'column',
    width: 380,
    paddingHorizontal: 20,
    margin: 10,
  },

  items: {
    margin: 2,
    fontSize: 16,
  }
});
