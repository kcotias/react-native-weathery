import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Colors } from 'styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface WeatherBannerProps {
  data?: any;
}

const WeatherBanner: React.FC<WeatherBannerProps> = ({ data }: HeaderProps) => (
  <View
    style={{
      width: 374,
      height: 314,
      backgroundColor: Colors.PRIMARY,
      borderRadius: 40,
      margin: 20,
    }}>
    <ImageBackground
      style={{ width: 374, height: 314, justifyContent: 'center', alignItems: 'center' }}
      imageStyle={{ borderRadius: 40, opacity: 0.3 }}
      source={require('assets/background.png')}>
      <Text style={{ fontSize: 120, color: 'white' }}>25</Text>
      <Text style={{ fontSize: 21, marginBottom: 15, color: 'white', marginTop: -10 }}>
        Clouds & sun
      </Text>
      <Text style={{ fontSize: 19, fontWeight: '600', color: 'white', marginBottom: 5 }}>
        Humidity
      </Text>
      <Text style={{ fontSize: 27, fontWeight: '600', color: 'white', opacity: 0.4 }}>35</Text>
      <Icon
        style={{ position: 'absolute', bottom: 10, right: 15 }}
        name="sunny-outline"
        size={100}
        color="white"
      />
    </ImageBackground>
  </View>
);

export default WeatherBanner;
