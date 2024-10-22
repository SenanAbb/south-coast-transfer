import Image from "next/image";

interface Props {
  type: string;
  cars: string;
  seats: number;
  img: string;
}

function CarCard({ type, seats, img }: Props) {
  return (
    <div className="w-96 h-80 drop-shadow-lg bg-gray-100 flex flex-col gap-4 items-center my-auto justify-center text-center rounded-lg">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 bg-blue-500 rounded-full"></div>
        </div>
        <Image
          src={img}
          alt={`${type} car`}
          width={250}
          height={250}
          className="relative z-10"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{type}</h3>
        <span className="text-gray-400">Seats: Up to {seats} passengers</span>
      </div>
    </div>
  );
}

export default CarCard;
