import { Pressable, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Button, Alert, Text, StatusBar, Image , Switch} from "react-native";
import { EventRegister } from 'react-native-event-listeners'
import { useState , useContext} from "react";

import themeContext from "../../Themes/ThemeProvider";



export default function Home() {
  const navigation = useNavigation();

  const theme = useContext(themeContext);
  const [darkMode, setDarkMode]=useState(false);

  return (
    <ScrollView style={styles.mainC}>

      <View style={[styles.container, {backgroundColor:theme.backgroundColor}]}>

        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1573456170607-b885fdc78985?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
          style={{ width: 400, height: 250, marginBottom: 10, }}
        />

        <Text style={[styles.heading, {color:theme.color}]}>Welcome to the hub of React Native Applications : </Text>

        <StatusBar style="auto" animated />
        
        <View style={styles.btngrid}>
          <Pressable>
            {/* <Text style={styles.button} onPress={(() => {
              console.log("Button to Home Screen is Pressed!")
              navigation.navigate("Home")
            })}>Home Screen</Text> */}
            <View style={styles.space}>
            <Text style={styles.button} onPress={(() => {
              console.log("Button to Day 1 is pressed!")
              navigation.navigate("Basic Components")
            })}>Basic Components</Text>

            <Text style={styles.button} onPress={(() => {
              console.log("Button to Image Gallery is Pressed!")
              navigation.navigate("Image Gallery")
            })}> Image Gallery</Text>

            <Text style={styles.button} onPress={(() => {
              console.log("Button to Rock Paper Scissors Game is Pressed!")
              navigation.navigate("Rock Paper Scissors Game")
            })}> Rock Paper Scissors Game</Text>


            <Text style={styles.button} onPress={(() => {
              console.log("Button to Book Finder is Pressed!")
              navigation.navigate("Book Finder")
            })}> Book Finder</Text>

            <Text style={styles.button} onPress={(() => {
              console.log("Button to Calculator is Pressed!")
              navigation.navigate("Calculator")
            })}>Calculator</Text>

      <Switch
      value={darkMode}
      onValueChange={(value)=>{ 
        setDarkMode(value);
        EventRegister.emit('ChangeTheme', value);

      }}
      />
            </View>
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
  mainC:{
    paddingTop:100
  },
  button: {
    textAlign: 'center',
    margin: 10,
    width: 230,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontSize: 16,
    borderColor: '#ed6872',
    color: '#fff',
    borderRadius: 10,
    backgroundColor: '#600047',
    shadowColor: '#ed6872',
  },
  space:{
    marginTop:300
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