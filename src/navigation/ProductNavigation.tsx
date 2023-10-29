import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { View } from 'react-native'
import { PorductScreen, ProductsScreen } from '../screens';

export type ProductsStack={
    ProductsScreen:undefined,
    PorductScreen:{id?:string,name?:string}
}



const Stack=createStackNavigator<ProductsStack>();

export const ProductNavigation = () => {
  return (
   <Stack.Navigator
    screenOptions={{
        cardStyle:{
            backgroundColor:'white',
        },
        headerStyle:{
            elevation:0,
            shadowColor:'transparent'
        }
    }}
   >
     <Stack.Screen name='ProductsScreen'  options={{title:'Productos'}} component={ProductsScreen}/>
     <Stack.Screen name='PorductScreen'  component={PorductScreen}/>
   </Stack.Navigator>
  )
}
