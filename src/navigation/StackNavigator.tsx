import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterScreen, UserLoginScreen } from '../screens';

const Stack=createStackNavigator();

export const StackNavigator = () => {
  return (
    <NavigationContainer
     
    >
         <Stack.Navigator
           screenOptions={{
            headerShown:false,
            cardStyle:{
                backgroundColor:'white'
            }
           }}
         >
            <Stack.Screen name='UserLoginScreen' component={UserLoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
         </Stack.Navigator>
    </NavigationContainer>
  )
}
