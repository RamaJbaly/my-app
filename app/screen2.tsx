
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Image } from 'react-native'
import StoreContext from '@/store/StoreContext'

const Screen2 = () => {
  const data = useLocalSearchParams()
  console.log(data);

  const { cart, setCart } = useContext(StoreContext)

  const [amount, setAmount] = useState(1)
  const nav = useNavigation()

  const addToCart = () => {
    const CartList = cart
    const found = CartList.find((element) => element.name == data.name);
    if (found) {
      console.log("found");

      found.amount += amount;
    } else {
      CartList.push(data)
    }
    setCart(CartList)
    //   nav.reset({
    //     index: 0,
    //     routes: [{ name: 'cart' }]
    //   })
    // }
    nav.replace('cart', { amount: amount })

  }

  return (
    <View style={styles.vv}>
      <Text style={styles.product}>  information about this product :</Text>

      <View>
        <Image source={data.img} style={styles.img} />
        <Text style={styles.way}> {data.name}</Text>
        <Text style={styles.way} > {amount * data.price}$</Text>
      </View>


      <View style={styles.math}>

        <Pressable style={styles.way3} onPress={() => setAmount(amount + 1)}>
          <Text style={styles.way2}>+</Text>
        </Pressable>

        <Text style={styles.count}>{amount}</Text>


        <Pressable style={styles.way3} onPress={() => {
          if (amount > 1) {
            setAmount(amount - 1)


          }
          // setx(x - 1)
        }}>
          <Text style={styles.way2}>-</Text>
        </Pressable>

      </View >
      <TouchableOpacity style={styles.orderView} onPress={addToCart}>
        <Text>add to cart</Text>
      </TouchableOpacity>


    </View >


  )
}

export default Screen2

const styles = StyleSheet.create({
  product: {

    fontSize: 20,
    marginTop: 3
  },

  math: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft: 20
    // alignSelf: 'center'

  },

  way: {
    fontSize: 30,
    // marginLeft:20,
    marginVertical: 15,
    alignSelf: 'center',

  },
  img: {
    width: '80%',
    height: 350,
    borderRadius: 10,
    marginRight: 15,
    alignSelf: 'center'
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
    padding: 10,
    // width: 100,
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