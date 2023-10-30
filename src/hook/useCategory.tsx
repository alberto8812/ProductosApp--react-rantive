import React, { useEffect, useState } from 'react'
import { Categoria,Categories } from '../interface/usuarioLogin'
import { useFocusEffect } from '@react-navigation/native'
import motoApi from '../api/MotosApi'

export const useCategory = () => {
 const [Categories, setCategories] = useState<Categoria[]>([])


 const getAllCtegories=async()=>{
     const {data}=await motoApi.get<Categories>('/categorias');

     console.log(data)
    setCategories(data.categorias);

 }  

    useEffect(() => {      
        getAllCtegories();
    }, [])


  return {
    Categories,
  }
}
