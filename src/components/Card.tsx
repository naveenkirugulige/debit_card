import React,{useEffect,useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
import { GREEN, WHITE } from '../styles/colors';
import {  AVENIR_NEXT_BOLD, AVENIR_NEXT_DEMI_BOLD } from '../styles/typography';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Card = ({cardDetails}) => {

    const {name,number,expiry,cvv}=cardDetails||{}
    const [showCardDetails,setShowCardDetails]=useState(false)

    const HideNumber=({number})=>{
        var dots = [];
        for (let i = 1; i <=12; i++) {
            dots.push(<View key={i} style={{height:8,width:8,borderRadius:8,backgroundColor:WHITE,marginRight:i%4===0?10:5,alignSelf:"center",marginTop:'7%'}}/>);
          }
          dots.push(<Text style={[styles.cardNumberText]}>{number.substring(number.length - 4)}</Text>)
        return <View style={{flexDirection:'row'}}>{dots}</View>
    }
    
    

    return (
        <View style={styles.container}>
            <View style={styles.showHideContainer}>
                <TouchableOpacity style={styles.showHide} onPress={()=>{setShowCardDetails(!showCardDetails)}}>
                    <Image source={showCardDetails?require("../assets/images/hide_eye.png"):require("../assets/images/eye.png")}/>
                    <Text style={styles.greenText}>{showCardDetails?"Hide Card number":"Show card number"}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardDetailsContainer}>
                <View style={styles.cardRow1}>
                   <Image source={require("../assets/images/AspireLogo.png")}/> 
                </View>
                <View style={{marginTop:'10%'}}>
                    <Text style={styles.nameText}>{name}</Text>
                   {
                   showCardDetails? <Text style={styles.cardNumberText}>{number}</Text>:
                    
                      <HideNumber number={number}/>  }   
                    <View style={styles.cvvThruContainer}>
                        <Text style={styles.thruText}>Thru: {expiry}</Text>
                        <Text style={styles.thruText}>CVV: {showCardDetails?cvv:"* * *"}</Text>
                    </View>
                </View>
                <View style={styles.cardRow1}>
                <Image source={require("../assets/images/VisaLogo.png")}/> 
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        alignSelf:"center",
        width:width-width/9,
        height:height/3,
        marginTop:"-30%",
        
    },
    showHideContainer:{
        height:"12%",
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    showHide:{
        width:'45%',
        height:"150%",
        backgroundColor:WHITE,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        flexDirection:"row",
        justifyContent:"space-around",
        paddingTop:10,
        paddingHorizontal:5
        
    },
    cardDetailsContainer:{
        height:"80%",
        backgroundColor:GREEN,
        borderRadius:10,
        padding:"7%"
    },
    greenText:{
        fontFamily:AVENIR_NEXT_BOLD,
        color:GREEN,
        fontSize:12
    },
    cardRow1:{
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    cvvThruContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"50%",
        marginTop:"4%"
    },
    nameText:{
        fontFamily:AVENIR_NEXT_BOLD,
        color:WHITE,
        fontSize:22
    },
    cardNumberText:{
        fontFamily:AVENIR_NEXT_DEMI_BOLD,
        color:WHITE,
        fontSize:14,
        letterSpacing: 4,
        marginTop:"7%"
    },
    thruText:{
        fontFamily:AVENIR_NEXT_DEMI_BOLD,
        color:WHITE,
        fontSize:13
    }
})

export default Card
