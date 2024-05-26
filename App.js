import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from './src/screens/Calculator/calculator';
import Home from './src/screens/Home/home';
import Gallery from './src/screens/Gallery/gallery';
import BasicButtons from './src/screens/BasicButtons/basicbuttons';
import RPSGame from './src/screens/RockPaperScissor/RPSGame';
import BookFinder from './src/screens/BookFinder/BookFinder';

import { EventRegister } from 'react-native-event-listeners'
import React, {useEffect, useState} from 'react';



// for applying dark theme
import theme from './src/Themes/Colors';
import themeContext from './src/Themes/ThemeProvider';

export default function App() {
  const Stack = createNativeStackNavigator();

  const [darkMode, setDarkMode]=useState(false);

  useEffect(()=>{
    const listener=EventRegister.addEventListener('ChangeTheme', (data)=>{
      setDarkMode(data)
    })
    return ()=>{
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode]);

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode===true ? DarkTheme : DefaultTheme}>

        {/* <Provider store={store}> */}

        <Stack.Screen
        name="Movie Finder"
        component={MovieFinder}
        options={{ headerShown: true, animation: "slide_from_right" }}
        />

        {/* </Provider> */}

      </NavigationContainer>

      </themeContext.Provider>

  );
}