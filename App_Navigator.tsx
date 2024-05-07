import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './App_HomePage';
import Kamo from './App_kamo';
import DM from './App_DM';
import KadaVozim from './App_kadaVozim';
import KadaPutujem from './App_kadaPutujem';
import BackendTest from './App_backendtest';
import Obavijesti from './App_Obavijesti';
import Event from './App_Eventi';
import Statistika from './App_Statistika';
import MojProfil from './App_Profil';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation:'fade'}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Kamo" component={Kamo} />
        <Stack.Screen name="DM" component={DM}/>
        <Stack.Screen name="KadaVozim" component={KadaVozim}/>
        <Stack.Screen name="KadaPutujem" component={KadaPutujem}/>
        <Stack.Screen name="BackendTest" component={BackendTest}/>
        <Stack.Screen name="Obavijesti" component={Obavijesti}/>
        <Stack.Screen name="Event" component={Event}/>
        <Stack.Screen name="Statistika" component={Statistika}/>
        <Stack.Screen name="MojProfil" component={MojProfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
