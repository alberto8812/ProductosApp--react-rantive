import { Usuario } from "../../interface/usuarioLogin";

export interface AuthState{
    status:'checking' | 'authenticated' | 'not-authenticated';
    token:string|null;
    errorMessage:string;
    user:Usuario | null;
}

export type AuthAxtion=
       | {type:'signUp',payload:{token:string,user:Usuario}}
       | {type:'addError',payload:string}
       | {type:'removeError'}
       | {type:'notAuthenticated'}
       | {type:'logUot'};

export const authReducer =(state:AuthState,action:AuthAxtion):AuthState=>{


    switch (action.type) {
        case 'addError':

            return {
                ...state,
                user:null,
                status:'not-authenticated',
                token:null,
                errorMessage:action.payload
            };
        case 'removeError':

            return {
                ...state,
                errorMessage:''
            };
        case 'signUp':

            return {
                ...state,
                errorMessage:'',
                status:'authenticated',
                token:action.payload.token,
                user:action.payload.user

            };
        case 'notAuthenticated':
        case 'logUot':

            return {
                ...state,
                status:'not-authenticated',
                token:null,
                user:null

            };
    
        default:
            return state;
    }
}
  