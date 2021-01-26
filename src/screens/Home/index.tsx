// React/Component imports
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Header, Filter, WeatherBanner, WeatherList } from 'components';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

// Services imports
import { getWeatherInfo } from 'services/api';

// Global state imports
import { useRecoilState, useRecoilValue } from 'recoil';
import { userLocationState, weatherState } from 'recoil/atoms';

// Utils imports
import { filters } from 'utils/consts';
import styles from './styles';

const Home = () => {
  // Global State
  const userLocation = useRecoilValue(userLocationState);
  const [weatherData, setWeather] = useRecoilState(weatherState);

  // Local State
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<number | null>(0);

  // Assignments
  const { weather } = weatherData;
  const locationName = weather?.timezone?.replace('/', ', ');

  // Get user Weather based on lat and lon
  const getUserWeather = async () => {
    setLoading(true);

    const { latitude, longitude } = userLocation;

    const weatherResponse = await getWeatherInfo(latitude, longitude);
    setWeather({ weather: weatherResponse.data });
    setLoading(false);
  };

  // componentDidMount-like
  useEffect(() => {
    getUserWeather();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <Header location={locationName} onUpdatePress={getUserWeather} />
        <Filter filters={filters} activeButton={activeFilter} onButtonPress={setActiveFilter} />
        {loading ? (
          <SkeletonContent
            containerStyle={styles.skeleton}
            layout={[{}].map((item, index) => {
              return {
                ...styles.skeleton,
                key: index,
              };
            })}
            isLoading
          />
        ) : (
          <WeatherBanner filter={activeFilter} weather={weather} />
        )}
        <WeatherList weatherList={weather?.daily} listLength={7} loading={loading} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
