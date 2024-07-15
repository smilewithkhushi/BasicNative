// App.js
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase config here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    // Check if the user is already signed in
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        console.log('User is signed in: ', user.uid);
      } else {
        // No user is signed in
        console.log('No user signed in');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Define your app screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
