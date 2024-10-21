import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <>
      {/* // HERO SECTION */}
      <section className="absolute top-0 left-0 w-full h-full m-0 p-0 bg-hero bg-no-repeat bg-cover bg-center z-0 grid items-center md:pt-[100px]">
        <div className="flex flex-col lg:flex-row mx-10 justify-around lg:items-center">
          <div className="flex flex-col gap-5 mb-10 lg:w-[50%] text-center lg:text-left">
            <h1 className="text-white text-4xl md:text-6xl">Your Luxury Journey Begins Here</h1>
            <p className="text-white hidden sm:block">
              Discover the finest way to travel along the sun-kissed coastlines
              with South Coast Transfer
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
      <section className="h-[1000px] bg-black-900"></section>
    </>
  );
}
