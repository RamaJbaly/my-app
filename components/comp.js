import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ScrollViewStyleReset } from 'expo-router/html';
import { useNavigation } from 'expo-router';

const Comp = ({item}) => {
    const nav=useNavigation();
    return (
        <View>
            <TouchableOpacity style={styles.x}  onPress={() => { nav.navigate('screen2', { ...item }) }}>
            <Image style={styles.comp3}source={item.img}/>
            </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    comp3:{
        width:100,
        height:100,
        marginHorizontal:10,
        borderRadius:15
    }
})

export default Comp;
