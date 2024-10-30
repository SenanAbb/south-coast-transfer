"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import DateInput from "./DateInput";

function BookingForm() {
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [passengers, setPassengers] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(origin + destination + date + passengers);
  };

  return (
    <form
      className="flex flex-col gap-5 bg-blue-900 bg-opacity-80 p-6 rounded-lg sm:min-w-[550px]"
      onSubmit={handleSubmit}
    >
      <h2 className="text-white text-center">Book Your Ride</h2>
      <Input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={(e) => {
          setOrigin(e.currentTarget.value);
        }}
      />
      <Input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => {
          setDestination(e.currentTarget.value);
        }}
      />
      <DateInput date={date} setDate={setDate} />
      <Input
        type="select"
        options={[1, 2, 3, 4, 5, 6, 7, 8]}
        placeholder="Number of passengers"
        value={passengers}
        onSelectChange={(e) => {
          setPassengers(parseInt(e.currentTarget.value));
        }}
      />
      <Button text="Find Ride" />
    </form>
  );
}

export default BookingForm;
