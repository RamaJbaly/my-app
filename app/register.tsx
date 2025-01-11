import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
// import { TextInput } from 'react-native-gesture-handler'
import { createUser } from '@/res/api';
import { useNavigation } from 'expo-router';

const Register = () => {
  const nav=useNavigation()
    const[userName,setUserName]= useState('')
    const[password,setpassword]=useState('')
    const[email,seteEmail]=useState('')
const[phone,setPhone]=useState('')

    const registerUser=()=>{
      const body={

        UserName:userName,
        email:email,
        phone:phone,
        password:password
      }
      createUser(body)
      .then((Response)=>{
        if(Response.success){
          nav.navigate('home')
        }
        else{


        alert('error')
        }
      })
      }
    
  return (
    <View style={styles.container}>
      

      <Text>user name</Text>

      <TextInput
      style={styles.ret3}
        value = {userName}
        onChangeText={setUserName}

        />
             <Text>password</Text>

<TextInput
style={styles.ret3}
  value = {password}
  onChangeText={setpassword}
  secureTextEntry={true}

  />
               <Text>email</Text>

<TextInput
style={styles.ret3}
  value = {email}
  onChangeText={seteEmail}

  />
  <Text>Age</Text>
<TextInput
style={styles.ret3}
  value = {phone}
  onChangeText={setPhone}

    />
       <TouchableOpacity  onPress={registerUser}>
                <Text style={styles.done3}>DONE</Text>
            </TouchableOpacity>


    </View>
  )
}

export default Register

const styles = StyleSheet.create({
    ret3:{
        borderWidth:3, 
        width:300,
        
         
    },
    container:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
   


    })


