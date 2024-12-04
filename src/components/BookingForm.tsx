'use client';

import { useState } from 'react';
import Button from './Button';
import Input from './Input';
// import DateInput from './DateInput';

function BookingForm() {
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(origin + destination + date + passengers);
  };

  const check = () => {
    return (
      origin === '' ||
      destination === '' ||
      date === undefined ||
      passengers === undefined
    );
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
      {/* <DateInput date={date} setDate={setDate} /> */}
      <Input
        type="date"
        value=""
        placeholder="Date"
        onChange={() => {
          setDate(new Date());
        }}
      />
      <Input
        type="date"
        value=""
        placeholder="Date"
        onChange={() => {
          setDate(new Date());
        }}
      />
      <Input
        type="select"
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          { value: '7', label: '7' },
          { value: '8', label: '8' },
        ]}
        placeholder="Passengers"
        value={passengers}
        onSelectChange={(passengers) => {
          setPassengers(parseInt(passengers));
        }}
      />
      <Button disabled={check()} text="Find Ride" />
    </form>
  );
}

export default BookingForm;
