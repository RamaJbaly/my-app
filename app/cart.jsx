import { Image, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
// import React, { useContext } from 'react'
import { useState } from 'react'
import { data } from '@/assets/res/data';
// import { StoreProvider } from '@/store/StoreProvider';
import { useContext } from 'react';
import StoreContext from '@/store/StoreContext';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const cart = () => {
    const route = useRoute()
    const { cart, setCart } = useContext(StoreContext)
    
    const deleteItem = (id) => {
        const filterdata = cart.filter(item => item.id=!id)
        
        setCart(filterdata)
        return filterdata
    }

    const renderData = () => {
        const render = cart.map(val => {
            return (
                <View style={styles.tit3}>
                    <Image style={styles.img2} source={val.img} />

                    <View>
                        <Text style={styles.txt}>{val.name}</Text>
                        <Text style={styles.txt}>{val.price * route.params.x}$</Text>
                        
                    </View>

                    <Pressable onPress={() => deleteItem(val.id)}>
                        <Ionicons name='trash-outline' size={30} color={"red"} />
                    </Pressable>

                </View>
            )
        })
        return render
    }
    return (
        <View>
            <ScrollView>
                

                {renderData()}
            </ScrollView>
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
    }


})