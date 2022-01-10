import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%',
    backgroundColor: '#FFD580'
  },
  image: {
    width: '100%',
    opacity: 20,
    height:  740,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: '#ffc87c'
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {

  }
});

export default styles;