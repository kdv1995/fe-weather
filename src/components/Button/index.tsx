import { FC } from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="bg-sky-400 rounded-lg p-2 hover:text-red-600"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
