import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 0,
    marginVertical: 20,
    height: 45,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonContainer: {
    height: 35,
    marginRight: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
  },
});
