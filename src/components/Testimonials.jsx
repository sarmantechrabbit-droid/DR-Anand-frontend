import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import siteData from '../data/siteData.json'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % siteData.testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % siteData.testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + siteData.testimonials.length) % siteData.testimonials.length)

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Patients Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from patients who trusted us with their care
          </p>
        </motion.div>

        {/* Main Slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 md:p-12 rounded-2xl relative"
            >
              <Quote className="text-blue-600 opacity-20 absolute top-6 right-6" size={48} />

              <div className="flex gap-1 mb-6">
                {[...Array(siteData.testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                "{siteData.testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#58c8ca] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {siteData.testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {siteData.testimonials[current].name}
                  </p>
                  <p className="text-sm text-gray-600">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <ChevronLeft className="text-[#58c8ca]" size={24} />
            </button>
            
            <div className="flex items-center gap-2">
              {siteData.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? 'w-8 bg-[#58c8ca]' : 'w-2.5 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <ChevronRight className="text-[#58c8ca]" size={24} />
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {siteData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer p-6 rounded-xl transition-all ${
                current === index
                  ? 'bg-[#58c8ca] text-white shadow-xl'
                  : 'bg-gray-50 text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={`${current === index ? 'text-yellow-300 fill-yellow-300' : 'text-yellow-400 fill-yellow-400'}`} size={16} />
                ))}
              </div>
              <p className={`text-sm mb-4 line-clamp-3 ${current === index ? 'text-white' : 'text-gray-600'}`}>
                "{testimonial.text}"
              </p>
              <p className={`font-semibold text-sm ${current === index ? 'text-white' : 'text-gray-900'}`}>
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
