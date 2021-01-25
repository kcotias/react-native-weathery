import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image } from 'react-native';
import { Header, Filter, WeatherBanner } from 'components';
import { Colors } from 'styles';
import Icon from 'react-native-vector-icons/Ionicons';

const filters = [
  {
    id: 0,
    title: 'Today',
  },
  {
    id: 1,
    title: 'Tomorrow',
  },
  {
    id: 2,
    title: 'Next Week',
  },
];

const colorsArray = ['#28E0AE', '#FF0090', '#FFAE00', '#0090FF', '#DC0000', '#0051FF'];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<number | null>(0);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SafeAreaView>
        <Header location="Bahia, Brasil" />
        <Filter filters={filters} activeButton={activeFilter} onButtonPress={setActiveFilter} />
        <WeatherBanner />
        <View style={{ paddingLeft: 20, paddingTop: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: Colors.FONT_DARK,
              marginBottom: 10,
            }}>
            Next 15 Days
          </Text>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={filters}
            renderItem={({ item }) => {
              const cardColor = colorsArray[Math.floor(Math.random() * (5 - 0 + 1)) + 0];
              return (
                <View
                  style={{
                    height: 176,
                    width: 128,
                    backgroundColor: cardColor,
                    margin: 10,
                    borderRadius: 25,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 15,
                    shadowColor: cardColor,
                    shadowOffset: {
                      width: 1,
                      height: 4,
                    },
                    shadowOpacity: 0.7,
                    shadowRadius: 4,
                    elevation: 5,
                  }}>
                  <Text style={{ fontWeight: '600', color: 'white' }}>Monday</Text>
                  <Icon name="sunny-outline" size={50} color="white" />
                  <Text style={{ fontWeight: '600', color: 'white', fontSize: 27 }}>40</Text>
                  <Text style={{ fontWeight: '600', color: 'white' }}>Monday</Text>
                  <Image
                    style={{ position: 'absolute', bottom: -7, left: 87 }}
                    source={require('assets/cardcloud.png')}
                  />
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default React.memo(Home);
