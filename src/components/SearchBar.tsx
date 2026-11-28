type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
  <input
  type="text"
  placeholder="Search countries..."
  value={value}
  onChange={(e) => onChange(e.target.value)}
  className="w-full border border-slate-300 bg-white text-black rounded-lg p-3 mb-6 shadow-sm"
/>
  );
}