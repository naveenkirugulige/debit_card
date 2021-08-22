import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
import { GREY, PURPLE } from '../styles/colors';
import { AVENIR_NEXT_DEMI_MEDIUM, AVENIR_NEXT_DEMI_REGULAR } from '../styles/typography';


const NewCard = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={{marginRight:20}} source={require("../assets/images/newCard.png")}/>
            <View style={styles.messageContainer}>
                <Text style={styles.topText}>Get a new Card</Text>
                <Text style={styles.bottomText}>This Deactivates your existing card</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
        width:'90%',
        alignSelf:"center",
        
    },
    messageContainer:{
        marginRight:0
    },
    topText:{
        fontFamily:AVENIR_NEXT_DEMI_MEDIUM,
        fontSize:14,
        color:PURPLE
    },
    bottomText:{
        fontFamily:AVENIR_NEXT_DEMI_REGULAR,
        color:GREY,
        fontSize:13,
        width:"90%"
    }
})

export default NewCard