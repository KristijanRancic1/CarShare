import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './App_HomePage';
import Kamo from './App_kamo';
import DM from './App_DM';
import KadaVozim from './App_kadaVozim';
import KadaPutujem from './App_kadaPutujem';
import BackendTest from './App_backendtest'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Kamo" component={Kamo} />
        <Stack.Screen name="DM" component={DM}/>
        <Stack.Screen name="KadaVozim" component={KadaVozim}/>
        <Stack.Screen name="KadaPutujem" component={KadaPutujem}/>
        <Stack.Screen name="BackendTest" component={BackendTest}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
