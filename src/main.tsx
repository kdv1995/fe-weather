import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './router/router';
import { WeatherContextProvider } from './context/WeatherContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WeatherContextProvider>
        <RouterProvider router={MainRouter} />
    </WeatherContextProvider>
  </React.StrictMode>,
);
