import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { AuthContext } from '../context/authcontext/AuthContext'

export const HomeScreen = () => {
  const {user,logout}= useContext(AuthContext);
  return (
    <View style={styles.container}>
       <Text style={styles.title}>
            Protecte Screen
        </Text> 
        <TouchableOpacity
         activeOpacity={0.8}
         style={styles.buttonLogOut}
         onPress={()=>logout()}
        >
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>

        <Text>{JSON.stringify(user,null,5)}</Text>
    </View>
  )
}


const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:20,
    marginBottom:20
  },
  buttonLogOut:{
    borderWidth:2,
    borderColor:'black',
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:100
  },
  buttonText:{
    fontSize:18,
    color:'black'
}
})
