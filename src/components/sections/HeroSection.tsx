import BookingForm from "../BookingForm";

function HeroSection() {
  return (
    <section className="max-w-none w-screen h-screen m-0 p-0 bg-hero bg-no-repeat bg-cover bg-center z-0 grid items-center md:pt-[100px]">
      <div className="flex flex-col lg:flex-row mx-10 justify-around lg:items-center">
        <div className="flex flex-col gap-5 mb-10 lg:w-[50%] text-center lg:text-left">
          <h1 className="text-white hidden sm:block text-4xl md:text-6xl">
            Your Luxury Journey Begins Here
          </h1>
          <p className="text-white hidden sm:block text-lg">
            Discover the finest way to travel along the sun-kissed coastlines
            with South Coast Transfer
          </p>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

export default HeroSection;
