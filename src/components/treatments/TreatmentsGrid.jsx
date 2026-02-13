import TreatmentCard from './TreatmentCard'
import SectionWrapper from './SectionWrapper'

export default function TreatmentsGrid({ treatments }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <TreatmentCard key={treatment.id} treatment={treatment} index={index} />
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
