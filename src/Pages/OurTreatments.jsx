import TreatmentsHero from '../components/treatments/TreatmentsHero'
import TreatmentsGrid from '../components/treatments/TreatmentsGrid'
import ExperienceMessage from '../components/treatments/ExperienceMessage'
import DoctorProfile from '../components/treatments/DoctorProfile'
import Testimonials from '../components/treatments/Testimonials'
import CTASection from '../components/treatments/CTASection'
import { treatmentsPageData } from '../data/treatmentsData'
import PageHero from '../components/PageHero'
import FAQ from '../components/about/FAQ'

export default function OurTreatments() {
  return (
    <div className="bg-white">
  <PageHero 
          // badge="OUR BLOG"
          title="Our Treatments"
          subtitle="Structural gastrointestinal diseases are those where your bowel looks abnormal upon examination and also doesn’t work properly.."
        />
      <TreatmentsGrid treatments={treatmentsPageData.sections} />
      <ExperienceMessage message={treatmentsPageData.experienceMessage} />
      <DoctorProfile data={treatmentsPageData.doctorProfile} />
      <Testimonials />
      <FAQ />
      <CTASection data={treatmentsPageData.contactCallToAction} />
    </div>
  )
}
  
