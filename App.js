import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Telas/Login'; 
import Regristoscreen from './Telas/Registro';
import Home from './Telas/HomeScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registro" component={Regristoscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;