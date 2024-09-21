import { Image, ImageBackground, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Route } from 'expo-router/build/Route';
import { useNavigation } from 'expo-router';
import StoreContext from '@/store/StoreContext';



const screen2 = () => {
  const route = useRoute()
  

  const [x, setx] = useState(1)
  const nav = useNavigation()
  const { cart, setCart } = useContext(StoreContext)

  const addToCart = () => {
    const CartList = cart
    // if (CartList.includes(route.params)){
      CartList.push(route.params)
    // }
    
    setCart(CartList)
    nav.navigate('cart', { x })
  }
  return (
    <View style={styles.vv}>
      <Text style={styles.product}>  information about this product :</Text>

      <View>
        <Image source={route.params.img} style={styles.img} />
        <Text style={styles.way}> {route.params.name}</Text>
        <Text style={styles.way} > {x * route.params.price}$</Text>

      </View>


      <View style={styles.math}>

        <Pressable onPress={() => setx(x + 1)}>
          <View style={styles.way3}>
            <Text style={styles.way2}>+</Text>
          </View>
        </Pressable>

        <Text style={styles.count}>{x}</Text>


        <Pressable onPress={() => {
          if (x > 1) {
            setx(x - 1)


          }
          // setx(x - 1)
        }}>
          <View style={styles.way3}>

            <Text style={styles.way2}>-</Text>
          </View>

        </Pressable>
      </View >
      <TouchableOpacity style={styles.orderView} onPress={addToCart}>
        <Text>ORDER</Text>
      </TouchableOpacity>


    </View >


  )
}

export default screen2

const styles = StyleSheet.create({
  product: {

    fontSize: 20,
    marginTop: 3
  },

  math: {

    flexDirection: 'row',
    width: 120,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 20
    // alignSelf: 'center'

  },

  way: {
    fontSize: 30,
    // marginLeft:20,
    marginVertical: 15,



  },
  img: {
    width: '70%',
    height: 350,
    borderRadius: 10,
    marginRight: 15,
    // resizeMode: 'contain'
  },
  vv: {
    backgroundColor: "#edd8d8",
    flex: 1,

  },
  way2: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10

  },
  way3: {
    // height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    // borderWidth: 1,


  },
  count: {
    fontSize: 20,
    width: 90,
    height: 30,
    textAlign: 'center',
  },
  orderView: {
    height: 50,
    width: 100,
    backgroundColor: "lightblue",
    borderWidth: 1,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
    //marginLeft: 60

  }
})
