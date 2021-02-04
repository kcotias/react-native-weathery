import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import LottieView from 'lottie-react-native';

import { capitalizeFirstLetter, setWeatherAnimationAsset } from 'utils/helpers';
import { WeatherResponse } from 'types';
import styles from './styles';
import { iPhoneXLike } from 'utils/dimensions';

const backgroundAsset = require('assets/imgs/background.png');

interface WeatherBannerProps {
  weather: WeatherResponse | null;
  filter: number | null;
}

const WeatherBanner: React.FC<WeatherBannerProps> = ({ weather, filter }: WeatherBannerProps) => {
  const weatherSet = {
    0: weather?.current,
    1: weather?.daily[1],
    2: weather?.daily[7],
  };

  const temperature =
    typeof weatherSet[filter]?.feels_like === 'object'
      ? weatherSet[filter]?.feels_like.day
      : weatherSet[filter]?.feels_like;
  const weatherDescription = weatherSet[filter]?.weather[0].description;
  const weatherMainStatus = weatherSet[filter]?.weather[0]?.main;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundContainer}
        imageStyle={styles.background}
        source={backgroundAsset}>
        <Text style={styles.temperature}>
          {temperature.toFixed()}
          <Text style={styles.celsius}>&#8451;</Text>
        </Text>
        <Text style={styles.weatherDescription}>{capitalizeFirstLetter(weatherDescription)}</Text>
        <Text style={styles.humidityTitle}>Humidade</Text>
        <Text style={styles.humidityValue}>{weather?.current?.humidity}</Text>
        <LottieView
          style={[styles.animation, !iPhoneXLike && styles.smallerAnimation]}
          source={setWeatherAnimationAsset(weatherMainStatus)}
          autoPlay
          loop
        />
      </ImageBackground>
    </View>
  );
};

export default WeatherBanner;
