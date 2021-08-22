import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { PURPLE, GREY, LIGHT_GREY, GREEN } from '../styles/colors';
import { AVENIR_NEXT_DEMI_MEDIUM, AVENIR_NEXT_DEMI_REGULAR } from '../styles/typography';

const FreezeCard = () => {
    return (
        <TouchableOpacity style={styles.container}>
        <Image style={{marginRight:20}} source={require("../assets/images/Freeze.png")}/>
        <View style={styles.messageContainer}>
            <Text style={styles.topText}>Freeze card</Text>
            <Text style={styles.bottomText}>Your debit card is currently active</Text>
        </View>
        <ToggleSwitch
            isOn={false}
            onColor={GREEN}
            offColor={LIGHT_GREY}
            size="small"
            onToggle={()=>{}}
/>
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
        marginRight:10
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
        marginRight:"15%"
    }
})
export default FreezeCard