import { FaHome } from 'react-icons/fa';
import { CiCircleList } from 'react-icons/ci';
import { To } from 'react-router-dom';

interface INavigationItem {
  label: string;
  icon: JSX.Element;
  link: To | string;
}

export const APP_ROUTES: { [key: string ]: INavigationItem } = {
  main: {
    link: '/main',
    label: 'Main',
    icon: <FaHome size={30} />,
  },
  list: {
    link: '/list',
    label: 'List',
    icon: <CiCircleList size={30} />,
  },
};
