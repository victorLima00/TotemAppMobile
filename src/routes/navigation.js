import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../screens/login/login';
import Registro from '../screens/registro/registro';
import Home from '../screens/home/home';
import Empresa from '../screens/empresa/empresa';

const Stack = createStackNavigator();


export default Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false, animationEnabled: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registro" component={Registro} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Empresa" component={Empresa} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};