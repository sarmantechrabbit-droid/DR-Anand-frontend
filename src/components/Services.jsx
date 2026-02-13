import * as Icons from 'lucide-react'
import siteData from '../data/siteData.json'

export default function Services() {
  const getIcon = (iconName) => {
    const Icon = Icons[iconName]
    return Icon ? <Icon size={40} strokeWidth={1.5} /> : <Icons.Activity size={40} strokeWidth={1.5} />
  }

  return (
    <section id="services" className="py-20 bg-[#256c79] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-10 top-20 w-64 h-64">
          <Icons.Heart size={200} className="text-white" strokeWidth={0.5} />
        </div>
        <div className="absolute right-10 top-40 w-64 h-64 rotate-45">
          <Icons.Syringe size={200} className="text-white" strokeWidth={0.5} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block text-[#58c8ca] px-4 py-2 mb-4 text-sm font-bold uppercase tracking-wider">
            OUR SURGERIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Leading the Way in Healthcare<br />Excellence and Innovation.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.services.slice(0, 4).map((service) => (
            <div 
              key={service.id} 
              className="group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 bg-[#244b55] hover:bg-[#133139] hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:rotate-12 bg-[#3b9dd9]/20 text-[#58c8ca]">
                {getIcon(service.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                {service.title}
              </h3>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Icons.Check size={16} className="mt-0.5 flex-shrink-0 text-[#3b9dd9]" />
                  <span>{service.description}</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Icons.Check size={16} className="mt-0.5 flex-shrink-0 text-[#3b9dd9]" />
                  <span>Advanced treatment options</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-300">
                  <Icons.Check size={16} className="mt-0.5 flex-shrink-0 text-[#3b9dd9]" />
                  <span>Expert medical care</span>
                </li>
              </ul>
              
              <button className="flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all group/btn bg-[#3b4d5c] text-white hover:bg-[#3b9dd9]">
                View Details
                <div className="w-8 h-8 rounded-full bg-[#3b9dd9] flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                  <Icons.ArrowRight size={16} className="text-white" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
