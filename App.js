import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image source={'assets/nature1.jpg'}/>

      <Text> Hi there</Text>
      <StatusBar style="auto" />
      <View style={styles.container}>

        <Text style={styles.button} title="Alert Button" onPress={(() => {
          Alert.alert("Alert Button is pressed!")
        })}>Alert Button</Text>

        <Text style={styles.button} title="Home Screen" onPress={(() => {
          console.log("Button to Home Screen is Pressed!")
        })}>Home Screen</Text>

        <Text style={styles.button} title="Calculator Screen" onPress={(() => {
          console.log("Button to Calculator Screen is Pressed!")
        })}>Calculator Screen</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,
  button: {
    margin: 10,
    textAlign: 'center',
    width: 200,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 16,
    borderColor: '#ed6872',
    color: '#fff',
    borderRadius: 10,
    backgroundColor: '#600047',
    shadowColor: '#ed6872',
  }
});
