import 'react-native-gesture-handler';
import React, { JSXElementConstructor } from 'react'
import { StackNavigator } from './src/navigation/StackNavigator';
import { AuthProvider } from './src/context';


export const App = () => {
  return (
 <>
    <AuthProvider>
       <StackNavigator/>
    </AuthProvider>
 </>

  )
}

export default App;
