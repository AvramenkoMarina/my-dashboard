interface SearchProps {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}

export default function Search({ value, onChange, placeholder }: SearchProps) {
  return (
    <input
      className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
