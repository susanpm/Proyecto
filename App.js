import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1'
//import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
//import TopTabNavigator1 from './Navigations/TopTabNavigator1'
import DrawerNavigator1 from './Navigations/DrawerNavigator1';
import 'react-native-reanimated'; 
import AlumnosProvider from './Context/AlumnosContext';


export default function App() {
  return (

    
       <AlumnosProvider>
      <NavigationContainer>
        <DrawerNavigator1/>
      </NavigationContainer>
    </AlumnosProvider>
   
      
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
