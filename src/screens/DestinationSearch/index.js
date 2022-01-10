import React, {useState} from "react";
import { View, TextInput, Text, FlatList, Pressable,ImageBackground } from "react-native";
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from "./SuggestionRow";
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


const DestinationSearchScreen = (props) => {

const [inputText, setInputText] = useState('');
   const navigation = useNavigation();
  return (
  <View style={{height:1300}}>
    <View style={styles.container}>
    
     <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided  when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Features');
        }}
      
      styles={{
          textInput: styles.textInput,
        }}
      
        query={{
          key: 'AIzaSyCVRJLW3TJxQe1qjL3Q3Q6sUv9FZEZ6pIw',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
       


      /> 
     </View>

    </View>
  );
};

export default DestinationSearchScreen;  



/*

      <ImageBackground
        source={require('../../../assets/images/filter.png')}
        style={styles.image}>
  
      <TextInput 
      style={styles.textInput}
      placeholder="Where are you going?"
      value={inputText}
      onChangeText ={setInputText}
      />

      <FlatList
      data={searchResults}
      renderItem={ ( { item}) => (
       <Pressable onPress={() => navigation.navigate('Features')} style = {styles.row}>
         <View style = {styles.iconContainer}>
         <Entypo name={"location-pin"}  size ={30} />
       </View>
        <Text style = {styles.locationText}> {item.description}</Text>
       </Pressable> 
       
      )} 
     
      /> 
      </ImageBackground>
   */
    
