import React, { FC, useContext, useEffect } from 'react'
import { Text, View,FlatList, StyleSheet } from 'react-native'
import { productContext } from '../context/Products/ProductsContext'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {  StackScreenProps } from '@react-navigation/stack'
import { ProductsStack } from '../navigation/ProductNavigation'

interface Props extends StackScreenProps<ProductsStack,'PorductScreen' | "ProductsScreen">{
  
}

export const ProductsScreen:FC <Props> = ({navigation}) => {
  const {products,loadProduct}=useContext(productContext);
  useEffect(() => {
  navigation.setOptions({
    headerRight:()=>(
      <TouchableOpacity
      activeOpacity={0.8}
      style={{marginRight:10}}
      onPress={()=>navigation.navigate('PorductScreen',{id:'',name:''})}
      >
        <Text>Agregar</Text>

      </TouchableOpacity>
    )
  })
  }, [])
  


  return (
    <View style={{flex:1,marginHorizontal:10}}>


      <FlatList
      data={products}
      keyExtractor={(data)=>data._id}
      renderItem={({item})=>(
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>navigation.navigate('PorductScreen',{id:item._id,name:item.nombre})}
                      >
                        <Text style={style.productName}>{item.nombre}</Text>
                      </TouchableOpacity>
                      )}
      ItemSeparatorComponent={()=><View style={style.itemSeparator}></View>}
      />



    </View>
  )
}

const style=StyleSheet.create({
   productName:{
     fontSize:20
   },
   itemSeparator:{
    borderBottomWidth:5,
    marginTop:5,
    marginVertical:5,
    borderBottomColor:'rgba(0,0,0,0.5)'
   },

   btnAgregar:{
    position:'absolute',
    top:50,
    left:20,
    borderWidth:1,
    borderColor:'black',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:100,

  },


});
