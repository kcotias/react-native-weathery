import React, { useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { WeatherCard } from 'components';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

import { formatTime } from 'utils/helpers';
import { COLORS_ARRAY } from 'utils/consts';
import { Daily } from 'types';
import styles from './styles';

interface WeatherListProps {
  weatherList: Daily[] | undefined;
  listLength: number;
  loading: boolean;
}

const WeatherList = ({ weatherList, listLength, loading }: WeatherListProps) => {
  const weatherData = weatherList?.slice(1, listLength + 1);

  // Every callback function should be memoized
  // to prevent useless re-rendering of child components
  // that use the callback function
  const renderItem = useCallback(({ item }) => {
    const cardColor = COLORS_ARRAY[Math.floor(Math.random() * (5 - 0 + 1)) + 0];
    const dayOfWeek = formatTime(item.dt);

    return <WeatherCard weather={item} dayOfWeek={dayOfWeek} cardColor={cardColor} />;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.header, loading && { paddingTop: 30 }]}>Próximos {listLength} Dias</Text>
      {loading ? (
        <SkeletonContent
          containerStyle={{ flexDirection: 'row' }}
          layout={[{}, {}, {}, {}].map((item, index) => {
            return {
              ...styles.skeleton,
              key: index,
            };
          })}
          isLoading
        />
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={weatherData}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

// Since the component will always be created with the same props, memoizing it is
// the best to avoid unecessary rerender.
export default React.memo(WeatherList);
