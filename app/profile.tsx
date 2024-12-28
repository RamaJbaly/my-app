import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.contener}>
      <Text style={styles.tomth}>profile</Text>
      <Text style={styles.hateu}>user name :</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  tomth:{
    textAlign:'center',
   fontSize:25, 
    width:144 ,
   height:50,
   backgroundColor:'lightblue'
     

  },
  contener:{
    alignItems:'center'
  },
  hateu:{
    
   }
})