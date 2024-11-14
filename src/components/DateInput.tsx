import { Datepicker } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

interface Props {
  date: Date | undefined;
  setDate: (date: Date) => void;
}

function DateInput({ date, setDate }: Props) {
  const now = new Date();
  const minDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); //24 horas después

  // const minTime =
  //   date && date.toDateString() === now.toDateString()
  //     ? minDate // Minuto actual si es el mismo día que minDate
  //     : new Date(0, 0, 0, 0, 0); // Desde medianoche si no es hoy

  // const maxTime = new Date(0, 0, 0, 23, 59);

  return (
    <>
      <Datepicker
        responsive={{
          xsmall: {
            controls: ["date", "time"],
            display: "bottom",
            touchUi: true,
          },
          large: {
            controls: ["date", "time"],
            display: "anchored",
            touchUi: false,
          },
        }}
        min={minDate}
        dateFormat="D MMMM YYYY"
        timeFormat="HH:mm"
        stepMinute={5}
        value={date}
        onChange={(newDate) => {
          if (newDate.valueText) {
            setDate(new Date(newDate.valueText));
          }
        }}
        placeholder="Date and  time"
      />
      <style jsx global>{`
        .mbsc-windows.mbsc-textfield-wrapper {
          margin: 0;
        }

        .mbsc-windows-dark.mbsc-textfield {
          background: #35474a;
          color: rgb(245 245 245 / 0.8);
          border-color: #57d7f7;
          padding-top: 24px;
          padding-bottom: 24px;
          padding-left: 10px;
          border-radius: 0.25rem;
          cursor: pointer !important;
          z-index:0;
        }

        .mbsc-windows-dark.mbsc-popup,
        .mbsc-windows-dark.mbsc-popup-arrow {
          background: #35474a;
          border-color: #57d7f7;
        }
      `}</style>
    </>
  );
}

export default DateInput;
