import { useContext, useEffect, useState } from 'react';
import {
  Button,
  NotFoundPopup,
  Search,
  SearchWithDebounce,
  Section,
  Widget,
} from '../components';
import { API } from '../constants';
import { IGeneralWeather } from '../components/Weather/weather.interface';
import { WeatherContext } from '../context/WeatherContext';
import { defaultWeatherObject } from '../constants/defaultWeatherObject';

export const MainPage = () => {
  const { setWeatherType } = useContext(WeatherContext);
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [weatherData, setWeatherData] =
    useState<IGeneralWeather>(defaultWeatherObject);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  useEffect(() => {
    if (localStorage.getItem('weatherData')) {
      setWeatherData(JSON.parse(localStorage.getItem('weatherData') as any));
    }
  }, []);

  const handleFirstInputChange = (value: string) => {
    setFirstInput(value);
  };

  const handleSecondInputChange = (value: string) => {
    setSecondInput(value);
  };

  const handleSearch = async () => {
    await fetch(`${API.url}/weather/city?name=${firstInput}`)
      .then((data) => data.json())
      .then((data) => {
        const weatherType = data.weather[0].main;
        setWeatherType(weatherType);
        setWeatherData(data);
        localStorage.setItem('weatherData', JSON.stringify(data));
      })
      .catch(() => {
        setTimeout(() => {
          setIsPopupVisible(true);
        }, 500);
      });
  };

  return (
    <>
      <Section title="Weather by city">
        <div className="mt-10 flex gap-10">
          <div className="flex gap-5">
            <Search value={firstInput} onChange={handleFirstInputChange} />
            <Button title="Search by city" onClick={handleSearch} />
          </div>
          <SearchWithDebounce
            value={secondInput}
            onChange={handleSecondInputChange}
            delay={500}
          />
        </div>
        <Widget widgetData={weatherData} />
        <NotFoundPopup
          reason="The data on the city is not found. Please try again."
          isVisible={isPopupVisible}
          onClose={handleClosePopup}
        />
      </Section>
    </>
  );
};
