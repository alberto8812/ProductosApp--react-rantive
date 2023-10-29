import React, { FC, useContext, useLayoutEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { BackGround, WhiteLogo } from '../components'
import { loginStyle } from '../theme/loginTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { useForm } from '../hook'
import { AuthContext } from '../context/authcontext/AuthContext'


interface Props extends StackScreenProps<any,any>{

}



export const RegisterScreen:FC <Props> = ({navigation}) => {
  const {signUp,errorMessage,removeError}=useContext(AuthContext)
  const {onChange,name,email,password,}=useForm({
    email:'',
    password:'',
    name:'',
  });

  useLayoutEffect(() => {
    if(errorMessage.length===0)return;
    Alert.alert('Datos incorrecto',errorMessage,
    [
     {
       text:'Ok',
       onPress:()=>removeError()
     }
   ]);
  }, [errorMessage])

  const onRegister=()=>{
   //console.log({email,password,name});
   Keyboard.dismiss;
   signUp({nombre:name,password,correo:email})
  }



  return (
    <>

       {/* BACKGROUND */}
       <BackGround/>

        <KeyboardAvoidingView
          style={{
            flex:1,
         //   backgroundColor:'rgb(4,4,4)',
          }}
          behavior={Platform.OS=='ios'?'padding':'height'}
        >
          {/* crear una nueva cuenta */}

          <View style={loginStyle.buttonReturn}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.replace('UserLoginScreen')}
                >
                  <Text style={loginStyle.buttonText}>Regresar al Login</Text>
              </TouchableOpacity>
          </View>





          <View style={loginStyle.fomrContainer}>
            {/* KEYBOARD */}
            <WhiteLogo/>

            <Text style={loginStyle.title}>Register</Text>

            <Text style={loginStyle.label}>Nombre</Text>

            <TextInput
                placeholder='Ingrese su Nombre'
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid="white"
                style={[loginStyle.inputField,
                    (Platform.OS==='ios') && loginStyle.inputFielIOS
                ]}
                selectionColor='white'
                onChangeText={(value)=>onChange(value,'name')}
                value={name}
                onSubmitEditing={onRegister}
                autoCapitalize='words'
                autoCorrect={false}   
            />


            <Text style={loginStyle.label}>Email</Text>

            <TextInput
                placeholder='Ingrese su email'
                placeholderTextColor="rgba(255,255,255,0.4)"
                keyboardType='email-address'
                underlineColorAndroid="white"
                style={[loginStyle.inputField,
                    (Platform.OS==='ios') && loginStyle.inputFielIOS
                ]}
                selectionColor='white'
                onChangeText={(value)=>onChange(value,'email')}
                value={email}
                onSubmitEditing={onRegister}
                autoCapitalize='none'
                autoCorrect={false}   
            />

          <Text style={loginStyle.label}>Contraseña:</Text>
            <TextInput
                placeholder='Ingrese su Contraseña'
                placeholderTextColor="rgba(255,255,255,0.4)"
                underlineColorAndroid="white"
                style={[loginStyle.inputField,
                    (Platform.OS==='ios') && loginStyle.inputFielIOS
                ]}
                selectionColor='white'
                onChangeText={(value)=>onChange(value,'password')}
                value={password}
                onSubmitEditing={onRegister}
                autoCapitalize='none'
                autoCorrect={false} 
                secureTextEntry={true}  
            />

            <View style={loginStyle.buttonContainer}>
              <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyle.Button}
              onPress={onRegister}

              >
                <Text style={loginStyle.buttonText}>Crear cuenta</Text>
              </TouchableOpacity>
              
            </View>

        </View>
      </KeyboardAvoidingView>


    </>
  )
}
