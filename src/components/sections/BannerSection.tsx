import Image from "next/image";
import Container from "../Container";

function BannerSection() {
  return (
    <section className="bg-black-800 overflow-hidden">
      <Container>
        <div className="lg:hidden py-16 flex flex-col gap-10">
          <h1 className="text-white text-center">
            Your Trusted Coastal Travel Partner
          </h1>
          <div>
            <div className="flex items-center">
              <div className="h-[60px] w-2 bg-blue-500"></div>
              <h2 className="text-white italic ml-4">
                Luxury, Comfort, and Personalized Service
              </h2>
            </div>
            <p className="text-white/70 mt-6">
              At South Coast Transfer, we turn every journey into a memorable
              experience, redefining coastal travel with our commitment to
              excellence.
            </p>
          </div>
          <div className="mx-auto">
            <Image
              src="/images/mercedes-white.webp"
              alt="Mercedes white"
              width={500}
              height={500}
            />
          </div>
          <div>
            <div className="flex items-center justify-end">
              <h2 className="text-white text-right mr-4 italic">
                Premium Fleet and Professional Chauffeurs
              </h2>
              <div className="h-[60px] w-2 bg-blue-500"></div>
            </div>
            <p className="text-white/70 text-right mt-6">
              With attention to every detail, our professional chauffeurs and
              top-tier vehicles ensure your journey is luxurious and seamless
              from start to finish.
            </p>
          </div>
        </div>

        <div className="hidden lg:grid relative py-16 gap-10 z-0">
          <h1 className="text-white text-center mb-10">
            Your Trusted Coastal Travel Partner
          </h1>
          <div className="flex gap-20">
            <div>
              <div className="flex items-center">
                <div className="h-[60px] w-2 bg-blue-500"></div>
                <h2 className="text-white italic ml-4">
                  Luxury, Comfort, and Personalized Service
                </h2>
              </div>
              <p className="text-white/70 mt-4 mb-10">
                At South Coast Transfer, we turn every journey into a memorable
                experience, redefining coastal travel with our commitment to
                excellence.
              </p>
              <div className="flex items-center">
                <div className="h-[60px] w-2 bg-blue-500"></div>
                <h2 className="text-white ml-4 italic">
                  Premium Fleet and Professional Chauffeurs
                </h2>
              </div>
              <p className="text-white/70 mt-4">
                With attention to every detail, our professional chauffeurs and
                top-tier vehicles ensure your journey is luxurious and seamless
                from start to finish.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/mercedes-white.webp"
                alt="Mercedes white"
                width={800}
                height={500}
              />
              <div
                className="w-[1200px] h-60 bg-blue-500 absolute -rotate-45 -translate-x-72 -translate-y-64"
                style={{ zIndex: -1 }}
              ></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default BannerSection;
