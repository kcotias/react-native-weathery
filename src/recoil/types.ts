// Weather related interfaces

export interface WeatherState {
  readonly loading: boolean;
  readonly weather: IWeatherResponse | null;
}

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

type Wind = {
  speed: number;
  deg: number;
};

type Sys = {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export interface IWeatherResponse {
  weather: Weather[];
  base: string;
  main: Main;
  wind: Wind;
  sys: Sys;
  timezone: number;
  name: string;
}

// User related interfaces

export interface UserLocationState {
  readonly latitude: number;
  readonly longitude: number;
}
