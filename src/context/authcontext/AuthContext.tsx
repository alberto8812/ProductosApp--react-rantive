import React, { Children, createContext, useEffect, useReducer } from "react";
import { LoginData, Usuario, UsurioLogin } from "../../interface/usuarioLogin";
import { AuthState, authReducer } from "../reducer/authReducer";
import motoApi from "../../api/MotosApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps={
    errorMessage:string;
    token:string|null;
    user:Usuario | null;
    status:'checking' | 'authenticated' | 'not-authenticated';
    signUp:()=>void;
    signIn:({correo,password}:LoginData)=>void;
    removeError:()=>void;
    logout:()=>void;
}


const AuthInitialSte:AuthState={
    status:'checking',// revisando el estado
    token:null,
    user:null,
    errorMessage:''
}

export const AuthContext =createContext({} as AuthContextProps);// Generated by https://quicktype.io

export const AuthProvider =({children}:{children:JSX.Element |JSX.Element[]})=>{
const [state, dispatch] = useReducer(authReducer,AuthInitialSte )

useEffect(() => {
    checkToken();
}, [])


const checkToken=async ()=>{
    
    const token =await AsyncStorage.getItem('token');
    if(!token)  return dispatch({type:'notAuthenticated'});

    const {data}=await motoApi.get<UsurioLogin>('/auth');

    dispatch({
        type:'signUp',
        payload:{
            user:data.usuario,
            token:data.token
        }
    })

};


const signUp=  ()=>{


};
const signIn=async({correo,password}:LoginData)=>{
    try {

        const {data}=await motoApi.post<UsurioLogin>('/auth/login',
        {
           correo ,
           password
        }
        )

        dispatch({
            type:'signUp'
            ,payload:{
                token:data.token,
                user:data.usuario
            }
    })

    await AsyncStorage.setItem('token',data.token)
        
    } catch (error:any) {
        const msgError:string=error.response.data.msg;
        dispatch({type:'addError',payload:msgError || 'Informacion incorrecta'})

    }

};
const removeError=()=>{
    dispatch({
        type:'removeError'
    })
};
const logout=async()=>{
    await AsyncStorage.removeItem('token')
    dispatch({type:'logUot'})




};



return(
    <AuthContext.Provider
        value={{
            ...state,
            signUp,
            signIn,
            removeError,
            logout            
        }}
    >
        {children}
    </AuthContext.Provider>
)
}


