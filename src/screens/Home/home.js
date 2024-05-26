import { Pressable, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Button, Alert, Text, StatusBar, Image , Switch} from "react-native";
import { EventRegister } from 'react-native-event-listeners'
import { useState , useContext} from "react";

import themeContext from "../../Themes/ThemeProvider";



export default function Home() {
  const navigation = useNavigation();

<<<<<<< HEAD
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode]=useState(false);

  return (
    <ScrollView style={styles.mainC}>

      <View style={[styles.container, {backgroundColor:theme.backgroundColor}]}>

=======
  return (
    <ScrollView>
      <View style={styles.container}>
>>>>>>> 9e91d81855fd28719f834e7f5505828df91eb21c
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{ width: 400, height: 250, marginBottom: 10 }}
        />

<<<<<<< HEAD
        <Text style={[styles.heading, {color:theme.color}]}>Welcome to the hub of React Native Applications : </Text>
=======
        <Text style={styles.heading}>
          Welcome to the hub of React Native Applications : )
        </Text>
>>>>>>> 9e91d81855fd28719f834e7f5505828df91eb21c

        <StatusBar style="auto" animated />
        
        <View style={styles.btngrid}>
          <Pressable>
            {/* <Text style={styles.button} onPress={(() => {
              console.log("Button to Home Screen is Pressed!")
              navigation.navigate("Home")
            })}>Home Screen</Text> */}
<<<<<<< HEAD
            <View style={styles.space}>
            <Text style={styles.button} onPress={(() => {
              console.log("Button to Day 1 is pressed!")
              navigation.navigate("Basic Components")
            })}>Basic Components</Text>
=======

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Day 1 is pressed!");
                navigation.navigate("Basic Components");
              }}
            >
              Basic Components
            </Text>
>>>>>>> 9e91d81855fd28719f834e7f5505828df91eb21c

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Image Gallery is Pressed!");
                navigation.navigate("Image Gallery");
              }}
            >
              {" "}
              Image Gallery
            </Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Rock Paper Scissors Game is Pressed!");
                navigation.navigate("Rock Paper Scissors Game");
              }}
            >
              {" "}
              Rock Paper Scissors Game
            </Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Book Finder is Pressed!");
                navigation.navigate("Book Finder");
              }}
            >
              {" "}
              Book Finder
            </Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to Calculator is Pressed!");
                navigation.navigate("Calculator");
              }}
            >
              Calculator
            </Text>


            <Text style={styles.button} onPress={(() => {
              console.log("Button to Calculator is Pressed!")
              navigation.navigate("Calculator")
            })}>Calculator</Text>

<<<<<<< HEAD
      <Switch
      value={darkMode}
      onValueChange={(value)=>{ 
        setDarkMode(value);
        EventRegister.emit('ChangeTheme', value);

      }}
      />
            </View>
=======
<Text style={styles.button} onPress={(() => {
              console.log("Button to Movie Finder is Pressed!")
              navigation.navigate("Movie Finder")
            })}>Movie Finder</Text>

<Text style={styles.button} onPress={(() => {
              console.log("Button to Color Generate is Pressed!")
              navigation.navigate("Hex Color")
            })}>Color Generator</Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to To Do List is Pressed!");
                navigation.navigate("To Do List");
              }}
            >
              To Do List
            </Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to To Do List is Pressed!");
                navigation.navigate("QR Scanner");
              }}
            >
              QR Scanner
            </Text>

            <Text
              style={styles.button}
              onPress={() => {
                console.log("Button to To Do List is Pressed!");
                navigation.navigate("QR Generator");
              }}
            >
              QR Generator
            </Text>
>>>>>>> 9e91d81855fd28719f834e7f5505828df91eb21c
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 0,
<<<<<<< HEAD
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
  ,
  mainC:{
    paddingTop:100
=======
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    fontSize: 25,
>>>>>>> 9e91d81855fd28719f834e7f5505828df91eb21c
  },
  button: {
    color: "#243531",
    textAlign: "center",
    margin: 10,
    width: 230,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 15, // Font size
    borderRadius: 10,
    backgroundColor: "#61C0BF",
    // Shadow properties
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
  space:{
    marginTop:300
  },
  heading: {
    color: "#243531",
    fontWeight: "bold",
    fontSize: 22,
    padding: 8,
    textAlign: "center",
  },

  btngrid: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-evenly",
    margin: 20,
    width: "100%",
  },
});