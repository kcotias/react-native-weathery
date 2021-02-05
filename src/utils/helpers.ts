import animations from 'assets/animations';

// HELPERS

export const formatTime = (time: number | undefined): string => {
  const dtFormat = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
  });

  return dtFormat.format(new Date(time! * 1000));
};

const time = new Date().getHours();

export const setWeatherAnimationAsset = (weather: string | undefined): string => {
  const isDayTime = time > 6 && time < 18;
  switch (weather) {
    case 'Thunderstorm':
      return animations.thunders;
    case 'Rain':
      return isDayTime ? animations.rain : animations.rain_night;
    case 'Drizzle': //
      return isDayTime ? animations.rain : animations.rain_night;
    case 'Snow':
      return isDayTime ? animations.snow : animations.snow_night;
    case 'Atmosphere':
      return animations.atmosphere;
    case 'Clear':
      return isDayTime ? animations.clear : animations.clear_night;
    case 'Clouds':
      return isDayTime ? animations.clouds : animations.clouds_night;
    default:
      return animations.loading_weather;
  }
};

export const setWeatherIconAsset = (weather: string | undefined): string => {
  switch (weather) {
    case 'Thunderstorm':
      return 'thunderstorm-outline';
    case 'Rain':
      return 'rainy-outline';
    case 'Drizzle': //
      return 'rainy-outline';
    case 'Snow':
      return 'snow-outline';
    case 'Atmosphere':
      return 'partly-sunny-outline';
    case 'Clear':
      return 'sunny-outline';
    case 'Clouds':
      return 'partly-sunny-outline';
    default:
      return 'sunny';
  }
};

export const capitalizeFirstLetter = (txt: string | undefined): string => {
  return txt!.charAt(0).toUpperCase() + txt!.slice(1);
};
