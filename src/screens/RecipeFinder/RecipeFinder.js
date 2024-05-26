// App.js
import React from 'react';
import { FavoritesProvider } from './context/favourite-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';


const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator()

const DrawerNavigator=()=>{
    return (
        <Drawer.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor:'#ef0b90',
            },
            headerTintColor:"white",
            headerTitleAlign:"center",
            contentStyle:{
              backgroundColor:"#e9c3ec"
            }
          }}
        >
            <Drawer.Screen name="Home Screen"  component={HomeScreen} options={{
                title:"Recipe Finder",
                headerTitleAlign:"center"
            }
            
            }/>
            <Drawer.Screen name="Favourite Screen" component={FavouritesScreen}/>
        </Drawer.Navigator>
    )
}
const AppNavigator=()=>{
    return (
      <Stack.Navigator >
        <Stack.Screen name='Drawer Screen' component={DrawerNavigator} options={{
            headerShown:false
        }}/>
        <Stack.Screen name='RecipeDetail' component={RecipeDetailScreen} options={{
            headerTitleAlign:"center",
            headerStyle:{
                backgroundColor:'#ef0b90',
            },
            headerTintColor:"white",
            headerTitleAlign:"center",
            contentStyle:{
              backgroundColor:"#e9c3ec"
            }
        }}/>
      </Stack.Navigator>
    );
}
export default function RecipeFinder() {
  return (
    <FavoritesProvider>
       <AppNavigator />
    </FavoritesProvider>
  );
}
