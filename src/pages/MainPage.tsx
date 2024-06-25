import { useContext, useEffect, useState } from 'react';
import {
  Button,
  Main,
  NotFoundPopup,
  Search,
  Section,
  Widget,
} from '../components';
import { API } from '../constants';
import { IGeneralWeather } from '../components/Weather/weather.interface';
import { WeatherContext } from '../context/WeatherContext';
import { defaultWeatherObject } from '../constants/defaultWeatherObject';

export const MainPage = () => {
  const [reason, setReason] = useState('City not found');
  const [reasonTitle, setReasonTitle] = useState('Error');
  //Context values
  const { setWeatherType } = useContext(WeatherContext);
  //UseState values
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] =
    useState<IGeneralWeather>(defaultWeatherObject);

  //Popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClosePopup = () => {
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 500);
  };
  const handleOpenPopup = () => {
    setTimeout(() => {
      setIsPopupVisible(true);
    }, 500);
  };

  const handleFirstInputChange = (value: string) => {
    setQuery(value);
  };

  const handleGeolocationOnStart = async (location: GeolocationPosition) => {
    try {
      const response = await fetch(
        `${API.url}/weather/coordinates?lat=${location.coords.latitude}&lon=${location.coords.longitude}`,
      );
      if (!response.ok) {
        throw new Error(`Error fetching weather data: ${response.statusText}`);
      }

      const data: IGeneralWeather = await response.json();
      setWeatherData(data);
      localStorage.setItem('weatherData', JSON.stringify(data));
      localStorage.setItem('weatherType', data.weather[0].main);
    } catch (error) {
      console.error('Error fetching or processing weather data:', error);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation && navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(handleGeolocationOnStart, (error) => {
        setReason(
          `${error.message}. Please enable geolocation or search for a city`,
        );
        setReasonTitle('Geolocation error');
        setWeatherData(defaultWeatherObject);
        handleOpenPopup();
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('weatherType')) {
      setWeatherType(localStorage.getItem('weatherType') as string);
    }
    if (localStorage.getItem('weatherData')) {
      setWeatherData(JSON.parse(localStorage.getItem('weatherData') as any));
    } else {
      getLocation();
    }
  }, []);

  const handleSearch = async () => {
    await fetch(`${API.url}/weather/city?name=${query}`)
      .then((data) => data.json())
      .then((data) => {
        const weatherType = data.weather[0].main;
        setWeatherType(weatherType);
        setWeatherData(data);
        localStorage.setItem('weatherData', JSON.stringify(data));
        localStorage.setItem('weatherType', weatherType);
      })
      .catch(() => {
        handleOpenPopup();
      });
  };

  return (
    <Main css="flex-auto">
      <Section title="Weather by city">
        <div className="mt-10 flex gap-10">
          <div className="flex gap-5">
            <Search value={query} onChange={handleFirstInputChange} />
            <Button title="Search ..." onClick={handleSearch} />
          </div>
        </div>
        <Widget widgetData={weatherData} />
        <NotFoundPopup
          title={reasonTitle}
          reason={reason}
          isVisible={isPopupVisible}
          onClose={handleClosePopup}
        />
      </Section>
    </Main>
  );
};
