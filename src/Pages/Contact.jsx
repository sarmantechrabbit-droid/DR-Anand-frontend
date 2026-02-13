import ContactHero from '../components/contact/ContactHero'
import ContactLayout from '../components/contact/ContactLayout'
import MapSection from '../components/contact/MapSection'
import contactData from '../data/contactData'

export default function Contact() {
  return (
    <div className="bg-white">
      <ContactHero
        title={contactData.hero.title}
        subtitle={contactData.hero.subtitle}
        breadcrumb={contactData.hero.breadcrumb}
      />

      <ContactLayout
        infoCards={contactData.infoCards}
        formContent={contactData.form}
      />

      <MapSection mapData={contactData.map} />
    </div>
  )
}
