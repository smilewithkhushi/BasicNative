import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, TouchableHighlight, Touchable, Pressable } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from './src/screens/Calculator/calculator';
import Home from './src/screens/Home/home';
import Gallery from './src/screens/Gallery/gallery';
import DayOne from './src/screens/DayOne/dayone';

export default function App() {


  const Stack = createNativeStackNavigator();
  return (
    <View>
      <NavigationContainer>

        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: true, animation: "fade" }} />
          <Stack.Screen name="Day 1" component={DayOne} options={{ headerShown: true, animation: "fade" }} />
         
          <Stack.Screen name="Calculator" component={Calculator} options={{ headerShown: true, animation: "fade" }} />
          <Stack.Screen name="Image Gallery" component={Gallery} options={{ headerShown: true, animation: "fade" }} />

        </Stack.Navigator>

      </NavigationContainer>

    </View>

  );
}
