import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo = () => {

  return (
    <View style={{alignItems:'center'}}>
        <Image
         source={require('../assets/LogoUniMotor.png')}
         style={{
            width:150,
            height:100
         }}
         />
    </View>
  )
}
