import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Registrar from '../Screens/Registrar';
import Login from '../Screens/Login';
import addServicio from '../Screens/addServicio';
import Servicio from '../Screens/Servicios';

const Stack = createStackNavigator();

export default function StackNavigation1() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{ 
                    headerShown: false, 
                    headerTitle: 'back',
                   
                }}
            />

            <Stack.Screen name="Registrar" component={Registrar}
                options={{
                    headerStyle: {
                        
                        backgroundColor: 'chocolate',
                        borderBottomColor: 'black',
                        borderBottomWidth: 3

                    },
                    headerTitleStyle: {
                        color: 'black',
                        textAlign: 'center'
                    }

                }}
            />

            <Stack.Screen name="Login" component={Login} 
                options={{
                   
                    title: 'Clientes',
                    headerStyle: {
                        
                        backgroundColor: 'chocolate',
                        borderBottomColor: 'black',
                        borderBottomWidth: 3

                    },
                    headerTitleStyle: {
                        
                        color: 'black',
                        textAlign: 'center'
                      
                    }

                }}
            />
            
            
        

        </Stack.Navigator>

    )
}