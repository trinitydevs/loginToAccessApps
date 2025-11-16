import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Login from './src/Login';
import Me from './src/Me';
import Imc from './src/Imc';
import Phrases from './src/Phrases';
import Temperature from './src/Temperature';
import ToDo from './src/ToDo';
import Details from './src/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Me" component={Me}/>
        <Stack.Screen name="Imc" component={Imc}/>
        <Stack.Screen name="ToDo" component={ToDo}/>
        <Stack.Screen name="Phrases" component={Phrases}/>
        <Stack.Screen name="Temperature" component={Temperature}/>
        <Stack.Screen name="Details" component={Details}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
