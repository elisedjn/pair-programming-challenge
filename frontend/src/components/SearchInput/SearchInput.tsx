type SearchInputProps = {
  value: string;
  onChange: (newSearch: string) => void;
};
export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="w-full text-right">
      <input
        name="search"
        className="border p-2 rounded-md"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
