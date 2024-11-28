import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Linking, Touchable, TouchableOpacity } from 'react-native'

export default class InteractiveCard extends Component {
    returnUrl = (urlProvided: string) => {
        Linking.openURL(urlProvided);
    };
    
  render() {
    return (
      <View style={styles.outerContainer}>
        <View style={styles.header}>
        <Text style={styles.headerStyle}> Interactive Card </Text>
        </View>
        <Image style={styles.imageStyle}
            source={{
                uri:'https://images.unsplash.com/photo-1732624697703-c5b0d3110cb4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }} />
        <View>
            <Text style={styles.description} numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, repellendus! Mollitia laboriosam repudiandae veritatis, ad vitae saepe doloribus neque, eius nesciunt quisquam necessitatibus totam magni! Veritatis impedit repellat expedita nostrum.</Text>
        </View>
        <View style={styles.bottomContainer}>
            <TouchableOpacity>
            <View>
                <Text style={styles.button} onPress={()=>this.returnUrl('https://www.youtube.com/')}>Youtube</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View>
                <Text style={styles.button} onPress={()=>this.returnUrl('https://letmegooglethat.com/?q=react+native')}>Google</Text>
            </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    outerContainer:{
        height:300,
        width:'96%',
        backgroundColor:'#F3FEB8',
        marginVertical:10,
        marginHorizontal:10,
        borderWidth:2,
        borderRadius:3,
        marginTop:15,
    },
    imageStyle:{
        height:150,
        width:'90%',
        paddingHorizontal:10,
        alignSelf:'center',
        marginTop:0
    },
    header:{
        alignItems:'center',
    },
    headerStyle:{
        fontSize:20,
        fontWeight:700,
    },
    description:{
        padding:10
    },
    bottomContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:10
    },
    button:{
        borderWidth:2,
        borderRadius:5,
        padding:10        
    }
})
