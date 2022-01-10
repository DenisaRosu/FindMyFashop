import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles.js';

const FeaturesScreen = (props) => {
  const [clothes, setClothes] = useState(0);
  const [shoes, setShoes] = useState(0);
  const [accessories, setAccessories] = useState(0);
  const [sportEquipment, setSport] = useState(0);

  const navigation = useNavigation();
  //const route = useRoute();

  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      
      <View> 
      
        <View style={styles.row}>
           <View>
            <Text style={{fontWeight: 'bold' , fontSize:20}}>Clothes</Text>
            </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setClothes(Math.max(0))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'red'}}>N</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{clothes}</Text>

            <Pressable
              onPress={() => setClothes( 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'green'}}>Y</Text>
            </Pressable>
          </View>
        </View>
     

        <View style={styles.row}>
           <View>
            <Text style={{fontWeight: 'bold' , fontSize:20}}>Shoes</Text>
            </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setShoes(Math.max(0))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'red'}}>N</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{shoes}</Text>

            <Pressable
              onPress={() => setShoes( 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'green'}}>Y</Text>
            </Pressable>
          </View>
        </View>  


        <View style={styles.row}>
           <View>
            <Text style={{fontWeight: 'bold' , fontSize:20}}>Accessories</Text>
            </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setAccessories(Math.max(0))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'red'}}>N</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{accessories}</Text>

            <Pressable
              onPress={() => setAccessories( 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'green'}}>Y</Text>
            </Pressable>
          </View>
        </View>   




        <View style={styles.row}>
           <View>
            <Text style={{fontWeight: 'bold' , fontSize:20}}>Sport Equipment</Text>
            </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => setSport(Math.max(0))}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'red'}}>N</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 16}}>{sportEquipment}</Text>

            <Pressable
              onPress={() => setSport( 1)}
              style={styles.button}>
              <Text style={{fontSize: 20, color: 'green'}}>Y</Text>
            </Pressable>
          </View>
        </View> 





    </View>

  
      <Pressable
        onPress={ () =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
              params: {
                guests:clothes+shoes,
                //viewport: route.params.viewport,
              }
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: 'orange',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default FeaturesScreen;