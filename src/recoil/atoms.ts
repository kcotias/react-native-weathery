import { atom } from 'recoil';
import { WeatherState, UserLocationState } from 'types';

export const userLocationState = atom<UserLocationState>({
  key: 'userLocationState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});

export const weatherState = atom<WeatherState>({
  key: 'weatherState',
  default: {
    weather: [],
  },
});
