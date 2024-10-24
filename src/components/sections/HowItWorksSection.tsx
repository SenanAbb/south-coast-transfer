import Container from "../Container";
import { MdTouchApp, MdFavorite, MdLocationPin } from "react-icons/md";
import { FaTaxi } from "react-icons/fa";
import StepCard from "../StepCard";

const steps = [
  {
    title: "Book your ride",
    description: "Easily reserve your ride online.",
    icon: <MdTouchApp size={40} />,
  },
  {
    title: "Get Picked Up",
    description: "Your driver arrives at the scheduled time.",
    icon: <FaTaxi size={40} />,
  },
  {
    title: "Enjoy the Journey",
    description: "Relax in comfort and enjoy your trip.",
    icon: <MdFavorite size={40} />,
  },
  {
    title: "Arrive in Style",
    description: "Reach your destination feeling refreshed and stylish.",
    icon: <MdLocationPin size={40} />,
  },
];
function HowItWorksSection() {
  return (
    <section>
      <Container>
        <h1 className="text-center mb-14">How Does It Work</h1>
        <div className="flex flex-wrap items-start gap-10">
          {steps.map((step, i) => (
            <StepCard
              key={i}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorksSection;
