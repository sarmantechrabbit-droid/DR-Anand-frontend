import SectionWrapper from './SectionWrapper'

export default function DetailedContentSection({ data }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {data.title}
            </h2>
          </div>

          <div className="space-y-12">
            {data.sections.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
