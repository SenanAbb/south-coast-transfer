"use client";

import Button from "../Button";
import CarCard from "../CarCard";
import { useRouter } from "next/navigation";

const fleet = [
  {
    type: "Standart",
    cars: "Skoda Octavia, Toyota Prius or similar",
    passengers: 4,
    img: "/images/skoda2.webp",
  },
  {
    type: "Standart large",
    cars: "Volvo V60, Audi A4 Avant, BMW 3 Series Touring or similar",
    passengers: 4,
    img: "/images/audi2.webp",
  },
  {
    type: "Premium",
    cars: "Mercedes E Class, BMW 5 Series, Cadillac XTS or similar",
    passengers: 3,
    img: "/images/s-class.webp",
  },
  {
    type: "Van Standart",
    cars: "Mercedes Vito, Ford Custom, Chevrolet Suburban or similar",
    passengers: 7,
    img: "/images/caravelle.webp",
  },
  {
    type: "Van Premium",
    cars: "Mercedes V Class, Cadillac Escalade or similar",
    passengers: 7,
    img: "/images/v-class.webp",
  },
];

function FleetSection() {
  const router = useRouter();

  return (
    <section>
      <h1 className="text-center mb-20">Choose Your Perfect Ride</h1>
      <div className="flex flex-col items-center gap-14 lg:flex lg:flex-row lg:gap-14">
        <CarCard
          type={fleet[0].type}
          cars={fleet[0].cars}
          seats={fleet[0].passengers}
          img={fleet[0].img}
        />
        <CarCard
          type={fleet[1].type}
          cars={fleet[1].cars}
          seats={fleet[1].passengers}
          img={fleet[1].img}
        />
        <CarCard
          type={fleet[3].type}
          cars={fleet[3].cars}
          seats={fleet[3].passengers}
          img={fleet[3].img}
        />
      </div>
      <div className="w-full text-center mt-20">
        <Button text="View all" onClick={() => router.push("/fleet")} />
      </div>
    </section>
  );
}

export default FleetSection;
