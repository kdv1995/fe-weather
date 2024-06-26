export const defaultWeatherObject = {
  coord: { lon: 0, lat: 0 },
  weather: [
    {
      id: 0,
      main: 'Clouds',
      description: '',
      icon: '01d',
    },
  ],
  base: '',
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
  visibility: 0,
  wind: { speed: 0, deg: 0 },
  clouds: { all: 0 },
  dt: 0,
  timeZone: 0,
  id: 0,
  name: 'Loading',
  cod: 0,
  dayOfWeek: '',
};
