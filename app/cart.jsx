import { Image, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
// import React, { useContext } from 'react'
import { useState } from 'react'
import { data } from '@/assets/res/data';
// import { StoreProvider } from '@/store/StoreProvider';
import { useContext } from 'react';
import StoreContext from '@/store/StoreContext';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const cart = () => {
    // const route = useRoute()
    const { cart, setCart } = useContext(StoreContext)
    const amount = useLocalSearchParams()
    console.log(amount);
    
    const deleteItem = (index) => {
        cart.splice(index, 1)
        setCart([...cart])
    }

    const renderData = () => {
        const render = cart?.map((val, index) => {
            return (
                <View style={styles.tit3}>
                    <Image style={styles.img2} source={val.img} />

                    <View>
                        <Text style={styles.txt}>{val.name}</Text>
                        <Text style={styles.txt}>{val.price * amount.amount }$</Text>
                        <Text style={styles.txt}>{"number: " + amount.amount }</Text>

                    </View>

                    <Pressable onPress={() => deleteItem(index)}>
                        <Ionicons name='trash-outline' size={30} color={"red"} />
                    </Pressable>

                </View>
            )
        })
        return render
    }
    return (
        <View style={styles.screen4}>
            <ScrollView>


                {renderData()}
            </ScrollView>
            <TouchableOpacity style={styles.Order2}>
                <Text >Order</Text>
            </TouchableOpacity>
        </View>
    )
}

export default cart

const styles = StyleSheet.create({
    img2: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    tit3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        borderRadius: 20,
        borderWidth: 1

    },
    txt: {
        fontSize: 25
    },
    screen4: {
        flex: 1
    },
    Order2: {
        backgroundColor:"#edfff5",
        margin: 20,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    }


})