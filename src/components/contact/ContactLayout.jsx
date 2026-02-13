import ContactInfoCard from './ContactInfoCard'
import ContactForm from './ContactForm'

export default function ContactLayout({ infoCards, formContent }) {
  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {infoCards.map((item, index) => (
              <ContactInfoCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <ContactForm formContent={formContent} />
        </div>
      </div>
    </section>
  )
}
