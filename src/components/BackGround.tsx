import React from 'react'
import { View } from 'react-native'

export const BackGround = () => {
  return (
    <View 
        style={{
            position:'absolute',
            backgroundColor:'rgb(4,4,4)',
            top:-290,
            width:1000,
            height:1200,
            transform:[
                {rotate:'-70deg'}
            ]

        }}
    />


  )
}
