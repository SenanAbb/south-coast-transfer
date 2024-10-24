"use client";

import Image from "next/image";
import Container from "../Container";
import { Carousel } from "@material-tailwind/react";

function ImagesSection() {
  return (
    <section>
      <h1 className="text-center mb-14">Gallery</h1>
      <Container>
        <Carousel
          className="rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Image
            src="/images/carousel-1.webp"
            alt="Carousel 1"
            width={1500}
            height={0}
          />
          <Image
            src="/images/carousel-2.webp"
            alt="Carousel 2"
            width={1500}
            height={0}
          />
          <Image
            src="/images/carousel-3.webp"
            alt="Carousel 3"
            width={1500}
            height={0}
          />
          <Image
            src="/images/carousel-4.webp"
            alt="Carousel 4"
            width={1500}
            height={0}
          />
          <Image
            src="/images/carousel-5.webp"
            alt="Carousel 5"
            width={1500}
            height={0}
          />
          <Image
            src="/images/carousel-6.webp"
            alt="Carousel 6"
            width={1500}
            height={0}
          />
        </Carousel>
      </Container>
    </section>
  );
}

export default ImagesSection;
