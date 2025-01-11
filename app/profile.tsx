import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.contener}>
      <Text style={styles.tomth}>profile</Text>
      <Text style={styles.hateu}>user name :</Text>
      <Text style={styles.myself}>log out</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  tomth: {
    textAlign: 'center',
    fontSize: 25,
    width: 144,
    height: 50,

  },
  contener: {
    alignItems: 'center'
  },
  hateu: {
    textAlign: "center",
    fontSize: 20

  },

  myself: {
    width: 80,
    height: 40,
    textAlign: "center",
    fontSize: 19,
    marginTop: 600
  }
})