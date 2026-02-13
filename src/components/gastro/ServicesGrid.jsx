import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function ServicesGrid({ data }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
              <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">OUR SARGERY</span>
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Gastro Surgery Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced surgical treatments for all gastrointestinal conditions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((service, index) => {
              const Icon = Icons[service.icon] || Icons.Activity
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#58c8ca] to-[#4ab4b6] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
