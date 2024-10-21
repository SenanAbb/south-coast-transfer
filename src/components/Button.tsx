interface Props {
  text: string;
  onClick: () => void;
  style?: string;
}

function Button({ text, onClick, style }: Props) {
  return (
    <button
      className={`bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-400 transition-all duration-300 ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
