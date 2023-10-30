import {  createContext, useEffect, useState } from "react";
import { ProductData, Producto } from "../../interface/usuarioLogin";
import motoApi from "../../api/MotosApi";
import { Asset, ImagePickerResponse } from "react-native-image-picker";


type ProductsContextProps={
    products:Producto[],
    loadProduct:()=>Promise<void>,
    addProduct:(categoryId:string,productName:string)=>Promise<Producto>,
    updateProduct:(categoryId:string,productName:string,productId:string)=>Promise<void>,
    DeleteProduct:(id:string)=>Promise<void>,
    loadProductById:(id:string)=>Promise<Producto>,
    uploadImage:(data:any,id:string)=>Promise<void>,
    
}
export const productContext=createContext({} as ProductsContextProps);

export const ProductProvider=({children}:{children:JSX.Element|JSX.Element[]})=>{
    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
        loadProduct();
    }, [])
    


    const  loadProduct = async ()=>{
    
        try {
            const {data}=await motoApi.get<ProductData>('/productos?limite=50');
            //setProducts([...products,...data.productos])//para cuando viene paginado
           setProducts([...data.productos])

        } catch (error) {
            console.log(error)
        }

    };
    const  addProduct = async (categoryId:string,productName:string):Promise <Producto>=>{
        try {
            const {data}=await motoApi.post<Producto>('/productos',{
                nombre:productName,
                categoria:categoryId
            });
            //setProducts([...products,...data.productos])//para cuando viene paginado
           // console.log(data)
            setProducts([...products,data])
            return data
        } catch (error:any) {
            throw new Error(error)
        }

    };
    const  updateProduct = async (categoryId:string,productName:string,productId:string):Promise<void>=>{
        try {
     
            const {data}=await motoApi.put<Producto>(`/productos/${productId}`,{
                nombre:productName,
                categoria:categoryId
            });
            //setProducts([...products,...data.productos])//para cuando viene paginado
            setProducts(products.map(producto=>(data._id===productId)?data:producto));


        } catch (error:any) {
            console.log(error)
        }


    };
    const  DeleteProduct = async (id:string)=>{

    };
    const  loadProductById = async (id:string):Promise<Producto>=>{

       try {
        const {data}=await motoApi.get<Producto>(`/productos/${id}`);

        return data;
       } catch (error:any) {
            throw new Error(error)
       }



    };
    const  uploadImage = async (data: Asset,id:string):Promise<void>=>{
        
        const fileToUpload = {
            uri: data.uri,
            type: data.type,
            name: data.fileName
        }

        const formData = new FormData();
        formData.append('archivo', fileToUpload);

        try {
            
            const resp = await motoApi.put(`/uploads/productos/${ id }`, formData )
            console.log(resp);
        } catch (error) {
            console.log({ error })
        }

    };
    




    return(
        <productContext.Provider value={{
            products,
            loadProduct,
            addProduct,
            updateProduct,
            DeleteProduct,
            loadProductById,
            uploadImage,

        }}>
            {children}
        </productContext.Provider>
    );
}

