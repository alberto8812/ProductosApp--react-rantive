import {  createContext, useState } from "react";
import { Producto } from "../../interface/usuarioLogin";


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


    const  loadProduct = async ()=>{

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

