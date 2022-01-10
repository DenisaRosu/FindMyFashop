import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import FeaturesScreen from "/Users/denisa/FindMyFashop/src/screens/Features ";
import PostScreen from "../screens/PostScreen";
import HomeScreen from "../screens/Home"

import HomeTabNavigator from "../navigation/HomeTabNavigator";
const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
           headerShown: false
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination"
          }}
        />
        <Stack.Screen
          name={"Features"}
          component={FeaturesScreen}
          options={{
            title: "What are you looking for?"
          }}
        />

      <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: " "
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;