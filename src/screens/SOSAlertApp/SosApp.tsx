
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SOSAlertScreen from './SOSAlertScreen';

type RootStackParamList = {
  Home: undefined;
  SOSAlert: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SOSAlert" component={SOSAlertScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
