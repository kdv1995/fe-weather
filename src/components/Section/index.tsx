import { FC } from 'react';
interface SectionProps {
  title: string;
  children?: React.ReactNode;
}
export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="p-5">
      <h2 className="text-3xl mt-10 flex-grow">{title}</h2>
      {children}
    </section>
  );
};
