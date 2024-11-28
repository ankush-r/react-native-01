import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class FancyCard extends Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <Text style={styles.header}> Fancy Card </Text>
        <View style={styles.mainContainer}>
            <Image style={styles.image}
            source={{
                uri:'https://images.unsplash.com/photo-1732193998117-97b3b2994323?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }} />
            <View>
                <Text style={styles.cardTitle}>Card Title</Text>
                <Text numberOfLines={2} style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum expedita, quod nesciunt distinctio nam sapiente minus quasi tempora deleniti. Eligendi!</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    outerContainer:{
        shadowOffset:{
            width:5,
            height:10
        },
        shadowOpacity:0.5,
        shadowColor:'#10375C',
        shadowRadius:2
    },
    header:{
        fontSize:20,
        fontWeight:600,
        padding:13
    },
    mainContainer :{
        height:300,
        width:'95%',
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
        backgroundColor:'#1F509A',
        marginHorizontal:10,
    },
    image:{
        height:150,
        margin:10
    },
    cardTitle:{
        fontSize:30,
        fontWeight:700,
        paddingBottom:10,
        paddingLeft:13
    },
    cardDescription :{
        fontSize:15,
        fontWeight:500,
        color:'#0B192C',
        padding:10
    }
})
