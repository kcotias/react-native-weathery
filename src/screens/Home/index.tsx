// React/Component imports
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
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
  const locationData = weather?.timezone?.split('/');
  const locationName = locationData && locationData[1]?.replace('_', ' ');

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
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <Header location={locationName} onUpdatePress={getUserWeather} />
          <Filter filters={filters} activeButton={activeFilter} onButtonPress={setActiveFilter} />
          <View style={{ paddingHorizontal: 20 }}>
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
          </View>
          <WeatherList weatherList={weather?.daily} listLength={7} loading={loading} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
