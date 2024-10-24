import BannerSection from "@/components/sections/BannerSection";
import CarouselSection from "@/components/sections/CarouselSection";
import FleetSection from "@/components/sections/FleetSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <FleetSection />
      <BannerSection />
      <HowItWorksSection />
      <CarouselSection />
      <TestimonialsSection />
    </>
  );
}
