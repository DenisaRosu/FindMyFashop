import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    marginHorizontal: 22,
    borderBottomWidth: 3,
    borderColor: 'lightgrey',
  }
});

export default styles;