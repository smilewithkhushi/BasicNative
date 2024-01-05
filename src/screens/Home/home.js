import { Pressable, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Button, Alert, Text, StatusBar, Image } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView >

      <View style={styles.container}>
        
      <Image
      source={{uri: 'https://images.unsplash.com/photo-1573456170607-b885fdc78985?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
      style={{width: 400, height: 250, marginBottom: 10,}}
      />

        <Text style={styles.heading}>Welcome to my first React Native App :) </Text>

        <StatusBar style="auto" animated />

        <View style={styles.btngrid}>
          <Pressable>
            {/* <Text style={styles.button} onPress={(() => {
              console.log("Button to Home Screen is Pressed!")
              navigation.navigate("Home")
            })}>Home Screen</Text> */}

            <Text style={styles.button} onPress={(() => {
              console.log("Button to Day 1 is pressed!")
              navigation.navigate("Day1")
            })}>Day 1 Learnings</Text>

            <Text style={styles.button} onPress={(() => {
              console.log("Button to Day 2 learnings is Pressed!")
            })}>Day 2 Learnings</Text>

            <Text style={styles.button} onPress={(() => {
              console.log("Button to Image Gallery is Pressed!")
              navigation.navigate("Image Gallery")
            })}>Image Gallery</Text>

            <Text style={styles.button} onPress={(() => {
              console.log("Button to Calculator is Pressed!")
              navigation.navigate("Calculator")
            })}>Calculator</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );

}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
  ,
  button: {
    textAlign: 'center',
    margin: 10,
    width: 200,
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
    color: '#624CAB',
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
    margin: 20,
    width: "100%",

  },
});

