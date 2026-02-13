import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import InternationalPatientSupport from "../components/sections/InternationalPatientSupport";
import AreaOfExpertise from "../components/sections/AreaOfExpertise";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
// import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import { treatmentsPageData } from "../data/treatmentsData";
import Testimonials from "../components/treatments/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <About />
      <Services />
      <WhyChooseUs />

      <InternationalPatientSupport />
      <AreaOfExpertise />
      {/* <Testimonials /> */}
     <Testimonials testimonials={treatmentsPageData.testimonials} />
      

      <Blog />
      <Contact />
    </>
  );
}
