import BookingForm from "@/components/BookingForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="absolute top-0 left-0 w-full h-full m-0 p-0 bg-hero bg-no-repeat bg-cover bg-center z-0 grid items-center md:pt-[100px]">
        <div className="flex flex-col lg:flex-row mx-10 justify-around lg:items-center">
          <div className="flex flex-col gap-5 mb-10 lg:w-[50%] text-center lg:text-left">
            <h1 className="text-white hidden sm:block text-4xl md:text-6xl">
              Your Luxury Journey Begins Here
            </h1>
            <p className="text-white hidden sm:block">
              Discover the finest way to travel along the sun-kissed coastlines
              with South Coast Transfer
            </p>
          </div>
          <BookingForm />
        </div>
      </section>
      <section>
        <div>
          <div>
            <h1>Why South Coast Transfer?</h1>
            <p>
              Discover the finest way to travel along the sun-kissed coastlines
              with South Coast Transfer. Our exclusive fleet and exceptional
              services ensure a seamless, comfortable, and luxurious experience
              from start to finish. Whether it’s a business trip, a special
              event, or a coastal adventure, we’ve got you covered.
            </p>
            <Image
              src="/images/mercedes1.webp"
              alt="Car image"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h2>Luxury Fleet</h2>
            <p>
              Enjoy a premium ride with our meticulously maintained, high-end
              vehicles that guarantee comfort and style.
            </p>
            <h2>Professional Chauffeurs</h2>
            <p>
              Our experienced drivers ensure a safe, smooth, and courteous
              journey, tailored to your preferences.
            </p>
            <h2>Customized Experiences</h2>
            <p>
              From personalized pick-ups to flexible routes, we offer bespoke
              services that cater to your unique needs.
            </p>
            <h2>Seamless Booking</h2>
            <p>
              Our user-friendly booking system makes reserving your luxurious
              ride quick and easy, with 24/7 support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
