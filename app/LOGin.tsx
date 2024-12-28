import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { router, useNavigation } from 'expo-router'
import Register from './register'
import { LoginU } from '@/res/api'
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import { TextInput } from 'react-native-gesture-handler'

const LOGin = () => {
    const [phone, setphone] = useState('0523032479')
    const [password, setpassword] = useState('252013')
    const nav = useNavigation()

    const logUser = async () => {
        const response = await LoginU({ phone, password })

        console.log(response);
        

        if (response) {
            router.replace("/home")
        }
        else {
            return // error message
        }
    }

    const presslogin = () => {
        if (phone == '0523032479' && password == 'ramajbaly111' || phone == '547' && password == '547') {

            router.navigate("/home")
        }
        else {
            Alert.alert('there is something wrong!')
        }
    }
    const press2 = () => {
        nav.navigate('register')
    }



    return (
        <View style={styles.container}>
            <Text>LOGIN</Text>
            <Text>number phone:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setphone(e)}
                value={phone}

            />
            <Text>  password:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => setpassword(e)}
                value={password}
                secureTextEntry={true}

            />
            <TouchableOpacity onPress={press2}>
                <Text>create account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => { logUser() }}>
                <Text style={styles.done2}>DONE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => nav.navigate("home")}>

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
        borderWidth: 3,
        width: 300,

    },
    done2: {
        fontSize: 24,
    },
    btn: {
        backgroundColor: 'lightblue',
        borderRadius: 20,
        marginTop: 100,
        borderWidth: 1,
        padding: 10

    }
})