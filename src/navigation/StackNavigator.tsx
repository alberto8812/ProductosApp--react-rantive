import React, { useContext } from 'react'
import { AuthContext } from '../context/authcontext/AuthContext';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, LoadingScreen, RegisterScreen, UserLoginScreen } from '../screens';

const Stack=createStackNavigator();

export const StackNavigator = () => {
  const {status}=useContext(AuthContext)

  if(status=='checking') return <LoadingScreen/>
  
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

            {
              (status!=='authenticated')
              ?(
                <>
                    <Stack.Screen name='UserLoginScreen' component={UserLoginScreen} />
                    <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
                </>
              )
              :
              ( <Stack.Screen name='HomeScreen' component={HomeScreen} />)
            }         
         </Stack.Navigator>
    </NavigationContainer>
  )
}
