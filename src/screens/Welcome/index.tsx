import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { Button } from 'components';
import LinearGradient from 'react-native-linear-gradient';

import {
  getCurrentPosition,
  handleLocationDenied,
  requestLocationPermissions,
} from 'services/geolocation';

import { userLocationState } from 'recoil/atoms';
import { useRecoilState } from 'recoil';

import styles from './styles';

const backgroundImg = require('assets/imgs/welcome.png');

const Welcome = ({ navigation }) => {
  // Global State
  const [userLocation, setUserLocation] = useRecoilState(userLocationState);

  // Check user permissions and get lat and lon
  const getUserLocation = async () => {
    try {
      const { ok, latitude, longitude } = await getCurrentPosition();

      if (ok) {
        await setUserLocation({
          latitude,
          longitude,
        });
      } else {
        const locationPermission = await requestLocationPermissions();
        if (locationPermission === 'granted') {
          const { latitude, longitude } = await getCurrentPosition();
          await setUserLocation({
            latitude,
            longitude,
          });
        } else {
          handleLocationDenied();
        }
      }
    } catch (er) {
      console.log(er);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#5D50FE', '#8572FC']}>
      <ImageBackground resizeMode="cover" style={styles.background} source={backgroundImg}>
        <Button
          rounded
          title="WEATHERY!"
          onPress={() => navigation.navigate('Home')}
          titleStyle={styles.buttonStyles}
        />
      </ImageBackground>
    </LinearGradient>
  );
};

export default Welcome;
