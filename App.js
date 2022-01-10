/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Entype from 'react-native-vector-icons/Entypo';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './src/screens/Home';
/*import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import FeaturesScreen from  '/Users/denisa/FindMyFashop/src/screens/Features ';
*/

import Router from './src/navigation/Router';


const App: () => React$Node = () => {
  
 return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router/>
     

    </>
  );
};




export default App;
