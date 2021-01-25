import axios from 'axios';

const api = axios.create({ baseURL: 'https://api.openweathermap.org/data/2.5' });

const defaultParams = {
  appid: 'b9e3af75f06b113cd5904abe1b4de925',
  units: 'metric',
};

export const getWeatherInfo = ({ lat, lon }) => {
  return api.get('/weather', { params: { ...defaultParams, lat, lon } });
};

export const getForecastInfo = ({ lat, lon }) => {
  return api.get('/forecast/daily', { params: { ...defaultParams, lat, lon, cnt: 15 } });
};
