import React from 'react';
import {View, 
ImageBackground, 
Text, 
Pressable, 

} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';


const HomeScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View>
        <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Destination Search')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where would you go shopping?</Text>
      </Pressable> 

     <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Find the Shop!</Text>

      <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby shops!</Text>
        </Pressable>

      </ImageBackground>


    </View>
  );
};

export default HomeScreen;