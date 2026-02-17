import HeroSection from "../components/gastro/HeroSection";
import AboutSection from "../components/gastro/AboutSection";
import ServicesGrid from "../components/gastro/ServicesGrid";
import DoctorProfileSection from "../components/gastro/DoctorProfileSection";
import StatsSection from "../components/gastro/StatsSection";
import CTASection from "../components/gastro/CTASection";
import { bariatricPageData } from "../data/bariatricData";
import TestimonialsSection from "../components/gastro/TestimonialsSection";
import { gastroPageData } from "../data/gastroPageData";
import Testimonials from "../components/treatments/Testimonials";

export default function BariatricSurgeonAhmedabad() {
  return (
    <div className="bg-white">
      <HeroSection
        data={{
          title: bariatricPageData.hero.title,
          description_1: bariatricPageData.hero.description,
          description_2: "",
          primaryCTA: bariatricPageData.hero.primaryCTA,
        }}
      />

      <AboutSection
        data={{
          smallTitle: bariatricPageData.intro.heading,
          mainTitle: bariatricPageData.intro.subheading,
          paragraph_1: bariatricPageData.intro.description,
          paragraph_2: "",
          paragraph_3: "",
          image:
            "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
        }}
      />

      <ServicesGrid data={bariatricPageData.procedures} />

      {/* <DoctorProfileSection data={bariatricPageData.doctorProfile} /> */}

      <StatsSection data={bariatricPageData.stats} />

      {/* <TestimonialsSection data={gastroPageData.testimonials} /> */}
      <Testimonials />

      <CTASection />
    </div>
  );
}
