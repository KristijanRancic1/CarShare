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
import ObavijestiSelected1 from './App_Obavijest_selected_preview1';
import OvavijestiSelected2 from './App_Obavijest_selected_preview2';
import LoginTemp from './App_loginpage';
import RegisterTemp from './App_registerpage';
import DodajCilj from './App_DodajCilj';
import Postavke from './App_Postavke';
import ProšleVožnje from './App_ProšleVožnje';
import MojiPrijatelji from './App_MojiPrijatelji';
import BivšiSuvozači from './App_BivšiSuvozači';



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
        <Stack.Screen name="ObavijestiSelected1" component={ObavijestiSelected1}/>
        <Stack.Screen name="ObavijestiSelected2" component={OvavijestiSelected2}/>
        <Stack.Screen name="LoginTemp" component={LoginTemp}/>
        <Stack.Screen name="RegisterTemp" component={RegisterTemp}/>
        <Stack.Screen name="DodajCilj" component={DodajCilj}/>
        <Stack.Screen name="Postavke" component={Postavke}/>
        <Stack.Screen name="ProšleVožnje" component={ProšleVožnje}/>
        <Stack.Screen name="MojiPrijatelji" component={MojiPrijatelji}/>
        <Stack.Screen name="BivšiSuvozači" component={BivšiSuvozači}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
