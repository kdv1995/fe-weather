import { createBrowserRouter, Navigate } from 'react-router-dom';
import { APP_ROUTES } from './routes';
import { MainPage } from '../pages/MainPage';
import { ListPage } from '../pages/ListPage';
import { MainLayout } from '../components';
import { ErrorPage } from '../pages/ErrorPage';
export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/main" replace />,
  },
  {
    path: '/main',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: APP_ROUTES.main.link,
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/list',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: APP_ROUTES.list.link,
        element: <ListPage />,
      },
    ],
  },
]);
