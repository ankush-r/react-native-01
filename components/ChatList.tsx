import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'

export default function ChatList() : JSX.Element{
    let listOfPeople = [
        {
            id : 1,
            name : 'Ankush',
            imageUrl :'https://img.freepik.com/premium-photo/cartoon-character-with-headphones-is-close-up_922357-36263.jpg',
            status : true,
            gender : 'male',
            bio : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, natus.'
        },
        {
            id : 2,
            name : 'Donald Trump',
            imageUrl :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RDWoCriOPNXiSnw_8q1KOhwdmKx5jHcxMHBak9iMCPp_nOTy14CRHSYZnv_tqOFWNOg&usqp=CAU',
            status : false,
            gender : 'male',
            bio : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores.'
        },
        {
            id : 5,
            name : 'Selena Gomez',
            imageUrl :'https://ca-times.brightspotcdn.com/dims4/default/a192007/2147483647/strip/true/crop/5530x7374+0+0/resize/2000x2667!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe3%2F1d%2F86f1aac44d04a1dc2e5506241f4f%2Fselenagomez.jpg',
            status : false,
            gender : 'female',
            bio : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores.'
        },
        {
            id : 3,
            name : 'Elon Musk',
            imageUrl :'https://media.wired.com/photos/6696e4a11f1e05dd7d416d82/1:1/w_1800,h_1800,c_limit/Elon-Musk-SpaceX-X-Move-Texas-Business-2158244111.jpg',
            status : true,
            gender : 'male',
            bio : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores.'
        },
        {
            id : 4,
            name : 'Taylor Swift',
            imageUrl :'https://assets.teenvogue.com/photos/66ad2de28f3c2af2636de45e/16:9/w_2560%2Cc_limit/GettyImages-1463250014.jpg',
            status : true,
            gender : 'female',
            bio : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolores.'
        }
    ]
    return (
      <View>
        <Text style={styles.header}> Chats </Text>
        <ScrollView>
            {listOfPeople.map(({id, name, imageUrl, status, gender, bio})=>{
                return (
                    <View key={id} style={[styles.chatCard,gender === 'male' ? styles.maleCard : styles.femaleCard]}>
                        <Image style ={styles.imageStyle}
                            source = {{
                            uri : imageUrl
                        }} />
                        <View style={styles.rightContainer}>
                            <View style={styles.firstRightContainer}>
                                <Text style={styles.cardName}>{name}</Text>
                                <Text numberOfLines={2} style={styles.bio}>{bio}</Text>
                                <Text style={styles.gender}>{gender}</Text>
                            </View>
                        </View>
                        <View style={styles.secondRightContainer}>
                                <View style={[styles.status,status ? styles.active : styles.inactive]}>
                            </View>
                        </View>
                    </View>
                )
            })}
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    header:{
        fontSize:20,
        fontWeight:700,
        padding:13
    },
    active:{
        backgroundColor:'#00FF9C'
    },
    inactive:{
        backgroundColor:'#C62E2E'
    },
    status :{
        width:10,
        height:10,
        borderWidth:0.5
    },
    bio:{
        fontWeight:300,
        fontSize:10,
    },
    gender:{
        marginTop:5,
        fontSize:15,
        fontWeight:400
    },
    chatCard :{
        height:100,
        width:'96%',
        padding:10,
        paddingHorizontal:15,
        marginVertical:5,
        marginLeft:7,
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:10,
        borderWidth:3
    },
    maleCard :{
        backgroundColor:'#80C4E9'
    },
    femaleCard : {
        backgroundColor :'#EFB6C8'
    },
    imageStyle :{
        height:60,
        width:60,
        borderRadius:'50%',
    },
    rightContainer:{
        marginLeft:10,
        padding:5,
        width:'70%'
    },
    cardName:{
        fontSize:15,
        fontWeight:600
    },
    firstRightContainer :{
        width:'70%',
    },
    secondRightContainer :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
