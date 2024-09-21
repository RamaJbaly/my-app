import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'


const index = () => {
  const nav = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.toy} onPress={() => {nav.navigate('LOGin')}}>
        <Text style={styles.tip}>ERGIN SHOP</Text>
      </TouchableOpacity>
    </View>

  )
}

export default index

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink'

  },
  tip: {
    fontSize: 18,
  },
  toy: {
   borderWidth:1, 
   width:144, 
   height:30,

  }
  

})