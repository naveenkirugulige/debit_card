import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
  } from 'react-native';
import { GREEN, WHITE } from '../styles/colors';
import { AVENIR_NEXT, AVENIR_NEXT_BOLD } from '../styles/typography';

const width = Dimensions.get('window').width;

const TopPart = ({balance}) => {
    return (
        <View style={styles.container}> 
            <Image style={styles.logo} source={require("../assets/images/Logo.png")}/>
            <View>
                <Text style={[styles.boldText,{marginTop:"-1%"}]}>Debit Card</Text>
                <Text style={[styles.normalText,{marginTop:"7%"}]}>Available balance</Text>
                <View style={[styles.dollarsContainer,{marginTop:"2%"}]}>
                    <View style={styles.greenDollarSymbol}>
                        <Text style={[styles.normalText,{fontSize:12}]}>S$</Text>
                    </View>
                    <Text style={styles.boldText}>{balance}</Text>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        display:"flex",
        width:width-width/20,
        justifyContent:"space-between",
        alignSelf:"center"
    },
    logo:{
        alignSelf:"flex-end",
        marginRight:"5%",
        marginTop:"5%"
    },
    dollarsContainer:{
        width:"35%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    greenDollarSymbol:{
        width:45,
        height:25,
        backgroundColor:GREEN,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5
    },
    normalText:{
        fontFamily:AVENIR_NEXT,
        color:WHITE,
        fontSize:14
    },
    boldText:{
        fontFamily:AVENIR_NEXT_BOLD,
        color:WHITE,
        fontSize:24,
    }
})

export default TopPart
