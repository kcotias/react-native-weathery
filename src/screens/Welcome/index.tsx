import React, { useCallback, useEffect, useState, useRef } from 'react';
import { ImageBackground, AppState } from 'react-native';
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
  // Gets appstate status to check if its on background or foreground
  // and make sure location is fetched on app resume after heading
  // to location settings
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

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

  // Triggered when appstate changes and re-runs
  // getUseLocation function
  const handleAppStateChange = (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      getUserLocation();
    }
    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  useEffect(() => {
    // Subscribe to appstate changes
    AppState.addEventListener('change', handleAppStateChange);
    getUserLocation();

    return () => {
      // Unsubscribe from appstate changes
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleButtonPress = useCallback(async () => {
    const locationPermission = await requestLocationPermissions();
    if (locationPermission === 'granted') {
      navigation.navigate('Home');
    } else {
      getUserLocation();
    }
  }, []);

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#5D50FE', '#8572FC']}>
      <ImageBackground resizeMode="cover" style={styles.background} source={backgroundImg}>
        <Button
          rounded
          title="WEATHERY!"
          onPress={handleButtonPress}
          titleStyle={styles.buttonStyles}
        />
      </ImageBackground>
    </LinearGradient>
  );
};

export default Welcome;
