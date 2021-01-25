import { selector } from 'recoil';
import { getCurrentPosition } from 'services/geolocation';

import { userLocationState } from './atoms';

export const weatherData = selector({
  key: 'weatherData',
  get: async () => {
    const response = await getCurrentPosition();
    return response;
  },
});
