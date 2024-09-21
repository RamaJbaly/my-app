
import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Notes from '../components/Notes'
import images from '../assets/images/images';
import { data } from "@/assets/res/data";
import { Ionicons } from '@expo/vector-icons';
import dataGellary from '../assets/res/dataGellary'
import { useNavigation } from 'expo-router';
import Comp from '../components/comp'
const App = () => {

  const nav = useNavigation()

  const renderData = () => {
    const cardArray = data.map(item => {
      return <Notes
      id ={item.id}
        name={item.name}
        price={item.price}
        img={item.img}
        information={item.Information}
      />

    }

    )
    return cardArray

  }
  const rendergellary = () => {
    return dataGellary.map((item) => (
      <Comp item={item} />
    ))
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.MenuHeader}>
        <Pressable onPress={() => {
          nav.navigate("cart")
        }}>

          <Ionicons name='cart-outline' size={50} color={"black"} />
        </Pressable>
        </View>
        <ScrollView horizontal>
          {rendergellary()}
        </ScrollView>
        {renderData()}

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'pink',
    marginTop:40

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
  MenuHeader:{
    // backgroundColor:'#E56E94'
  }



})





export default App;
