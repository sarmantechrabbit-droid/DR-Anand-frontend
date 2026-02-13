import { motion } from 'framer-motion'
import { Play, Quote } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Testimonials({ testimonials }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
              <span className="text-[#58c8ca] font-bold uppercase text-sm tracking-wider">TESTIMONIALS</span>
              <div className="w-12 h-0.5 bg-[#58c8ca]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Patient Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative mb-6 rounded-xl overflow-hidden group cursor-pointer">
                  <img
                    src={testimonial.image}
                    alt={testimonial.imageDescription}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <Play size={24} className="text-[#58c8ca] ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>

                <Quote className="text-[#58c8ca] mb-4" size={28} />
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {testimonial.description}
                </p>
                <div className="font-bold text-gray-900">
                  {testimonial.name}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
