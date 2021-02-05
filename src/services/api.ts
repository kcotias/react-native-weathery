import axios from 'axios';
import { API_URL, APPID } from '@env';

const api = axios.create({ baseURL: API_URL });

const defaultParams = {
  appid: APPID,
  units: 'metric',
  lang: 'pt_br',
};

export const getWeatherInfo = (lat, lon) => {
  return api.get('/onecall', {
    params: { ...defaultParams, lat, lon, exclude: 'minutely,hourly,alerts' },
  });
};
