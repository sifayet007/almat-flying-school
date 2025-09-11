import MegaMenu from "@/components/header/MegaMenu";
import FlightTraining from "@/components/home/FlightTraining";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import StateData from "@/components/home/StateData";
import TrialLesson from "@/components/home/TrialLesson";
import BookAppointment from "@/components/shared/BookAppointment";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <Services />
      <TrialLesson />
      {/* <MegaMenu /> */}
      <BookAppointment />
      <FlightTraining />
      <StateData />
    </div>
  );
}
