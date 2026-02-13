import AboutHero from '../components/about/AboutHero'
import DoctorProfile from '../components/about/DoctorProfile'
import Education from '../components/about/Education'
import Experience from '../components/about/Experience'
import Specializations from '../components/about/Specializations'
import FAQ from '../components/about/FAQ'

export default function AboutPage() {
  return (
    // pt-20 
    <div className="">
      <AboutHero />
      <DoctorProfile />
      <Education />
      <Experience />
      <Specializations />
      <FAQ />
    </div>
  )
}
