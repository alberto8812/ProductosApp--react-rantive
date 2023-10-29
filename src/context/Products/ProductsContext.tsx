import {  createContext, useEffect, useState } from "react";
import { ProductData, Producto } from "../../interface/usuarioLogin";
import motoApi from "../../api/MotosApi";


type ProductsContextProps={
    products:Producto[],
    loadProduct:()=>Promise<void>,
    addProduct:(categoryId:string,productName:string)=>Promise<void>,
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
    const  addProduct = async (categoryId:string,productName:string)=>{

    };
    const  updateProduct = async (categoryId:string,productName:string,productId:string)=>{

    };
    const  DeleteProduct = async (id:string)=>{

    };
    const  loadProductById = async (id:string)=>{

        throw new Error('no implement');

    };
    const  uploadImage = async (data:any,id:string)=>{

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

