"use client";
import { useRouter } from "next/navigation";

interface Props {
  text: string;
  href?: string;
  onClick?: () => void;
  style?: string;
  disabled?: boolean;
}

function Button({ text, href, onClick, style, disabled = false }: Props) {
  const router = useRouter();
  return (
    <button
      className={`bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-400 transition-all duration-300 ${
        disabled && "cursor-not-allowed bg-gray-600 hover:bg-gray-700"
      } ${style}`}
      onClick={href ? () => router.push(href) : onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
