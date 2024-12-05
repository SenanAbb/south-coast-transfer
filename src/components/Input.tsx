import { useState } from "react";

interface Props {
  type: string;
  placeholder?: string;
  value: string | number | undefined;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onSelectChange?: (e: string) => void;
  options?: SelectOption[];
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
  const [selected, setSelected] = useState(false);
  return (
    <>
      {type === "select" ? (
        <div className="w-full min-w-[200px]">
          <select
            className={`w-full p-3 border border-blue-500 bg-black-400 ${
              !selected ? "text-[#8b9ca0]" : "text-white/80"
            } placeholder-[#647174] rounded outline-none hover:border-white/80 appearance-none`}
            onChange={(e) => {
              if (onSelectChange) onSelectChange(e.target.value);
              if (!selected) setSelected(!selected);
            }}
          >
            <option value="" disabled selected>
              Number of passengers...
            </option>
            {options?.map((option) => (
              <option key={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      ) : (
        <input
          type={type}
          placeholder={type === "date" ? "Date and time" : placeholder}
          className="w-full p-3 border border-blue-500 bg-black-400 text-white/80 placeholder-[#8b9ca0] rounded outline-none hover:border-white/80"
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
