import React, { useCallback } from 'react';
import {View, Text, Image, Pressable,Linking, Button, ScrollView,} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';



const unsupportedURL = "slack://open?team=123456";
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const Post = (props) => {

    const post = props.post;
  return (
 <ScrollView>
    <View style={styles.container}>


    
      {/* Image  */}
      <Image
        style={styles.image}
         source={{uri: post.image}}
        //source={require('../../../assets/images/zara.png')}
          //source={require({post.image})}
      />
      
     {/* Features */}
 
      <Text style={styles.features}>
           {post.clothes}          

           {post.shoes} 
  
           {post.accessories} 
    
           {post.sportEquipment}
      </Text>

  {/* Type & Description  = site oficial */}
      
       
      
      {/* Sales */}
    
      <Text style={styles.sales}>
        <Text style={styles.sales}> SALES {post.sales} %</Text>
      </Text>


      {/*  Address */}
      <Text style={styles.address}> Adresa</Text>
     
     <View style={styles.container}>
      <OpenURLButton url={post.description}>OPEN OFFICIAL SITE</OpenURLButton>
      
      </View>
       </View>
    </ScrollView>
  );
};

export default Post;