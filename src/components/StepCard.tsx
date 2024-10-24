interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function StepCard({ title, description, icon }: Props) {
  return (
    <div className="min-w-52 min-h-72 p-10 drop-shadow-xl bg-white-pure/80 flex flex-col gap-4 items-center my-auto justify-center text-center rounded-lg basis-24 grow">
      <div className="text-white bg-blue-500 rounded-full p-3">{icon}</div>
      <h3 className="text-lg">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default StepCard;
