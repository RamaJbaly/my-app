import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
// import images from '../src/images/images';

const Card = (props) => {
    return (
        <Pressable style={styles.rr} >

            <Image style={styles.img} source={props.pic} />

            <View>
                <Text style={styles.name}>{props.information}</Text>

                <View >
                    <Text>{props.msg} </Text>
                    <Text style={styles.wkt}>{props.price}</Text>
                </View>

            </View>

           
        </Pressable>
    );
}


const styles = StyleSheet.create({


    name: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black'
    }
    ,
    img: {
        width: 80,
        height: 63,
        borderRadius: 50,

    },
    rr: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    wkt: {
        textAlign: 'right',
        flexDirection: 'row',
        borderWidth:1,
        backgroundColor:'black',
        fontSize:40

    },
    img2: {
        width: 22,
        height: 22,
       // left: 143
    }
})

export default Card;
