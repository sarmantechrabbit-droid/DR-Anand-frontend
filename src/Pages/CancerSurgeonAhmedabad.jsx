import HeroSection from '../components/gastro/HeroSection'
import AboutSection from '../components/gastro/AboutSection'
import ServicesGrid from '../components/gastro/ServicesGrid'
import WhyChooseSection from '../components/gastro/WhyChooseSection'
import DoctorProfileSection from '../components/gastro/DoctorProfileSection'
import TestimonialsSection from '../components/gastro/TestimonialsSection'
import FAQ from '../components/treatments/FAQ'
import CTASection from '../components/gastro/CTASection'
import { cancerSurgeonPageData } from '../data/cancerData'

export default function CancerSurgeonAhmedabad() {
  return (
    <div className="bg-white">
      <HeroSection data={{
        title: cancerSurgeonPageData.hero.title,
        description_1: cancerSurgeonPageData.hero.description,
        description_2: "",
        primaryCTA: cancerSurgeonPageData.hero.primaryCTA
      }} />
      
      <AboutSection data={{
        smallTitle: cancerSurgeonPageData.aboutSection.heading,
        mainTitle: cancerSurgeonPageData.aboutSection.subheading,
        paragraph_1: cancerSurgeonPageData.aboutSection.description,
        paragraph_2: "",
        paragraph_3: "",
        image: cancerSurgeonPageData.aboutSection.image
      }} />
      
      <ServicesGrid data={cancerSurgeonPageData.cancerTypesSection} />
      
      <WhyChooseSection data={cancerSurgeonPageData.treatmentBenefits} />
      
      {/* <DoctorProfileSection data={cancerSurgeonPageData.doctorProfile} /> */}
      
      <TestimonialsSection data={cancerSurgeonPageData.testimonials} />
      
      <FAQ faqData={cancerSurgeonPageData.faq} />
      
      <CTASection />
    </div>
  )
}
