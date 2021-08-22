/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  StyleSheet
} from 'react-native';

import {
  Colors,
 
} from 'react-native/Libraries/NewAppScreen';

import StackRoutes from "./src/navigation"


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return <SafeAreaView style={styles.container} >
    <StackRoutes/>
    
  </SafeAreaView>
};

const styles=StyleSheet.create({
container:{width:'100%',height:'100%'}
})

export default App;
