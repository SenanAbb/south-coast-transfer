"use client";
import { useRouter } from "next/navigation";

interface Props {
  text: string;
  href?: string;
  onClick?: () => void;
  style?: string;
}

function Button({ text, href, onClick, style }: Props) {
  const router = useRouter();

  return (
    <button
      className={`bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-400 transition-all duration-300 ${style}`}
      onClick={href ? () => router.push(href) : onClick}
    >
      {text}
    </button>
  );
}

export default Button;
