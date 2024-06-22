import { FC, useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import { getGradientClass } from '../Weather/utils';

interface ContainerProps {
  children?: React.ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  const { weatherType } = useContext(WeatherContext);
  return (
    <div className={`${getGradientClass(weatherType)} container mx-auto flex flex-col min-h-screen`}>
      {children}
    </div>
  );
};
