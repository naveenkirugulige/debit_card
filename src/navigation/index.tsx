import React from 'react';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Credit,DebitCard,Payments,Profile,SetLimit} from "../screens"
import Home from "../screens/Home" 
import { GREEN, WHITE } from '../styles/colors';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();



const BottomTabs=()=> {
  
  return (
    <Tab.Navigator initialRouteName="Debit Card"  barStyle={{ backgroundColor: WHITE }} activeColor={GREEN}>
      <Tab.Screen name="Home" component={Home}
          options={{
          tabBarIcon: () => (
            <Image source={require('../assets/images/Home.png')}/>
          ),
        }}  />
      <Tab.Screen name="Debit Card" component={DebitCard} 
          options={{
          tabBarIcon: () => (
            <Image source={require('../assets/images/Card.png')}/>
          ),
        }}  />
      <Tab.Screen name="Payments" component={Payments} 
          options={{
          tabBarIcon: () => (
            <Image source={require('../assets/images/Payments.png')}/>
          ),
        }} />
      <Tab.Screen name="Credit" component={Credit} 
          options={{
          tabBarIcon: () => (
            <Image source={require('../assets/images/Credit.png')}/>
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile} 
          options={{
          tabBarIcon: () => (
            <Image source={require('../assets/images/user.png')}/>
          ),
        }} />
        
    </Tab.Navigator>
  );
}

const StackRouter=()=>{
  return(
    <Stack.Navigator initialRouteName="BottomTabs">
      <Stack.Screen
          name="SetLimit"
          component={SetLimit}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
        name="BottomTabs"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}/>
    </Stack.Navigator>
  )
}

const StackRoutes = () => (
  <NavigationContainer>
    <StackRouter/>
  </NavigationContainer>
)



export default StackRoutes