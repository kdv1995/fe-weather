import { FC, useContext } from 'react';
import {
  formatFromKelvinToCelsius,
  getGradientClass,
  getWeatherIcon,
} from './utils';
import { IGeneralWeather } from './weather.interface';
import { WeatherContext } from '../../context/WeatherContext';

interface WidgetProps {
  widgetData: IGeneralWeather;
}
export const Widget: FC<WidgetProps> = ({ widgetData }) => {
  const { main, name, dayOfWeek } = widgetData;
  const { weatherType } = useContext(WeatherContext);

  const temperatureInCelsius = formatFromKelvinToCelsius(main.temp);

  return (
    <div
      className={`${getGradientClass(weatherType)} max-w-xl flex items-center text-white rounded-lg mt-10 py-5 border-shadow-custom`}
    >
      <div className="flex">
        <div className="border-right border-r-2 border-r-white px-5">
          <h1 className="text-4xl text-white">Weather</h1>
          <span className="mt-4">{weatherType}</span>
          <img
            src={getWeatherIcon(weatherType)}
            alt="weather icon"
            width={164}
            height={113}
          />
        </div>
        <div className="px-5">
          <h1 className="text-4xl">{name}</h1>
          <p className="mt-2">Day of week: {dayOfWeek}</p>
          <p>°C: {temperatureInCelsius.toFixed(2)} </p>
          <p>Temperature in Kelvin: {main.temp}</p>
          <p>Humidity: {main.humidity}</p>
        </div>
      </div>
    </div>
  );
};
