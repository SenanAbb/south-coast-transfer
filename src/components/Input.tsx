interface Props {
  type: string;
  placeholder?: string;
  min?: number;
  max?: number;
}

function Input({ type, placeholder, min, max }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 border border-blue-500 bg-black-400 text-white/80 placeholder-white/80 rounded outline-none"
      min={min}
      max={max}
    />
  );
}

export default Input;
