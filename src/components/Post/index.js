import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native';


const Post = (props) => {

    const post = props.post;
  const navigation =  useNavigation();
   const goToPostPage = ()=> {
       navigation.navigate('Post',{postId: post.id});
   }

  return (
  
    <Pressable onPress={goToPostPage}  style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri: post.image}}
        //source={require('../../../assets/images/zara.png')}
       //   source={require({post.image})}
      />
     {/* Features */}
 
      <Text style={styles.features}>
           {post.clothes}          

           {post.shoes} 
  
           {post.accessories} 
    
           {post.sportEquipment}
      </Text>


      {/* Type & Description  = site oficial */}
      <Text style={styles.description} numberOfLines={2}> 
      <Text> Site oficial:  </Text>
      {post.description}
       
      </Text>
       
      {/* Sales */}
    
      <Text style={styles.sales}>
        <Text style={styles.sales}> SALES {post.sales} %</Text>
      </Text>


      {/*  Address */}
      <Text style={styles.address}> Adresa</Text>
    
    </Pressable>
  );
};

export default Post;