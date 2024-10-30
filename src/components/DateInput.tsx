import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  date: Date | null;
  setDate: (date: Date) => void;
}

function DateInput({ date, setDate }: Props) {
  const now = new Date();

  const minTime =
    date && date.toDateString() === now.toDateString()
      ? now // Minuto actual si hoy
      : new Date(0, 0, 0, 0, 0); // Desde medianoche si no es hoy

  const maxTime = new Date(0, 0, 0, 23, 59);

  return (
    <>
      <DatePicker
        value={date ? format(date, "dd/MM/yyyy HH:mm") : undefined}
        dateFormat={"dd/MM/yyyy"}
        onChange={(date) => date && setDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        className="w-full p-3 border border-blue-500 bg-black-400 text-white/80 placeholder-white/80 rounded outline-none z-0"
        minDate={new Date()}
        minTime={minTime}
        maxTime={maxTime}
        placeholderText="Date"
      />

      <style jsx global>{`
        .react-datepicker-wrapper {
          width: 100%;
          z-index: 0 !important;
        }
      `}</style>
    </>
  );
}

export default DateInput;
