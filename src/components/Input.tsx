import Select, { StylesConfig, SingleValue } from "react-select";

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

const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#35474a",
    borderColor: "#57d7f7",
    color: "#35474a",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "2px",
    cursor: "pointer",
  }),
  placeholder: (styles) => ({ ...styles, color: "rgb(245 245 245 / 0.8)" }),
  singleValue: (styles) => ({ ...styles, color: "rgb(245 245 245 / 0.8)" }),
};

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
        <Select
          options={options}
          styles={colourStyles}
          placeholder={placeholder}
          value={options && options.find((option) => option.value === value)}
          onChange={(newValue: unknown) => {
            const selectedOption = newValue as SingleValue<SelectOption>;
            if (onSelectChange && selectedOption) {
              onSelectChange(selectedOption.value);
            }
          }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-3 border border-blue-500 bg-black-400 text-white/80 placeholder-white/80 rounded outline-none hover:border-white/80"
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
