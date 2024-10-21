import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    // HERO SECTION
    <section className="fixed top-0 left-0 w-full h-full m-0 p-0 bg-hero bg-no-repeat bg-cover bg-center z-0 grid items-center pt-[120px]">
      <div className="flex flex-col lg:flex-row mx-10 justify-around lg:items-center">
        <div className="flex flex-col gap-2 mb-10 lg:w-[50%] text-center lg:text-left">
          <h1 className="text-white">Your Luxury Journey Begins Here</h1>
          <p className="text-white">
            Discover the finest way to travel along the sun-kissed coastlines
            with South Coast Transfer
          </p>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}
