import React,{useState,useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
  } from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native'
import { PURPLE, GREY, LIGHT_GREY, GREEN } from '../styles/colors';
import { AVENIR_NEXT_DEMI_MEDIUM, AVENIR_NEXT_DEMI_REGULAR } from '../styles/typography';

const WeeklySpent = ({navigation,weeklyLimit,setWeeklyLimit}) => {
    console.log(weeklyLimit)
    const [toggle,setToggle]=useState(false)
    useEffect(()=>{
        if(weeklyLimit>0){
            setToggle(true)
        }
    },[weeklyLimit])
    return (
        <View style={styles.container} >
        <Image style={{marginRight:20}} source={require("../assets/images/Transfer.png")}/>
        <View style={styles.messageContainer}>
            <Text style={styles.topText}>Weekly spending limit</Text>
            <Text style={[styles.bottomText,{marginRight:toggle?"5%":0}]}>{!toggle?"You haven’t set any spending limit on card":"Your weekly spending limit is S$"+ weeklyLimit}</Text>
        </View>
        <ToggleSwitch
            isOn={toggle}
            onColor={GREEN}
            offColor={LIGHT_GREY}
            size="small"
            onToggle={(val)=>{if(!val){
                setWeeklyLimit('0')
                setToggle(false)
            }
            else(
                navigation.navigate("SetLimit",{setWeeklyLimit:setWeeklyLimit})
            )
            }}
/>
    </View>
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
       
    }
})

export default WeeklySpent