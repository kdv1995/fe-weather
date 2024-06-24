import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../router/routes';
import { getGradientClass } from '../Weather/utils';
import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

export const Header = () => {
  const { weatherType } = useContext(WeatherContext);
  return (
    <header className={`${getGradientClass(weatherType)} p-5`}>
      <nav>
        <ul className="flex gap-10">
          {Object.keys(APP_ROUTES).map((key) => {
            return (
              <li key={key} className="px-4 py-2">
                <NavLink
                  to={APP_ROUTES[key].link}
                  className={({ isActive }) => {
                    const defaultClasses = 'rounded px-4 py-1';
                    const activeClasses = 'bg-white';
                    return isActive
                      ? `${defaultClasses} ${activeClasses}`
                      : defaultClasses;
                  }}
                >
                  {APP_ROUTES[key].label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
