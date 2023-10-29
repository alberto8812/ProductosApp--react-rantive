import { StackScreenProps } from '@react-navigation/stack'
import React, { FC, useContext, useEffect } from 'react'
import { StyleSheet, Text, View,ScrollView, TextInput, TouchableOpacity, Image } from 'react-native'
import { ProductsStack } from '../navigation/ProductNavigation'
import { BackGround } from '../components'
import {Picker} from '@react-native-picker/picker';
import { useCategory, useForm } from '../hook'
import { productContext } from '../context/Products/ProductsContext'
import { Producto } from '../interface/usuarioLogin'



interface Props extends StackScreenProps <ProductsStack,'PorductScreen' | 'ProductsScreen'>{
  
}


export const PorductScreen:FC <Props> = ({navigation,route}) => {
  const {id,name}=route.params;

  const {Categories}=useCategory();
  const {loadProductById,addProduct,updateProduct,products}=useContext(productContext);
  const {_id,nombre,categoriaId,img,form,onChange,setFormValue}=useForm({
    _id:id,
    categoriaId:'',
    nombre:name,
    img:''
  })



  useEffect(() => {
     navigation.setOptions({
      title:(name)?name:'Nuevo producto',
      headerTitleAlign:'center',

     })
     
  }, [nombre])


  useEffect(() => {
    console.log(2)
    loadProduct();
  }, [])
  


  const loadProduct=async()=>{
    if(id.length===0) return;
    const product:Producto=await loadProductById(id)
    setFormValue({
      _id:id,
      categoriaId:product.categoria._id,
      img:product.img || '',
      nombre:nombre
    })
  }
  

  const saveOrUpdate= async()=>{
    if(id.length>0){
 
       await updateProduct(categoriaId,nombre,id);

    return;
    }
    const tempsCategoriaId=categoriaId ||Categories[0]._id

     const newProduct= await addProduct(tempsCategoriaId,nombre);
     onChange(newProduct._id,'_id')
  }

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
          value={nombre}
          onChangeText={(value)=>onChange(value,'nombre')}
        
          />

          <Text style={styles.label}>Seleccionar categoria: </Text>

          <Picker
            selectedValue={categoriaId}
            style={{
              backgroundColor:'white',
              borderRadius:100
            }}
            onValueChange={(itemValue) => onChange(itemValue,'categoriaId')}>
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
                onPress={saveOrUpdate}

                >
                  <Text style={styles.buttonText}>Guardar</Text>
                </TouchableOpacity> 
            </View>
           {
            (_id.length>0) 
            &&
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
           }
         {
         ( form.img.length>0)
         &&
         <Image
          source={{uri:form.img}}
          style={{
            width:'100%',
            height:300,
            borderRadius:100
          }}
         />
         }
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
