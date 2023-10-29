import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useEffect, useState } from 'react'
import { StyleSheet, Text, View,ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { ProductsStack } from '../navigation/ProductNavigation'
import { BackGround } from '../components'
import {Picker} from '@react-native-picker/picker';
import { useCategory } from '../hook'



interface Props extends StackScreenProps <ProductsStack,'PorductScreen' | 'ProductsScreen'>{
  
}


export const PorductScreen:FC <Props> = ({navigation,route}) => {

  const {id,name=''}=route.params;
  const [selectedLanguage, setSelectedLanguage] = useState();
  const {Categories}=useCategory();



  useEffect(() => {
     navigation.setOptions({
      headerTitle:(name)?name:'Nuevo producto',
      headerTitleAlign:'center',

     })
     
  }, [])
  

  return (
    <View style={styles.container}>
             {/* BACKGROUND */}
             <BackGround/>
      <ScrollView>

          <Text style={styles.label}>Nombre del producto: </Text>
          <TextInput
          style={styles.textInput}
          placeholder='Producto'
          placeholderTextColor="rgba(255,255,255,0.4)"
          selectionColor='white'
        
          />

          <Text style={styles.label}>Seleccionar categoria: </Text>

          <Picker
            selectedValue={selectedLanguage}
            style={{
              backgroundColor:'white',
              borderRadius:100
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
              {
                Categories.map((data)=>(
                  <Picker.Item label={data.nombre} value={data._id} key={data._id} />
                ))
              }
          </Picker>

          <View style={styles.buttonContainer}>
                <TouchableOpacity
                activeOpacity={0.8}
                style={styles.Button}
                onPress={()=>{}}

                >
                  <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity> 
            </View>

          <View style={{flexDirection:'row',justifyContent:'center',marginTop:10,padding:5}}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                activeOpacity={0.8}
                style={styles.Button}
                onPress={()=>{}}

                >
                  <Text style={styles.buttonText}>Camara</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                activeOpacity={0.8}
                style={styles.Button}
                onPress={()=>{}}

                >
                  <Text style={styles.buttonText}>Galeria</Text>
                </TouchableOpacity> 
            </View>
         </View>
      </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:10,
    marginHorizontal:20
  },
  label:{
    fontSize:18,
    color:'white'
  },
  textInput:{
    borderWidth:1,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:20,
    borderColor:'white',
    height:45,
    marginTop:5,
    marginBottom:10,
    color:'white'
  },
  buttonText:{
    fontSize:18,
    color:'white'
    },
    buttonContainer:{
      alignItems:'center',
      marginTop:50,
      padding:3
  },
  Button:{
    borderWidth:2,
    borderColor:'white',
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:100
},

});
