import { FaHome } from 'react-icons/fa';
import { CiCircleList } from 'react-icons/ci';

interface INavigationItem {
  label: string;
  icon: JSX.Element;
  link: string;
}

export const APP_ROUTES: { [key: string]: INavigationItem } = {
  home: {
    link: '/',
    label: 'Home',
    icon: <FaHome size={30} />,
  },
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
