// Weather related interfaces

export interface WeatherState {
  weather: WeatherResponse | null;
}
export interface WeatherResponse {
  current: Current[];
  daily: Daily[];
  timezone: string;
}

type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Current = {
  feels_like: object | number;
  humidity: number;
  weather: Weather[];
  dt: number;
  temp: number;
};

export interface Daily {
  feels_like: object | number;
  dt: number;
  humidity: number;
  temp: object | number;
  weather: Weather[];
}

// User related interfaces

export interface UserLocationState {
  latitude: number | undefined;
  longitude: number | undefined;
}
