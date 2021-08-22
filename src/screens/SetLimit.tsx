import React,{useState} from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    SafeAreaView,
    TextInput
  } from 'react-native';
import { GREEN, GREY, LIGHT_GREEN, PURPLE, WHITE } from '../styles/colors';
import { Appbar } from 'react-native-paper';
import { AVENIR_NEXT, AVENIR_NEXT_BOLD, AVENIR_NEXT_DEMI_REGULAR } from '../styles/typography';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SetLimit = ({navigation,route}) => {
    const [limit,setLimit]=useState('')
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.topRow}>
                <TouchableOpacity onPress={()=>{navigation.navigate("BottomTabs")}}>
                     <Image style={{height:30,width:30}} source={require("../assets/images/back.png")}/>
                </TouchableOpacity>
                <Image style={styles.logo} source={require("../assets/images/Logo.png")}/>
                </View>
                <Text style={styles.boldText}>Spending limit</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{flexDirection:"row",justifyContent:"space-between",width:"80%"}}>
                <Image  source={require("../assets/images/limit2.png")}/>
                <Text>Set a weekly debit card spending limit</Text>
                </View>
                <View style={[styles.dollarsContainer,{marginTop:"5%"}]}>
                    <View style={styles.greenDollarSymbol}>
                        <Text style={[styles.normalText,{fontSize:12}]}>S$</Text>
                    </View>
                    <TextInput 
                    keyboardType="numeric"
                    value={limit} 
                    onChangeText={(val)=>{setLimit(val)}} 
                    style={{fontFamily:AVENIR_NEXT_BOLD,fontSize:24,width:"100%",marginLeft:"10%"}}
                    />

                </View>
                <View style={{borderBottomColor: GREY, borderBottomWidth: 0.5,marginTop:'5%'}}/>
                <Text style={styles.bottomText}>Here weekly means the last 7 days - not the calendar week</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:"10%"}}> 
                    <TouchableOpacity onPress={()=>{setLimit("5000")}}>
                         <View style={styles.suggestionLimitContainer}><Text style={styles.limitText}>S$ 5,000</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setLimit("10000")}}>
                         <View style={styles.suggestionLimitContainer}><Text style={styles.limitText}>S$ 10,000</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setLimit("20000")}}>
                         <View style={styles.suggestionLimitContainer}><Text style={styles.limitText}>S$ 20,000</Text></View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                style={[styles.button,{backgroundColor:limit.length<=0?GREY:GREEN}]} 
                onPress={()=>{ 
                    route.params.setWeeklyLimit(limit)
                    navigation.navigate("BottomTabs")
                }}
                disabled={limit.length<=0}
                
                >
                   <Text style={styles.normalText}>Save</Text>
               </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        display:"flex",
        width:"100%",
        height:"100%"
    },
    boldText:{
        fontFamily:AVENIR_NEXT_BOLD,
        color:WHITE,
        fontSize:24,
        marginLeft:"5%"
    },
    topContainer:{
        height:'30%',
        width:"100%",
        backgroundColor:PURPLE
    },
    topRow:{
        flexDirection:'row',
        justifyContent:"space-between",
        padding:"5%"
    },
    bottomContainer:{
        backgroundColor:WHITE,
        height:"100%",
        width:"100%",
        borderTopLeftRadius:30, 
        borderTopRightRadius:30,
        marginTop:"-20%",
        paddingTop:"10%",
        paddingHorizontal:"5%"
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
    bottomText:{
        fontFamily:AVENIR_NEXT_DEMI_REGULAR,
        color:GREY,
        fontSize:13,
        marginTop:'5%'
    },
    suggestionLimitContainer:{
        width:100,
        height:40,
        backgroundColor:LIGHT_GREEN,
        marginTop:'10%',
        justifyContent:"center",
        alignItems:"center"
    },
    limitText:{
        fontFamily:AVENIR_NEXT_BOLD, 
        color:GREEN,
        fontSize:12
    },
    button:{
        width:250,
        height:50,
        backgroundColor:GREEN,
        borderRadius:40,
        marginTop:"70%",
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center"
    }
    
})
export default SetLimit
