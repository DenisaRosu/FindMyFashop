import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMaps from '../screens/SearchResultsMap';
const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {


  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#FF8C00',
      indicatorStyle: {
        backgroundColor: '#FF8C00',
      }
    }}>
      <Tab.Screen name={"list"} component={SearchResults}/>
      <Tab.Screen name={"map"} component={SearchResultsMaps}/>
      
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;