import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height:  600,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    width: '80%',
    height:  120,
    marginTop: -10,
    marginLeft: 30,
    marginHorizontal: 25,
  },
  button: {
    backgroundColor: 'white',
    width: 290,
    height: 50,
    borderRadius: 3,
    marginTop: 190,
    marginLeft: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },

  searchButton: {
    backgroundColor: '#fff',
    height: 50,
    width: Dimensions.get('screen').width -40,
    borderRadius: 3,
    marginHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 0,
    zIndex:20,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;