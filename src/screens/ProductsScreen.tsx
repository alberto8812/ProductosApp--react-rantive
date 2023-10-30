import React, { FC, useContext, useEffect, useState } from 'react'
import { Text, View,FlatList, StyleSheet,RefreshControl, TouchableOpacity  } from 'react-native'
import { productContext } from '../context/Products/ProductsContext'
import {  StackScreenProps } from '@react-navigation/stack'
import { ProductsStack } from '../navigation/ProductNavigation'
import { BackGround } from '../components'

interface Props extends StackScreenProps<ProductsStack,'PorductScreen' | "ProductsScreen">{
  
}

export const ProductsScreen:FC <Props> = ({navigation}) => {
  const {products,loadProduct}=useContext(productContext);
  const [refreShing, setRefreShing] = useState(false)


   const loadProductFromBackend=async()=>{
    setRefreShing(true)
     await loadProduct();
    setRefreShing(false)
    
   }

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
                 {/* BACKGROUND */}
     <BackGround/>

      <FlatList
      data={products}
      keyExtractor={(data)=>data._id}
      renderItem={({item})=>(
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>navigation.navigate('PorductScreen',{id:item._id || '',name:item.nombre|| ''})}
                      >
                        <Text style={style.productName}>{item.nombre}</Text>
                      </TouchableOpacity>
                      )}
      ItemSeparatorComponent={()=><View style={style.itemSeparator}></View>}
      refreshControl={
        <RefreshControl
        refreshing={refreShing}
        onRefresh={loadProductFromBackend}

        />
      }
      />



    </View>
  )
}

const style=StyleSheet.create({
   productName:{
     fontSize:20,
     color:'white'
   },
   itemSeparator:{
    borderBottomWidth:5,
    marginTop:5,
    marginVertical:5,
    borderBottomColor:'white'
   },

   btnAgregar:{
    position:'absolute',
    top:50,
    left:20,
    borderWidth:1,
    borderColor:'white',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:100,

  },


});
