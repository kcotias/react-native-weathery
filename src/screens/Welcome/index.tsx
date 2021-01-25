import React, { useEffect } from 'react';
import { Alert, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '@components/index';
import { getWeatherInfo, getForecastInfo } from 'services/api';
import { getCurrentPosition } from 'services/geolocation';

interface Props {}

const Welcome = ({ navigation }: Props) => {
  const getUserLocation = async () => {
    try {
      const response = await getCurrentPosition();
      // alert(JSON.stringify(response));
      if (response.ok) {
        alert('foi');
      }
      // test request permission
    } catch {
      console.log('deru ruim');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#5D50FE', '#8572FC']}>
      <ImageBackground
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: 16,
          paddingBottom: 30,
        }}
        source={require('@assets/welcome.png')}>
        <Button
          rounded
          title="WEATHERY!"
          onPress={() => navigation.navigate('Home')}
          titleStyle={{ color: '#130E51', fontWeight: '600' }}
        />
      </ImageBackground>
    </LinearGradient>
  );
};

export default Welcome;
