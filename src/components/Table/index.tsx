import { FC } from 'react';
import { IGeneralWeather } from '../Weather/weather.interface';
import { convertUnixTime, formatFromKelvinToCelsius } from '../Weather/utils';
interface TableProps {
  data: IGeneralWeather[];
}
export const Table: FC<TableProps> = ({ data }) => {
  const headers = ['ID', 'City', 'Date', 'Temperature', 'Code'];

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {headers.map((header) => (
                    <th key={header} scope="col" className="px-6 py-4">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map(({ id, name, dt, main, cod }) => (
                  <tr key={id} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{name}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {convertUnixTime(dt)}
                    </td>

                    <td className="whitespace-nowrap px-6 py-4">
                      {formatFromKelvinToCelsius(main.temp).toFixed(2)} °C
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{cod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
