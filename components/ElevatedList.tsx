import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class ElevatedList extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}> Elevated Card </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator>
            <View style={styles.outerContainer}>
                <View style = {[styles.individualCard]}>
                    <Text>😀</Text>
                </View>
                <View style = {[styles.individualCard]}>
                    <Text>😋</Text>
                </View>
                <View style = {[styles.individualCard]}>
                    <Text>😇</Text>
                </View>
                <View style = {[styles.individualCard]}>
                    <Text>🥶</Text>
                </View>
                <View style = {[styles.individualCard]}>
                    <Text>👿</Text>
                </View>
                <View style = {[styles.individualCard]}>
                    <Text>🙏</Text>
                </View>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header : {
        fontSize:20,
        fontWeight:600,
        padding:13
    },
    outerContainer :{
        display:'flex',
        flexDirection:'row',
        marginVertical:10,
        backgroundColor:'#B3C8CF',
        shadowOffset:{
            width:10,
            height:10
        },
        elevation:10,
        padding:5,
        borderRadius:5,
    },
    individualCard :{
        height:100,
        width:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:7,
        marginHorizontal:10
    }
})
