import { FC } from 'react';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

interface SearchWithDebounceProps {
  value: string;
  onChange: (value: string) => void;
  delay: number;
}
export const Search: FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a city name..."
        className="form-input rounded-lg"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export const SearchWithDebounce: FC<SearchWithDebounceProps> = ({
  value,
  onChange,
  delay,
}) => {
  const debouncedChange = (value: string) => {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => onChange(value), delay);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search with debounce..."
        className="form-input rounded-lg"
        value={value}
        onChange={(e) => debouncedChange(e.target.value)}
      />
    </div>
  );
};
