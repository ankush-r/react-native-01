import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class FlatList extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <View style={styles.container}>
            <View style={[styles.card, styles.redCard]}>
                <Text>Red</Text>
            </View>
            <View style ={[styles.card, styles.blueCard]}>
                <Text>Blue</Text>
            </View>
            <View style = {[styles.card,styles.greenCard]}>
                <Text>Green</Text>
            </View>
            <View style={[styles.card, styles.redCard]}>
                <Text>Red</Text>
            </View>
            <View style ={[styles.card, styles.blueCard]}>
                <Text>Blue</Text>
            </View>
            <View style = {[styles.card,styles.greenCard]}>
                <Text>Green</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        // backgroundColor:'yellow',
        padding:10,
        margin:10,
        gap:10
    },
    card : {
        width:100,
        height:100,
        padding:8,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'orange',
        shadowOpacity:0.8,
        shadowOffset:{
            width:10,
            height:10
        },
        shadowRadius:5

    },
    redCard : {
        backgroundColor :'red'
    },
    blueCard : {
        backgroundColor :'blue'
    },
    greenCard : {
        backgroundColor :'green'
    }
})
