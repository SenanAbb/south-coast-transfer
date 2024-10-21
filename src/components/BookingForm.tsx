"use client";

import Button from "./Button";
import Input from "./Input";

function BookingForm() {
  return (
    <form className="flex flex-col gap-5 bg-blue-900 bg-opacity-80 p-6 rounded-lg sm:min-w-[550px]">
      <h2 className="text-white text-center">Book Your Ride</h2>
      <Input type="text" placeholder="Origin" />
      <Input type="text" placeholder="Destination" />
      <div className="flex gap-4">
        <Input type="date" placeholder="Date"/>
        <Input type="time" placeholder="Time"/>
      </div>
      <Input type="number" placeholder="Number of passengers" min={1} max={8} />
      <Button text="Find Ride" onClick={() => alert("are you gei?")} />
    </form>
  );
}

export default BookingForm;
