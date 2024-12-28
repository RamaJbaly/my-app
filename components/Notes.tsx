import { useNavigation } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import dataGellary from '../assets/res/dataGellary';

const Notes = (props) => {
    const nav = useNavigation();

    return (


        <View style={styles.container}>



            <TouchableOpacity style={styles.x} onPress={() => { nav.navigate('screen2', {...props}) }}>
                <Image style={styles.img} source={props.img} />
                <View>
                    <View>

                        <Text style={styles.name}>{props.name}</Text>
                    </View>

                    <Text style={styles.price}>{props.price}$</Text>
                </View>
                {/* <View style={styles.vvv}>
                    <Text style={styles.T}>ORDER</Text>
                </View> */}
            </TouchableOpacity>




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        // backgroundColor: 'lightpink',
        borderRadius: 10,
    },
    img: {
        width: 140,
        height: 140,
        borderRadius: 10,
        marginRight: 15,
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    info: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    price: {
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: '#FCDFFF',
        textAlign: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        color: 'black',
        marginTop: 20,
        width: 70,
        borderWidth: 1,
    },
    vvv: {
        height: 50,
        width: 100,
        backgroundColor: "lightblue",
        borderWidth: 1,
        borderRadius: 30,
        marginLeft: 60

    },
    T: {
        marginLeft: 18,
        marginTop: 10

    },
    x: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        alignItems: 'center'
    }
});

export default Notes;
