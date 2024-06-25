import { FC } from 'react';

interface MainProps {
  children?: React.ReactNode;
  css?: string;
}
export const Main: FC<MainProps> = ({ children, css }) => {
  return <main className={`${css}`}>{children}</main>;
};
