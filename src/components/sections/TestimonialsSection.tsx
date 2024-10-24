import Button from "../Button";
import Container from "../Container";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  opinion: string;
  stars: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Emily Johnson",
    opinion: "Outstanding service! Truly attentive and professional.",
    stars: 5,
  },
  {
    name: "Michael Smith",
    opinion:
      "A fantastic experience with South Coast Transfer. Highly recommend!",
    stars: 5,
  },
  {
    name: "Sophia Brown",
    opinion: "Reliable and courteous. The best transfer service in Malaga!",
    stars: 5,
  },
];

function TestimonialsSection() {
  return (
    <section>
      <h1 className="text-center mb-16">Client Feedback</h1>
      <Container>
        <div className="flex flex-col lg:flex-row gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 bg-blue-50 border border-yellow-500/20 rounded-lg p-7"
            >
              <h3>{t.name}</h3>
              <p className="text-center">{t.opinion}</p>
              <div className="text-yellow-500 flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button text="Book now" href="/" />
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
