import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Daily, WeatherResponse } from 'types';
import { setWeatherIconAsset } from 'utils/helpers';
import styles from './styles';

const cloudDecor = require('assets/imgs/cardcloud.png');

interface WeatherBannerProps {
  weather: Daily;
  dayOfWeek: string;
  cardColor: string;
}

const WeatherCard = ({ weather, dayOfWeek, cardColor }: WeatherBannerProps) => {
  return (
    <View style={[styles.card, { backgroundColor: cardColor, shadowColor: cardColor }]}>
      <Text style={styles.cardText}>{dayOfWeek}</Text>
      <Icon name={setWeatherIconAsset(weather.weather[0].main)} size={50} color="white" />
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.cardText}>
          Max {weather.temp.max.toFixed()} <Text style={styles.celsius}>&#8451;</Text>
        </Text>
        <Text style={styles.cardText}>
          Min {weather.temp.min.toFixed()} <Text style={styles.celsius}>&#8451;</Text>
        </Text>
      </View>
      <Image style={styles.cardDecor} source={cloudDecor} />
    </View>
  );
};

export default React.memo(WeatherCard);
