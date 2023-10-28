import React, { FC, useContext } from 'react'
import { Text, TextInput, View,Platform, KeyboardAvoidingView,Keyboard } from 'react-native'
import { BackGround, WhiteLogo } from '../components'
import { loginStyle } from '../theme/loginTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useForm } from '../hook'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../context/authcontext/AuthContext'
 
interface Props extends StackScreenProps<any,any>{

}

export const UserLoginScreen:FC <Props> = ({navigation}) => {
  const {signIn} = useContext(AuthContext)
  const {onChange,form,email,password}=useForm({
    email:'',
    password:''
  });

  const onLogin=()=>{

   console.log({email,password});
   Keyboard.dismiss;
   signIn({correo:email,password})
  }


  return (
    <>
    {/* BACKGROUND */}
    <BackGround/>

    <KeyboardAvoidingView
      style={{
        flex:1
      }}
      behavior={Platform.OS=='ios'?'padding':'height'}
    >

      <View style={loginStyle.fomrContainer}>
        {/* KEYBOARD */}
        <WhiteLogo/>

        <Text style={loginStyle.title}>Login</Text>
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
            onSubmitEditing={onLogin}
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
            onSubmitEditing={onLogin}
            autoCapitalize='none'
            autoCorrect={false} 
            secureTextEntry={true}  
        />

        <View style={loginStyle.buttonContainer}>
          <TouchableOpacity
          activeOpacity={0.8}
          style={loginStyle.Button}
          onPress={onLogin}

          >
            <Text style={loginStyle.buttonText}>Login</Text>
          </TouchableOpacity>
          
        </View>

      {/* crear una nueva cuenta */}

      <View style={loginStyle.newUserContainer}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>navigation.replace('RegisterScreen')}
            >
              <Text style={loginStyle.buttonText}>Neva Cuenta</Text>
          </TouchableOpacity>
      </View>
    </View>
  </KeyboardAvoidingView>


    </>
  )
}
