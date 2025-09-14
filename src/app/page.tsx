import AccordionLast from "@/components/home/Accordion";
import DedicatedFlight from "@/components/home/DedicatedFlight";
import FlightTraining from "@/components/home/FlightTraining";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import StateData from "@/components/home/StateData";
import StudentTestimonial from "@/components/home/StudentsTestimonial";
import TrialLesson from "@/components/home/TrialLesson";
import BookAppointment from "@/components/shared/BookAppointment";


export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <Services />
      <TrialLesson />
      <BookAppointment />
      <FlightTraining />
      <StateData />
      <DedicatedFlight />
      <StudentTestimonial />
      <AccordionLast />

    </div>
  );
}
