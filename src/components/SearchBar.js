export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      className="search-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
