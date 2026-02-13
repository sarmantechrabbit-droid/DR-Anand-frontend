import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function WhyChooseSection({ data }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
              <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">WHY CHOOSE US</span>
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Dr. Anand?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience excellence in gastrointestinal surgery with proven expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((benefit, index) => {
              const Icon = Icons[benefit.icon] || Icons.CheckCircle
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E40AF]/10 to-[#0EA5E9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-[#58c8ca]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
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
