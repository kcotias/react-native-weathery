import { StyleSheet, TextStyle } from 'react-native';
import { Colors } from 'styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 314,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    margin: 20,
    alignSelf: 'center',
  },
  backgroundContainer: {
    width: '100%',
    height: 314,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  background: {
    borderRadius: 40,
    opacity: 0.3,
  },
  temperature: {
    fontSize: 120,
    color: 'white',
  } as TextStyle,
  celsius: {
    fontSize: 28,
    fontWeight: '600',
  } as TextStyle,
  weatherDescription: {
    fontSize: 21,
    marginBottom: 15,
    color: 'white',
    marginTop: -10,
  } as TextStyle,
  humidityTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: 'white',
    marginBottom: 5,
  } as TextStyle,
  humidityValue: {
    fontSize: 27,
    fontWeight: '600',
    color: 'white',
    opacity: 0.4,
  } as TextStyle,
  animation: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    width: 200,
    height: 200,
  },
});
