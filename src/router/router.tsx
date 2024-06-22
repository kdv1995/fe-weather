import { createBrowserRouter } from 'react-router-dom';
import { APP_ROUTES } from './routes';
import { MainPage } from '../pages/MainPage';
import { ListPage } from '../pages/ListPage';
import { MainLayout } from '../components';
import { ErrorPage } from '../pages/ErrorPage';
import { usersLoader } from './router-loader';
export const MainRouter = createBrowserRouter([
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
        loader: usersLoader,
      },
    ],
  },
]);
