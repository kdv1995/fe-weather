import { createContext, useState } from 'react';

interface WeatherContextProps {
  weatherType: string;
  setWeatherType: (weather: string) => void;
}

export const WeatherContext = createContext<WeatherContextProps>(
  {} as {
    weatherType: string;
    setWeatherType: (weather: string) => void;
  },
);

export const WeatherContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weatherType, setWeatherType] = useState('Clouds');

  const contextValue = {
    weatherType,
    setWeatherType,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
