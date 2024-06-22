import { useLoaderData } from 'react-router-dom';
import { Section, Table } from '../components';
import { IGeneralWeather } from '../components/Weather/weather.interface';
import { useContext, useEffect } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export const ListPage = () => {
  const { setWeatherType } = useContext(WeatherContext);
  useEffect(() => {
    if (localStorage.getItem('weatherType')) {
      setWeatherType(localStorage.getItem('weatherType') as string);
    }
  }, []);

  const { data } = useLoaderData() as { data: IGeneralWeather[] };
  return (
    <Section title="This page will show of latest 100 requests">
      <Table data={data} />
    </Section>
  );
};
