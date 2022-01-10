import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin:2,
    flexDirection:'row',
    
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation:10,
  },
innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
      overflow: 'hidden'
  },


  image: {
  
    aspectRatio: 2,
    resizeMode: 'cover',
    borderRadius: 20,
    height:'90%',
    width:160,
    margin:10,

      
  },

  features: {
    marginVertical:1,
    color: '#5b5b5b',
    fontSize:20,
  },
  description: {
    fontSize: 17,
    lineHeight: 26,
    color:'purple',
    textDecorationLine: 'underline',
    marginVertical:2,
  },
 
  address: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  sales: {
    fontWeight: 'bold',
    color:'orange',
    fontSize: 15,
  }
});

export default styles;