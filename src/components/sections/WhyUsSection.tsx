import Image from "next/image";
import { FaCar, FaUserTie, FaRegHandshake, FaLaptop } from "react-icons/fa";
import Container from "../Container";

function WhyUsSection() {
  return (
    <section>
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col gap-6 mb-10">
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
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="flex items-center gap-3">
              <FaCar />
              Luxury Fleet
            </h3>
            <p>
              Enjoy a premium ride with our meticulously maintained, high-end
              vehicles that guarantee comfort and style.
            </p>
            <h3 className="flex items-center gap-3">
              <FaUserTie />
              Professional Chauffeurs
            </h3>
            <p>
              Our experienced drivers ensure a safe, smooth, and courteous
              journey, tailored to your preferences.
            </p>
            <h3 className="flex items-center gap-3">
              <FaRegHandshake />
              Customized Experiences
            </h3>
            <p>
              From personalized pick-ups to flexible routes, we offer bespoke
              services that cater to your unique needs.
            </p>
            <h3 className="flex items-center gap-3">
              <FaLaptop />
              Seamless Booking
            </h3>
            <p>
              Our user-friendly booking system makes reserving your luxurious
              ride quick and easy, with 24/7 support.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyUsSection;
