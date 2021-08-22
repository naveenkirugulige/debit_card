import React,{useState,useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions
  } from 'react-native';
import { PURPLE, WHITE } from '../styles/colors';
import {TopPart,Card,Topup,WeeklySpent,Freezrcard,NewCard,Deactivate,LimitGraph} from '../components'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//Test card
const cardDetails={name:"Mark Henry",number:"5647  3411  2413  2020",expiry:"12/20",cvv:"456"}
  
const DebitCard = ({navigation,route}) => {
    
    const [weeklyLimit,setWeeklyLimit]=useState(0)
    
    useEffect(() => {
        console.log(route)
        if(route.params&&route.params.limitValue>0){
            setWeeklyLimit(route.params.limitValue)
        }
    }, [route])
    return (
        < View style={styles.container}>   
        <View style={{position:"absolute",left:"5%"}}>
            <TopPart balance={"3,000"}/> 
        </View>
        <View style={{height:height}}>
             <ScrollView>
             <View style={styles.transparentPart}/>
                <View style={styles.nonTransparent}>
                        <Card cardDetails={cardDetails}/>
                </View>
                <View style={styles.actions}>
                    {parseInt(weeklyLimit)>0 &&
                    <LimitGraph weeklyLimit={weeklyLimit}/>
                    }
                    <Topup/>
                    <WeeklySpent weeklyLimit={weeklyLimit} setWeeklyLimit={setWeeklyLimit} navigation={navigation}/>
                    <Freezrcard/>
                    <NewCard/>
                    <Deactivate/>
                </View>
                 <View style={{height:300,width:"100%",backgroundColor:WHITE}}/>
                </ScrollView>
                </View>
                
          
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:height,
        backgroundColor:PURPLE,
        display:"flex"
    },
    scrollerContainer:{
        width:width,
        flex:1,  
        height:height
    },
    transparentPart:{
        width:width, 
        paddingTop:'70%'
    },
    nonTransparent:{
        width:width,
        backgroundColor:WHITE,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    actions:{
        backgroundColor:WHITE,
        justifyContent:"space-around",
        height:"40%"
    }
})

export default DebitCard
