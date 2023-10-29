import 'react-native-gesture-handler';
import React from 'react'
import { StackNavigator } from './src/navigation/StackNavigator';
import { AuthProvider, ProductProvider } from './src/context';


export const App = () => {
  return (
 <>
    <AuthProvider>
       <ProductProvider>
          <StackNavigator/>
       </ProductProvider>
    </AuthProvider>
 </>

  )
}



export default App;
