import { useState } from "react";

interface Props {
  type: string;
  placeholder?: string;
  min?: number;
  max?: number;
}

function Input({ type, placeholder, min, max }: Props) {
  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    if (type === "date" || type === "time") {
      setInputType(type); // Cambia el tipo al correspondiente (date o time)
    }
  };

  const handleBlur = () => {
    if (type === "date" || type === "time") {
      setInputType("text"); // Vuelve al tipo text cuando se pierde el foco
    }
  };

  return (
    <input
      type={inputType}
      placeholder={placeholder}
      className="w-full p-3 border border-blue-500 bg-black-400 text-white/80 placeholder-white/80 rounded outline-none"
      min={min}
      max={max}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

export default Input;
