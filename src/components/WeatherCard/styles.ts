import { StyleSheet, TextStyle } from 'react-native';

export default StyleSheet.create({
  card: {
    height: 176,
    width: 128,
    margin: 10,
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    fontWeight: '600',
    color: 'white',
  } as TextStyle,
  cardDecor: {
    position: 'absolute',
    bottom: -7,
    left: 87,
  },
  celsius: {
    fontSize: 10,
    fontWeight: '600',
  } as TextStyle,
});
