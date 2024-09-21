import { StyleSheet, Text, View, TextInput ,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from 'expo-router'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { TextInput } from 'react-native-gesture-handler'

const LOGin = () => {
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const nav=useNavigation()
   const presslogin=() => {
    if (phone == '0523032479'&& password=='252013')
        nav.navigate('Home')
    else(
        Alert.alert('there is something wrong!')
    )
   }

    return (
        <View style={styles.container}>
            <Text>LOGIN</Text>
            <Text>number phone:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setphone}
                value={phone}

            />
            <Text>  password:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setpassword}
                value={password}

            />
            <TouchableOpacity onPress={presslogin}>
                
            <Text style={styles.done2}>DONE</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default LOGin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 5,
        width: 300,
    },
    done2: {
     marginTop:100, 
     backgroundColor:'lightblue',
     borderWidth:2, 
     fontSize:20
       



    },
})