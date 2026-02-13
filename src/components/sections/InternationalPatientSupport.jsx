import * as Icons from 'lucide-react'
import siteData from '../../data/siteData.json'

export default function InternationalPatientSupport() {
  const supportData = siteData.internationalPatientSupport

  const getIcon = (iconName) => {
    const Icon = Icons[iconName]
    return Icon ? <Icon size={34} /> : <Icons.Globe2 size={34} />
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f3554] leading-tight">
            {supportData.title}
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            {supportData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {supportData.cards.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-[#d8e2ed] bg-white p-6 sm:p-7 min-h-[200px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#e4f8f9] text-[#58c8ca] mb-5 group-hover:bg-[#58c8ca] group-hover:text-white transition-colors">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-2xl font-semibold text-[#0f1f2f] leading-snug">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
