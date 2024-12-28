
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { AntDesign, Ionicons } from '@expo/vector-icons'
// import  {data}  from './../assets/res/data';
import Notes from './../components/Notes';
// import dataGellary from '@/assets/res/dataGellary';
import Comp from './../components/comp';
import data from '@/assets/res/data';
import dataGellary from '@/assets/res/dataGellary';

const App = () => {
  const nav = useNavigation()


  const renderData = () => {
    // const cardArray = data.map(item => {
    // return <Notes
    //   id={item.id}
    //   name={item.name}
    //   price={item.price}
    //   img={item.img}
    //   information={item.Information}
    // />
    // }

    // )
    // return cardArray

    return data.map((item) => (
      <Notes
        id={item.id}
        name={item.name}
        price={item.price}
        img={item.img}
        information={item.Information}
      />
      // <View></View>
    ))
  }
  const rendergellary = () => {
    return dataGellary.map((item) => (
      <Comp item={item} />
      // <Text></Text>
    ))


  }
  // console.log(dataGellary);




  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.MenuHeader}>
            <Pressable onPress={() => {
              nav.navigate("cart")
            }}>
              <Ionicons name='cart-outline' size={50} color={"black"} />
            </Pressable >

            <Pressable onPress={() => {
              nav.navigate('profile')
            }}>
            <AntDesign name="user" size={50} color="black" />
            </Pressable>
            <Pressable onPress={() => {
              nav.navigate('cart')
            }}>
            </Pressable>
          </View>
          <ScrollView horizontal>
            {rendergellary()}
          </ScrollView>
          {renderData()}

        </View>

      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    // marginTop: 40      

  },
  name: {
    fontSize: 30,
    fontWeight: 'bold'

  }
  ,
  img: {
    width: 60,
    height: 60,
    borderRadius: 40,

  },
  rr: {
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    backgroundColor: 'green',
    fontSize: 35,
    color: 'white'
  },
  MenuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:'#E56E94'
  }
})