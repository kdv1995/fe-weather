import { useContext, useEffect, useState } from 'react';
import { Button, NotFoundPopup, Search, Section, Widget } from '../components';
import { API } from '../constants';
import { IGeneralWeather } from '../components/Weather/weather.interface';
import { WeatherContext } from '../context/WeatherContext';
import { defaultWeatherObject } from '../constants/defaultWeatherObject';

export const MainPage = () => {
  //Context values
  const { setWeatherType } = useContext(WeatherContext);
  //UseState values
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] =
    useState<IGeneralWeather>(defaultWeatherObject);

  //Popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleFirstInputChange = (value: string) => {
    setQuery(value);
  };

  useEffect(() => {
    if (localStorage.getItem('weatherType')) {
      setWeatherType(localStorage.getItem('weatherType') as string);
    }
    if (localStorage.getItem('weatherData')) {
      setWeatherData(JSON.parse(localStorage.getItem('weatherData') as any));
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
            <Search value={query} onChange={handleFirstInputChange} />
            <Button title="Search by city" onClick={handleSearch} />
          </div>
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
