interface Props {
  type: string;
  placeholder?: string;
  value: string | number | undefined;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: number[];
  min?: number;
  max?: number;
}

function Input({
  type,
  placeholder,
  value,
  onChange,
  onSelectChange,
  options,
  min,
  max,
}: Props) {
  return (
    <>
      {type === "select" ? (
        <div className="w-full">
          <select
            className="w-full p-3 border border-blue-500 bg-black-400 text-white/80 placeholder-white/80 rounded outline-none z-0"
            onChange={onSelectChange}
            defaultValue={options ? options[0] : 1}
          >
            {options?.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-3 border border-blue-500 bg-black-400 text-white/80 placeholder-white/80 rounded outline-none"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
      )}
    </>
  );
}

export default Input;
