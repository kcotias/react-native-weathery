import { StyleSheet } from 'react-native';
import { Colors } from 'styles';

export default StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.FONT_DARK,
    marginBottom: 10,
  },
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
  },
  cardDecor: {
    position: 'absolute',
    bottom: -7,
    left: 87,
  },
  skeleton: {
    height: 176,
    width: 128,
    margin: 10,
    borderRadius: 25,
  },
});
