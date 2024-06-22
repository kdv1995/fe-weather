import cloudy from '../../../public/weather-icons/cloudy.png';
import rainy from '../../../public/weather-icons/rainy.png';
import sunny from '../../../public/weather-icons/sunny.png';
import clear from '../../../public/weather-icons/clear.png';
import thunderstorm from '../../../public/weather-icons/thunderstorm.jpg';
import drizzle from '../../../public/weather-icons/drizzle.jpeg';
export const getGradientClass = (weatherType: string) => {
  switch (weatherType) {
    case 'Clear':
      return 'bg-gradient-to-r from-indigo-400 to-cyan-400';
    case 'Clouds':
      return 'bg-gradient-to-r from-cyan-500 to-blue-500';
    case 'Rain':
      return 'bg-gradient-to-r from-blue-600 to-violet-600';
    case 'Sunny':
      return 'bg-gradient-to-r from-amber-200 to-yellow-400';
    case 'Mist':
      return 'bg-gradient-to-r from-slate-300 to-slate-500';
    case 'Thunderstorm':
      return 'bg-gradient-to-r from-blue-800 to-indigo-900';
    case 'Drizzle':
      return 'bg-gradient-to-r from-blue-500 to-blue-700';
    default:
      return '';
  }
};

export const getWeatherIcon = (weatherType: string): string => {
  switch (weatherType) {
    case 'Clear':
      return clear;
    case 'Clouds':
      return cloudy;
    case 'Rain':
      return rainy;
    case 'Sunny':
      return sunny;
    case 'Thunderstorm':
      return thunderstorm;
    case 'Drizzle':
      return drizzle;
    default:
      return '';
  }
};

export const formatFromKelvinToCelsius = (kalvin: number): number => {
  return kalvin - 273.15;
};
