import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
  const width = Dimensions.get('window').width;
import * as Progress from 'react-native-progress';
import { GREEN, LIGHT_GREEN, LIGHT_GREY } from '../styles/colors';
import { AVENIR_NEXT, AVENIR_NEXT_BOLD, AVENIR_NEXT_DEMI_MEDIUM } from '../styles/typography';

const LimitGraph = ({weeklyLimit}) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <Text style={{fontFamily:AVENIR_NEXT_DEMI_MEDIUM,fontSize:13}}>Debit card spending limit</Text>
               <View style={{flexDirection:'row'}}> 
                     <Text style={styles.text1}>$345 | </Text> 
                     <Text style={styles.text2}>${weeklyLimit}</Text>
                </View>
            </View>
            <Progress.Bar 
            progress={0.3} 
            width={width-width/10} 
            color={GREEN} height={12} 
            style={{marginTop:10}} 
            borderRadius={20} 
            borderWidth={0}
            unfilledColor={LIGHT_GREY}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:'90%',
        alignSelf:"center",
    },
    headerRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%"
    },
    text1:{
        fontFamily:AVENIR_NEXT_BOLD,
        color:GREEN,
        fontSize:13,
    },
    text2:{
        fontFamily:AVENIR_NEXT,
        color:GREEN,
        fontSize:13,

    }
})
export default LimitGraph
