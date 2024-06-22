import { IGeneralWeather } from '../components/Weather/weather.interface';
import { API } from '../constants';

export const usersLoader = async (): Promise<{ data: IGeneralWeather }> => {
  const response = await fetch(`${API.url}/weather/latest`);
  const data = await response.json();
  return { data };
};
