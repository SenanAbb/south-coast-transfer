import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/confetti.css";

interface Props {
  date: Date | undefined;
  setDate: (date: Date) => void;
}

function DateInput({ date, setDate }: Props) {
  const now = new Date();
  const minDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); //24 horas después

  const minTime =
    date && date.toDateString() === now.toDateString()
      ? minDate // Minuto actual si es el mismo día que minDate
      : new Date(0, 0, 0, 0, 0); // Desde medianoche si no es hoy

  const maxTime = new Date(0, 0, 0, 23, 59);

  return (
    <>
      <Flatpickr
        value={date}
        onChange={(date) => date && setDate(date[0])}
        placeholder="Date"
        className="form-control w-full p-3 border border-blue-500 bg-black-400 text-white/80 placeholder-white/80 rounded outline-none hover:border-white/80 cursor-pointer"
        options={{
          enableTime: true,
          time_24hr: true,
          dateFormat: "d/m/Y - H:i",
          minDate: minDate,
          minTime: minTime,
          maxTime: maxTime,
        }}
      />

      <style jsx global>{`
        .flatpickr-months .flatpickr-month {
          background: #e8932f;
        }
        .flatpickr-weekdays {
          background: #e8932f;
        }
        span.flatpickr-weekday {
          background: #e8932f;
        }
        .flatpickr-current-month .flatpickr-monthDropdown-months {
          background: #e8932f;
        }
        .flatpickr-day.selected {
          background: #e8932f;
          border-color: #e8932f;
        }
      `}</style>
    </>
  );
}

export default DateInput;
