import { createBrowserRouter } from 'react-router-dom';
import { APP_ROUTES } from './routes';
import { MainPage } from '../pages/MainPage';
import { ListPage } from '../pages/ListPage';
import { MainLayout } from '../components';
import { ErrorPage } from '../pages/ErrorPage';
export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: APP_ROUTES.main.link,
        element: <MainPage />,
      },
      {
        path: APP_ROUTES.list.link,
        element: <ListPage />,
      },
    ],
  },
]);
