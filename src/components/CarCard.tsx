import Image from "next/image";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsSuitcaseFill } from "react-icons/bs";

interface Props {
  type: string;
  cars: string;
  passengers: number;
  bags: number;
  img: string;
}

function CarCard({ type, passengers, bags, img }: Props) {
  return (
    <div className="w-80 h-72 md:w-96 md:h-80 drop-shadow-xl bg-white-pure/80 flex flex-col gap-4 items-center my-auto justify-center text-center rounded-lg">
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
      <div className="flex flex-col items-center gap-2">
        <h3>{type}</h3>
        <div className="flex gap-4">
          <span className="flex items-center gap-1 text-gray-600">
            <FaPeopleGroup size={25} />
            <p>{passengers}</p>
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <BsSuitcaseFill size={25} />
            <p>{bags}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
