import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: { paddingBottom: 50 },
  listArea: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  skeleton: {
    width: '100%',
    height: 314,
    borderRadius: 40,
    alignSelf: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
});
