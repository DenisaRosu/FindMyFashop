import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 2,
    resizeMode: 'cover',
    borderRadius: 20,
  },

  features: {
    marginVertical:6,
    color: '#5b5b5b',
    fontSize:20,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    color:'purple',
    textDecorationLine: 'underline',
    marginVertical:2,
  },

  button: {
  color: 'black',
  fontSize: 18,
    lineHeight: 26,
    marginVertical:2,
  },

 longDescription: {
    fontSize: 16,
    lineHeight: 26,
    color:'purple',
    textDecorationLine: 'underline',
    marginVertical:2,
  },
 
  address: {
    lineHeight: 40,
    fontWeight: 'bold',
    fontSize: 20,
  },
  sales: {
    fontWeight: 'bold',
    color:'orange',
    fontSize: 20,
  }
});

export default styles;