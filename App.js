import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, TouchableHighlight, Touchable, Pressable } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from './src/screens/Calculator/calculator';
import Home from './src/screens/Home/home';
import Gallery from './src/screens/Gallery/gallery';
import BasicButtons from './src/screens/BasicButtons/basicbuttons';
import RPSGame from './src/screens/RockPaperScissor/RPSGame';
import BookFinder from './src/screens/BookFinder/BookFinder';
import MovieFinder from './src/screens/MovieFinder/MovieFinder.js';



export default function App() {


  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>

        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animation: "slide_from_right" ,}} />
          <Stack.Screen name="Basic Components" component={BasicButtons} options={{ headerShown: true, animation: "slide_from_right" }} />
         <Stack.Screen name="Image Gallery" component={Gallery} options={{ headerShown: true, animation: "slide_from_right" }} />
          <Stack.Screen name="Rock Paper Scissors Game" component={RPSGame} options={{ headerShown: true, animation: "slide_from_right" }} />
          <Stack.Screen name="Book Finder" component={BookFinder} options={{ headerShown: true, animation: "slide_from_right" }} />
          <Stack.Screen name="Calculator" component={Calculator} options={{ headerShown: true, animation: "slide_from_right" }} />
          <Stack.Screen name="Movie Finder" component={MovieFinder} options={{ headerShown: true, animation: "slide_from_right" }}/>
         
        </Stack.Navigator>

      </NavigationContainer>

  );
}
