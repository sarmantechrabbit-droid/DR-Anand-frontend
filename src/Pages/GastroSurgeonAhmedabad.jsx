import HeroSection from '../components/gastro/HeroSection'
import AboutSection from '../components/gastro/AboutSection'
import ServicesGrid from '../components/gastro/ServicesGrid'
import DoctorProfileSection from '../components/gastro/DoctorProfileSection'
import StatsSection from '../components/gastro/StatsSection'
import TestimonialsSection from '../components/gastro/TestimonialsSection'
import CTASection from '../components/gastro/CTASection'
import { gastroPageData } from '../data/gastroPageData'

export default function GastroSurgeonAhmedabad() {
  return (
    <div className="bg-white">
      <HeroSection data={gastroPageData.hero} />
      <AboutSection data={gastroPageData.aboutSection} />
      <ServicesGrid data={gastroPageData.treatments} />
      {/* <DoctorProfileSection data={gastroPageData.doctorProfile} /> */}
      <StatsSection data={gastroPageData.stats} />
      <TestimonialsSection data={gastroPageData.testimonials} />
      <CTASection />
    </div>
  )
}
